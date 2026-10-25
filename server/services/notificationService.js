const { run, query } = require('../database/db');

class NotificationService {
  /**
   * Create a notification record for a specific user
   */
  static notify({ recipientId, senderId = null, type, titleAr, titleEn, messageAr, messageEn, linkUrl = null }) {
    try {
      const res = run(`
        INSERT INTO notifications (recipient_user_id, sender_user_id, type, title_ar, title_en, message_ar, message_en, link_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, [recipientId, senderId, type, titleAr, titleEn, messageAr, messageEn, linkUrl]);
      return res.lastInsertRowid;
    } catch (err) {
      console.error('Error creating notification:', err);
      return null;
    }
  }

  /**
   * Notify all Admins and HR Managers
   */
  static notifyStaffRoles({ roles = ['super_admin', 'hr_manager'], senderId = null, type, titleAr, titleEn, messageAr, messageEn, linkUrl = null }) {
    try {
      const placeholders = roles.map(() => '?').join(',');
      const users = query(`SELECT id FROM users WHERE role IN (${placeholders}) AND is_active = 1`, roles);
      for (const u of users) {
        this.notify({
          recipientId: u.id,
          senderId,
          type,
          titleAr,
          titleEn,
          messageAr,
          messageEn,
          linkUrl
        });
      }
    } catch (err) {
      console.error('Error notifying staff roles:', err);
    }
  }

  /**
   * Task Assigned Notification
   */
  static notifyTaskAssigned({ taskId, taskTitleAr, taskTitleEn, assigneeId, assignerId, assignerName }) {
    this.notify({
      recipientId: assigneeId,
      senderId: assignerId,
      type: 'task_assigned',
      titleAr: `مهمة جديدة: ${taskTitleAr}`,
      titleEn: `New Task: ${taskTitleEn}`,
      messageAr: `قام ${assignerName || 'المشرف'} بإسناد مهمة جديدة لك بعنوان: ${taskTitleAr}`,
      messageEn: `${assignerName || 'Management'} assigned a new task to you: ${taskTitleEn}`,
      linkUrl: `/tasks?id=${taskId}`
    });
  }

  /**
   * Task Status Updated Notification
   */
  static notifyTaskStatusChanged({ taskId, taskTitleAr, taskTitleEn, newStatus, updaterName, notifyUserId }) {
    const statusMap = {
      todo: { ar: 'قيد الانتظار', en: 'Pending' },
      in_progress: { ar: 'قيد التنفيذ', en: 'In Progress' },
      in_review: { ar: 'قيد المراجعة', en: 'In Review' },
      completed: { ar: 'مكتملة بنجاح', en: 'Completed' },
      cancelled: { ar: 'ملغية', en: 'Cancelled' }
    };

    const statusAr = statusMap[newStatus]?.ar || newStatus;
    const statusEn = statusMap[newStatus]?.en || newStatus;

    if (notifyUserId) {
      this.notify({
        recipientId: notifyUserId,
        senderId: null,
        type: 'task_status_changed',
        titleAr: `تحديث حالة مهمة: ${taskTitleAr}`,
        titleEn: `Task Status Updated: ${taskTitleEn}`,
        messageAr: `قام ${updaterName} بتحديث حالة المهمة إلى: "${statusAr}"`,
        messageEn: `${updaterName} updated task status to: "${statusEn}"`,
        linkUrl: `/tasks?id=${taskId}`
      });
    }
  }

  /**
   * New RFQ Received Notification
   */
  static notifyNewRFQ({ quoteNumber, companyName }) {
    this.notifyStaffRoles({
      roles: ['super_admin', 'hr_manager', 'branch_manager'],
      type: 'rfq_alert',
      titleAr: `طلب عرض سعر جديد (${quoteNumber})`,
      titleEn: `New Quote Request (${quoteNumber})`,
      messageAr: `ورد طلب عرض سعر وتوريد تجاري جديد من: ${companyName}`,
      messageEn: `New B2B RFQ quotation received from: ${companyName}`,
      linkUrl: `/quotes?ref=${quoteNumber}`
    });
  }

  /**
   * New Pharmacovigilance Report Alert
   */
  static notifyNewPV({ reportRef, productName, severity }) {
    this.notifyStaffRoles({
      roles: ['super_admin', 'hr_manager', 'employee'], // Reem / QPPV
      type: 'pv_alert',
      titleAr: `تنبيه تيقظ دوائي (${reportRef}) - ${productName}`,
      titleEn: `Pharmacovigilance Alert (${reportRef}) - ${productName}`,
      messageAr: `تم الإبلاغ عن عرض جانبي للمستحضر (${productName}) بدرجة خطورة: ${severity}`,
      messageEn: `Adverse reaction reported for (${productName}) with severity: ${severity}`,
      linkUrl: `/pv?ref=${reportRef}`
    });
  }
}

module.exports = NotificationService;
