const { query, get, run } = require('../database/db');
const NotificationService = require('../services/notificationService');

/**
 * Submit a customer / doctor / pharmacy inquiry (Public)
 */
const createInquiry = async (req, res) => {
  try {
    const {
      client_name,
      customer_name,
      client_contact,
      phone,
      email,
      client_type,
      customer_role,
      subject,
      category,
      message,
      product_id
    } = req.body;

    const name = (client_name || customer_name || '').trim();
    const contact = (client_contact || phone || email || '').trim();
    const subj = (subject || category || 'استفسار دوائي وطبي').trim();
    const msg = (message || '').trim();
    const type = client_type || customer_role || 'pharmacist';

    if (!name || !contact || !msg) {
      return res.status(400).json({
        success: false,
        message_en: 'Name, Contact, and Message are required.',
        message_ar: 'الاسم، وسيلة التواصل (هاتف/إيميل)، والرسالة حقول مطلوبة.'
      });
    }

    const count = get('SELECT COUNT(*) as count FROM customer_inquiries');
    const inquiryNumber = `INQ-2026-${String((count.count || 0) + 1).padStart(3, '0')}`;

    const result = run(`
      INSERT INTO customer_inquiries (
        inquiry_number, client_name, client_contact,
        client_type, subject, message, product_id, status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, 'new')
    `, [
      inquiryNumber,
      name,
      contact,
      type,
      subj,
      msg,
      product_id || null
    ]);

    const newId = Number(result.lastInsertRowid);

    // Notify Marketing and Admins
    try {
      const marketingUsers = query("SELECT id FROM users WHERE role IN ('marketing', 'super_admin') AND is_active = 1");
      marketingUsers.forEach(u => {
        NotificationService.notify({
          recipientId: u.id,
          type: 'rfq_alert',
          titleAr: `استفسار عميل جديد: ${subj}`,
          titleEn: `New Customer Inquiry: ${subj}`,
          messageAr: `ورد استفسار طبي جديد من ${name} (${inquiryNumber}) بخصوص: ${subj}`,
          messageEn: `New medical inquiry received from ${name} (${inquiryNumber}).`,
          linkUrl: '#portal'
        });
      });
    } catch (e) {
      console.warn('Failed to dispatch inquiry notification:', e.message);
    }

    return res.status(201).json({
      success: true,
      message_en: `Thank you. Your inquiry (${inquiryNumber}) has been submitted. Our marketing and medical affairs team will respond shortly.`,
      message_ar: `شكراً لتواصلك. تم استلام استفسارك (${inquiryNumber}) بنجاح. سيقوم فريق التسويق والشؤون الطبية بالرد عليك قريباً.`,
      inquiryId: newId,
      inquiryNumber
    });
  } catch (err) {
    console.error('createInquiry error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to submit inquiry.',
      message_ar: 'فشل في إرسال الاستفسار.'
    });
  }
};

/**
 * List inquiries (Marketing / Admin)
 */
const getInquiries = async (req, res) => {
  try {
    const { status, client_type, search } = req.query;

    let sql = `
      SELECT 
        ci.*,
        ci.client_name as customer_name,
        ci.client_contact as phone,
        ci.client_type as customer_role,
        ci.subject as category,
        ci.reply_message as reply_ar,
        p.trade_name_ar as product_trade_name_ar,
        p.trade_name_en as product_trade_name_en,
        u_reply.name_ar as replier_name_ar,
        u_reply.name_en as replier_name_en
      FROM customer_inquiries ci
      LEFT JOIN products p ON ci.product_id = p.id
      LEFT JOIN users u_reply ON ci.replied_by_user_id = u_reply.id
      WHERE 1=1
    `;
    const params = [];

    if (status) {
      sql += ' AND ci.status = ?';
      params.push(status);
    }

    if (client_type) {
      sql += ' AND ci.client_type = ?';
      params.push(client_type);
    }

    if (search) {
      sql += ' AND (ci.client_name LIKE ? OR ci.subject LIKE ? OR ci.inquiry_number LIKE ?)';
      const s = `%${search}%`;
      params.push(s, s, s);
    }

    sql += ' ORDER BY ci.id DESC';

    const inquiries = query(sql, params);

    return res.json({
      success: true,
      count: inquiries.length,
      inquiries
    });
  } catch (err) {
    console.error('getInquiries error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve inquiries.',
      message_ar: 'فشل في استرجاع استفسارات العملاء.'
    });
  }
};

/**
 * Reply to customer inquiry (Marketing Specialist / Admin)
 */
const replyInquiry = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { reply_message, reply_ar, reply_en, status = 'replied' } = req.body;
    const replyText = (reply_message || reply_ar || reply_en || '').trim();

    if (!id || !replyText) {
      return res.status(400).json({
        success: false,
        message_en: 'Inquiry ID and reply message are required.',
        message_ar: 'معرف الاستفسار ونص الرد مطلوبان.'
      });
    }

    const inquiry = get('SELECT * FROM customer_inquiries WHERE id = ?', [id]);
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message_en: 'Inquiry not found.',
        message_ar: 'الاستفسار غير موجود.'
      });
    }

    run(`
      UPDATE customer_inquiries
      SET reply_message = ?,
          replied_by_user_id = ?,
          replied_at = CURRENT_TIMESTAMP,
          status = ?
      WHERE id = ?
    `, [replyText, user.id, status, id]);

    const updated = get('SELECT * FROM customer_inquiries WHERE id = ?', [id]);

    return res.json({
      success: true,
      message_en: 'Reply recorded successfully and customer inquiry status updated.',
      message_ar: 'تم تسجيل رد فريق التسويق الطبي وتحديث حالة الاستفسار بنجاح.',
      inquiry: updated
    });
  } catch (err) {
    console.error('replyInquiry error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to record reply.',
      message_ar: 'فشل في تسجيل الرد على الاستفسار.'
    });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  replyInquiry
};
