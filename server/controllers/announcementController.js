const { query, get, run } = require('../database/db');

/**
 * List medical announcements, news, and promotional campaigns
 */
const getAnnouncements = async (req, res) => {
  try {
    const { category, is_active } = req.query;
    let sql = `
      SELECT 
        a.*,
        u.name_ar as author_name_ar,
        u.name_en as author_name_en,
        u.role as author_role
      FROM announcements a
      LEFT JOIN users u ON a.author_id = u.id
      WHERE 1=1
    `;
    const params = [];

    if (is_active !== undefined) {
      sql += ' AND a.is_active = ?';
      params.push(parseInt(is_active, 10));
    } else {
      // Default to active for public
      sql += ' AND a.is_active = 1';
    }

    if (category) {
      sql += ' AND a.category = ?';
      params.push(category);
    }

    sql += ' ORDER BY a.id DESC';

    const announcements = query(sql, params);

    return res.json({
      success: true,
      count: announcements.length,
      announcements
    });
  } catch (err) {
    console.error('getAnnouncements error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve announcements.',
      message_ar: 'فشل في استرجاع الإعلانات والحملات الطبية.'
    });
  }
};

/**
 * Create announcement (Marketing Specialist / Super Admin)
 */
const createAnnouncement = async (req, res) => {
  try {
    const user = req.user;
    const {
      title_ar,
      title_en,
      content_ar,
      content_en,
      category = 'campaign',
      badge_ar,
      badge_en,
      image_url,
      link_url
    } = req.body;

    if (!title_ar || !content_ar) {
      return res.status(400).json({
        success: false,
        message_en: 'Title and content in Arabic are required.',
        message_ar: 'عنوان الإعلان والمحتوى بالعربية مطلوبان.'
      });
    }

    const titleEn = title_en ? title_en.trim() : title_ar.trim();
    const contentEn = content_en ? content_en.trim() : content_ar.trim();

    const result = run(`
      INSERT INTO announcements (
        title_ar, title_en, content_ar, content_en,
        category, badge_ar, badge_en, image_url, link_url,
        is_active, author_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
    `, [
      title_ar.trim(),
      titleEn,
      content_ar.trim(),
      contentEn,
      category,
      badge_ar || 'حملة طبية',
      badge_en || 'Medical Campaign',
      image_url || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
      link_url || '#products',
      user.id
    ]);

    const announcementId = Number(result.lastInsertRowid);
    return res.status(201).json({
      success: true,
      message_en: 'Medical announcement published successfully.',
      message_ar: 'تم نشر الإعلان / الحملة الطبية بنجاح.',
      announcementId,
      announcement: {
        id: announcementId,
        title_ar: title_ar.trim(),
        title_en: titleEn
      }
    });
  } catch (err) {
    console.error('createAnnouncement error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to publish announcement.',
      message_ar: 'فشل في نشر الإعلان.'
    });
  }
};

/**
 * Update announcement
 */
const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ success: false, message_en: 'ID required', message_ar: 'المعرف مطلوب' });
    }

    const {
      title_ar,
      title_en,
      content_ar,
      content_en,
      category,
      badge_ar,
      badge_en,
      image_url,
      link_url,
      is_active
    } = req.body;

    run(`
      UPDATE announcements
      SET title_ar = COALESCE(?, title_ar),
          title_en = COALESCE(?, title_en),
          content_ar = COALESCE(?, content_ar),
          content_en = COALESCE(?, content_en),
          category = COALESCE(?, category),
          badge_ar = COALESCE(?, badge_ar),
          badge_en = COALESCE(?, badge_en),
          image_url = COALESCE(?, image_url),
          link_url = COALESCE(?, link_url),
          is_active = COALESCE(?, is_active),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [title_ar, title_en, content_ar, content_en, category, badge_ar, badge_en, image_url, link_url, is_active, id]);

    return res.json({
      success: true,
      message_en: 'Announcement updated successfully.',
      message_ar: 'تم تحديث الإعلان بنجاح.'
    });
  } catch (err) {
    console.error('updateAnnouncement error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update announcement.',
      message_ar: 'فشل في تحديث الإعلان.'
    });
  }
};

/**
 * Delete / deactivate announcement
 */
const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    run('UPDATE announcements SET is_active = 0 WHERE id = ?', [id]);
    return res.json({
      success: true,
      message_en: 'Announcement archived successfully.',
      message_ar: 'تمت أرشفة الإعلان بنجاح.'
    });
  } catch (err) {
    console.error('deleteAnnouncement error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to archive announcement.',
      message_ar: 'فشل في أرشفة الإعلان.'
    });
  }
};

module.exports = {
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
};
