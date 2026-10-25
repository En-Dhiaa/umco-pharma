const { query, get, run } = require('../database/db');
const NotificationService = require('../services/notificationService');

const createQuote = async (req, res) => {
  try {
    const {
      company_or_pharmacy,
      contact_person,
      phone,
      email,
      governorate,
      inquiry_type = 'Bulk Order',
      items = [],
      notes
    } = req.body;

    if (!company_or_pharmacy || !contact_person || !phone || !governorate) {
      return res.status(400).json({
        success: false,
        message_en: 'Company Name, Contact Person, Phone, and Governorate are required.',
        message_ar: 'اسم الشركة/المستشفى، مسؤول التواصل، رقم الهاتف، والمحافظة حقول مطلوبة.'
      });
    }

    // Generate unique quote number: RFQ-YYYY-XXXX
    const count = get('SELECT COUNT(*) as count FROM quote_requests');
    const quoteNumber = `RFQ-2026-${String((count.count || 0) + 1).padStart(3, '0')}`;

    const itemsJson = JSON.stringify(items);

    const result = run(`
      INSERT INTO quote_requests (
        quote_number, company_or_pharmacy, contact_person,
        phone, email, governorate, inquiry_type, items_json, notes, status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
    `, [quoteNumber, company_or_pharmacy.trim(), contact_person.trim(), phone.trim(), email || null, governorate.trim(), inquiry_type, itemsJson, notes || null]);

    // Send notifications to HR and Admins
    NotificationService.notifyNewRFQ({
      quoteNumber,
      companyName: company_or_pharmacy.trim()
    });

    return res.status(201).json({
      success: true,
      message_en: `Your quotation request (${quoteNumber}) has been submitted successfully. Our commercial sales team will contact you shortly.`,
      message_ar: `تم إرسال طلب عرض السعر (${quoteNumber}) بنجاح. سيتواصل معك فريق المبيعات والتوزيع قريباً.`,
      quoteNumber
    });
  } catch (err) {
    console.error('createQuote error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to submit quote request.',
      message_ar: 'فشل في إرسال طلب عرض السعر.'
    });
  }
};

const getQuotes = async (req, res) => {
  try {
    const { status, search } = req.query;

    let sql = 'SELECT * FROM quote_requests WHERE 1=1';
    const params = [];

    if (status) {
      sql += ' AND status = ?';
      params.push(status);
    }

    if (search) {
      sql += ' AND (quote_number LIKE ? OR company_or_pharmacy LIKE ? OR contact_person LIKE ? OR phone LIKE ?)';
      const s = `%${search}%`;
      params.push(s, s, s, s);
    }

    sql += ' ORDER BY created_at DESC';

    const quotes = query(sql, params).map(q => {
      try {
        q.items = JSON.parse(q.items_json);
      } catch {
        q.items = [];
      }
      return q;
    });

    return res.json({
      success: true,
      count: quotes.length,
      quotes
    });
  } catch (err) {
    console.error('getQuotes error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve quote requests.',
      message_ar: 'فشل في استرجاع طلبات عروض الأسعار.'
    });
  }
};

const updateQuoteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['new', 'under_review', 'quoted', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message_en: 'Invalid quote status.',
        message_ar: 'حالة عرض السعر غير صحيحة.'
      });
    }

    run('UPDATE quote_requests SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [status, id]);

    return res.json({
      success: true,
      message_en: 'Quote status updated.',
      message_ar: 'تم تحديث حالة طلب عرض السعر.'
    });
  } catch (err) {
    console.error('updateQuoteStatus error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update quote status.',
      message_ar: 'فشل في تحديث حالة العرض.'
    });
  }
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuoteStatus
};
