const { query, get, run } = require('../database/db');

/**
 * Get all site settings & branding configuration
 * Publicly accessible so the frontend initializes theme & identity
 */
const getSettings = async (req, res) => {
  try {
    const rows = query('SELECT setting_key, setting_value, category FROM site_settings');
    const settings = {};

    for (const r of rows) {
      if (r.setting_key.endsWith('_json')) {
        try {
          const cleanKey = r.setting_key.replace('_json', '');
          settings[cleanKey] = JSON.parse(r.setting_value);
        } catch {
          settings[r.setting_key] = r.setting_value;
        }
      } else {
        settings[r.setting_key] = r.setting_value;
      }
    }

    return res.json({
      success: true,
      settings
    });
  } catch (err) {
    console.error('getSettings error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve site settings.',
      message_ar: 'فشل في استرجاع إعدادات وهوية الموقع.'
    });
  }
};

/**
 * Update site settings (Admin / IT Director only)
 */
const updateSettings = async (req, res) => {
  try {
    const userId = req.user.id;
    const updates = req.body;

    if (!updates || typeof updates !== 'object') {
      return res.status(400).json({
        success: false,
        message_en: 'Invalid settings payload.',
        message_ar: 'بيانات الإعدادات غير صالحة.'
      });
    }

    const validKeys = [
      'company_name_ar', 'company_name_en', 'company_sub_ar', 'company_sub_en',
      'logo_badge_text', 'logo_image_url', 'logo_size',
      'primary_color', 'primary_hover', 'accent_color',
      'font_family_ar', 'font_family_en', 'custom_font_url', 'font_size_base', 'heading_scale',
      'nav_links', 'nav_links_json', 'social_links', 'social_links_json',
      'contact_email', 'contact_phone', 'address_ar', 'address_en'
    ];

    for (const [key, rawValue] of Object.entries(updates)) {
      let dbKey = key;
      let dbValue = rawValue;

      if (key === 'nav_links') {
        dbKey = 'nav_links_json';
        dbValue = typeof rawValue === 'string' ? rawValue : JSON.stringify(rawValue);
      } else if (key === 'social_links') {
        dbKey = 'social_links_json';
        dbValue = typeof rawValue === 'string' ? rawValue : JSON.stringify(rawValue);
      } else if (typeof rawValue === 'object' && rawValue !== null) {
        dbValue = JSON.stringify(rawValue);
      } else {
        dbValue = String(rawValue ?? '');
      }

      if (validKeys.includes(dbKey) || validKeys.includes(key)) {
        // Upsert setting
        const existing = get('SELECT id FROM site_settings WHERE setting_key = ?', [dbKey]);
        if (existing) {
          run(
            `UPDATE site_settings 
             SET setting_value = ?, updated_by_user_id = ?, updated_at = CURRENT_TIMESTAMP 
             WHERE setting_key = ?`,
            [dbValue, userId, dbKey]
          );
        } else {
          run(
            `INSERT INTO site_settings (setting_key, setting_value, updated_by_user_id) 
             VALUES (?, ?, ?)`,
            [dbKey, dbValue, userId]
          );
        }
      }
    }

    return res.json({
      success: true,
      message_en: 'Site settings and branding updated successfully.',
      message_ar: 'تم تحديث هوية الموقع وإعدادات المظهر والروابط بنجاح.'
    });
  } catch (err) {
    console.error('updateSettings error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update site settings.',
      message_ar: 'فشل في تحديث إعدادات الموقع.'
    });
  }
};

/**
 * Reset settings to default YUMCO identity
 */
const resetSettings = async (req, res) => {
  try {
    const userId = req.user.id;
    const defaults = {
      company_name_ar: 'يمكو للصناعات الدوائية',
      company_name_en: 'YUMCO Pharmaceuticals',
      company_sub_ar: 'المصنع الحديث للأدوية والمستلزمات الطبية',
      company_sub_en: 'Modern Pharmaceutical & Medical Solutions',
      logo_badge_text: 'YM',
      logo_image_url: '',
      logo_size: '42',
      primary_color: '#0284c7',
      primary_hover: '#0369a1',
      accent_color: '#10b981',
      font_family_ar: 'Cairo',
      font_family_en: 'Outfit',
      custom_font_url: '',
      font_size_base: '16',
      heading_scale: '1.0'
    };

    for (const [key, val] of Object.entries(defaults)) {
      run(
        `UPDATE site_settings 
         SET setting_value = ?, updated_by_user_id = ?, updated_at = CURRENT_TIMESTAMP 
         WHERE setting_key = ?`,
        [val, userId, key]
      );
    }

    return res.json({
      success: true,
      message_en: 'Theme and branding reset to original defaults.',
      message_ar: 'تمت استعادة إعدادات الهوية والمظهر الافتراضية بنجاح.'
    });
  } catch (err) {
    console.error('resetSettings error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to reset settings.',
      message_ar: 'فشل في استعادة الإعدادات الافتراضية.'
    });
  }
};

module.exports = {
  getSettings,
  updateSettings,
  resetSettings
};
