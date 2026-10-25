const { query, get, run } = require('../database/db');
const NotificationService = require('../services/notificationService');

const createReport = async (req, res) => {
  try {
    const {
      reporter_name,
      reporter_role = 'Healthcare Professional',
      phone,
      email,
      patient_initials,
      patient_age,
      patient_gender,
      product_name,
      batch_number,
      adverse_reaction,
      severity = 'mild',
      action_taken
    } = req.body;

    if (!reporter_name || !phone || !product_name || !adverse_reaction) {
      return res.status(400).json({
        success: false,
        message_en: 'Reporter Name, Phone, Product Name, and Adverse Reaction are required.',
        message_ar: 'اسم المبلغ، رقم الهاتف، اسم المستحضر، وتفاصيل العرض الجانبي حقول مطلوبة.'
      });
    }

    const count = get('SELECT COUNT(*) as count FROM pharmacovigilance_reports');
    const reportReference = `PV-2026-${String((count.count || 0) + 1001)}`;

    run(`
      INSERT INTO pharmacovigilance_reports (
        report_reference, reporter_name, reporter_role, phone,
        email, patient_initials, patient_age, patient_gender,
        product_name, batch_number, adverse_reaction, severity,
        action_taken, status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `, [
      reportReference, reporter_name.trim(), reporter_role, phone.trim(),
      email || null, patient_initials || null, patient_age || null, patient_gender || null,
      product_name.trim(), batch_number || null, adverse_reaction.trim(), severity,
      action_taken || null
    ]);

    // Send Alert to QPPV and Management
    NotificationService.notifyNewPV({
      reportRef: reportReference,
      productName: product_name.trim(),
      severity
    });

    return res.status(201).json({
      success: true,
      message_en: `Pharmacovigilance report submitted successfully. Reference: ${reportReference}. Our medical safety team will review it immediately.`,
      message_ar: `تم تسجيل بلاغ التيقظ الدوائي بنجاح. الرقم المرجعي: ${reportReference}. سيقوم الفريق الطبي بمراجعته فوراً.`,
      reportReference
    });
  } catch (err) {
    console.error('createPVReport error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to submit pharmacovigilance report.',
      message_ar: 'فشل في إرسال بلاغ التيقظ الدوائي.'
    });
  }
};

const getReports = async (req, res) => {
  try {
    const { status, severity, search } = req.query;

    let sql = 'SELECT * FROM pharmacovigilance_reports WHERE 1=1';
    const params = [];

    if (status) {
      sql += ' AND status = ?';
      params.push(status);
    }

    if (severity) {
      sql += ' AND severity = ?';
      params.push(severity);
    }

    if (search) {
      sql += ' AND (report_reference LIKE ? OR product_name LIKE ? OR batch_number LIKE ? OR reporter_name LIKE ?)';
      const s = `%${search}%`;
      params.push(s, s, s, s);
    }

    sql += ' ORDER BY created_at DESC';

    const reports = query(sql, params);

    return res.json({
      success: true,
      count: reports.length,
      reports
    });
  } catch (err) {
    console.error('getPVReports error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve reports.',
      message_ar: 'فشل في استرجاع بلاغات التيقظ الدوائي.'
    });
  }
};

const updateReportStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'investigating', 'resolved', 'closed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message_en: 'Invalid PV report status.',
        message_ar: 'حالة البلاغ غير صالحة.'
      });
    }

    run('UPDATE pharmacovigilance_reports SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [status, id]);

    return res.json({
      success: true,
      message_en: 'Report status updated.',
      message_ar: 'تم تحديث حالة البلاغ بنجاح.'
    });
  } catch (err) {
    console.error('updatePVStatus error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update report status.',
      message_ar: 'فشل في تحديث حالة البلاغ.'
    });
  }
};

module.exports = {
  createReport,
  getReports,
  updateReportStatus
};
