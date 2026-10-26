const { query, get, run } = require('../database/db');

/**
 * Get all active branches (or all if admin requested)
 */
const getBranches = async (req, res) => {
  try {
    const includeInactive = req.query.all === 'true' && req.user && (req.user.role === 'super_admin' || req.user.role === 'it_admin');
    
    const branches = query(`
      SELECT 
        b.*,
        COUNT(e.id) as staff_count
      FROM branches b
      LEFT JOIN employees e ON b.id = e.branch_id AND e.status = 'active'
      ${includeInactive ? '' : 'WHERE b.is_active = 1'}
      GROUP BY b.id
      ORDER BY b.is_headquarters DESC, b.display_order ASC
    `);

    return res.json({
      success: true,
      count: branches.length,
      branches
    });
  } catch (err) {
    console.error('getBranches error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve branches.',
      message_ar: 'فشل في استرجاع شبكة الفروع.'
    });
  }
};

/**
 * Get single branch details
 */
const getBranchById = async (req, res) => {
  try {
    const { id } = req.params;
    const branch = get('SELECT * FROM branches WHERE id = ?', [id]);
    if (!branch) {
      return res.status(404).json({
        success: false,
        message_en: 'Branch not found.',
        message_ar: 'الفرع غير موجود.'
      });
    }

    return res.json({
      success: true,
      branch
    });
  } catch (err) {
    console.error('getBranchById error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve branch.',
      message_ar: 'فشل في استرجاع بيانات الفرع.'
    });
  }
};

/**
 * Create a new branch (Admin / IT Director)
 */
const createBranch = async (req, res) => {
  try {
    const {
      city_ar, city_en,
      is_headquarters = 0,
      address_ar, address_en,
      phone_primary, phone_secondary,
      fax, email = 'info@umcopharma.com',
      manager_name_ar, manager_name_en,
      latitude, longitude,
      display_order = 0,
      is_active = 1
    } = req.body;

    if (!city_ar || !city_en || !address_ar || !phone_primary) {
      return res.status(400).json({
        success: false,
        message_en: 'City, Arabic address, and primary phone are required.',
        message_ar: 'اسم المدينة والعنوان ورقم الهاتف الأساسي حقول إلزامية.'
      });
    }

    const insertRes = run(`
      INSERT INTO branches (
        city_ar, city_en, is_headquarters, address_ar, address_en,
        phone_primary, phone_secondary, fax, email,
        manager_name_ar, manager_name_en, latitude, longitude,
        display_order, is_active
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      city_ar, city_en, is_headquarters ? 1 : 0,
      address_ar, address_en || address_ar,
      phone_primary, phone_secondary || null,
      fax || null, email,
      manager_name_ar || null, manager_name_en || null,
      latitude ? parseFloat(latitude) : null,
      longitude ? parseFloat(longitude) : null,
      parseInt(display_order) || 0,
      is_active ? 1 : 0
    ]);

    const newBranchId = insertRes.lastInsertRowid;
    const newBranch = get('SELECT * FROM branches WHERE id = ?', [newBranchId]);

    return res.status(201).json({
      success: true,
      message_en: 'Branch created successfully.',
      message_ar: 'تم إنشاء الفرع الجديد بنجاح.',
      branch: newBranch
    });
  } catch (err) {
    console.error('createBranch error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to create branch.',
      message_ar: 'فشل في إنشاء الفرع.'
    });
  }
};

/**
 * Update an existing branch (Admin / IT Director)
 */
const updateBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const branch = get('SELECT * FROM branches WHERE id = ?', [id]);
    if (!branch) {
      return res.status(404).json({
        success: false,
        message_en: 'Branch not found.',
        message_ar: 'الفرع غير موجود.'
      });
    }

    const {
      city_ar, city_en,
      is_headquarters,
      address_ar, address_en,
      phone_primary, phone_secondary,
      fax, email,
      manager_name_ar, manager_name_en,
      latitude, longitude,
      display_order,
      is_active
    } = req.body;

    run(`
      UPDATE branches SET
        city_ar = COALESCE(?, city_ar),
        city_en = COALESCE(?, city_en),
        is_headquarters = COALESCE(?, is_headquarters),
        address_ar = COALESCE(?, address_ar),
        address_en = COALESCE(?, address_en),
        phone_primary = COALESCE(?, phone_primary),
        phone_secondary = COALESCE(?, phone_secondary),
        fax = COALESCE(?, fax),
        email = COALESCE(?, email),
        manager_name_ar = COALESCE(?, manager_name_ar),
        manager_name_en = COALESCE(?, manager_name_en),
        latitude = COALESCE(?, latitude),
        longitude = COALESCE(?, longitude),
        display_order = COALESCE(?, display_order),
        is_active = COALESCE(?, is_active)
      WHERE id = ?
    `, [
      city_ar !== undefined ? city_ar : null,
      city_en !== undefined ? city_en : null,
      is_headquarters !== undefined ? (is_headquarters ? 1 : 0) : null,
      address_ar !== undefined ? address_ar : null,
      address_en !== undefined ? address_en : null,
      phone_primary !== undefined ? phone_primary : null,
      phone_secondary !== undefined ? phone_secondary : null,
      fax !== undefined ? fax : null,
      email !== undefined ? email : null,
      manager_name_ar !== undefined ? manager_name_ar : null,
      manager_name_en !== undefined ? manager_name_en : null,
      latitude !== undefined ? parseFloat(latitude) : null,
      longitude !== undefined ? parseFloat(longitude) : null,
      display_order !== undefined ? parseInt(display_order) : null,
      is_active !== undefined ? (is_active ? 1 : 0) : null,
      id
    ]);

    const updated = get('SELECT * FROM branches WHERE id = ?', [id]);

    return res.json({
      success: true,
      message_en: 'Branch updated successfully.',
      message_ar: 'تم تحديث بيانات الفرع بنجاح.',
      branch: updated
    });
  } catch (err) {
    console.error('updateBranch error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update branch.',
      message_ar: 'فشل في تحديث بيانات الفرع.'
    });
  }
};

/**
 * Delete / deactivate a branch (Admin / IT Director)
 */
const deleteBranch = async (req, res) => {
  try {
    const { id } = req.params;
    const branch = get('SELECT * FROM branches WHERE id = ?', [id]);
    if (!branch) {
      return res.status(404).json({
        success: false,
        message_en: 'Branch not found.',
        message_ar: 'الفرع غير موجود.'
      });
    }

    // Check if staff assigned
    const staff = get('SELECT COUNT(*) as count FROM employees WHERE branch_id = ?', [id]);
    if (staff && staff.count > 0) {
      // Soft deactivate
      run('UPDATE branches SET is_active = 0 WHERE id = ?', [id]);
      return res.json({
        success: true,
        message_en: 'Branch deactivated successfully (contains linked staff).',
        message_ar: 'تم إلغاء تفعيل الفرع بنجاح لوجود موظفين مرتبطين به.'
      });
    }

    run('DELETE FROM branches WHERE id = ?', [id]);
    return res.json({
      success: true,
      message_en: 'Branch deleted successfully.',
      message_ar: 'تم حذف الفرع بنجاح.'
    });
  } catch (err) {
    console.error('deleteBranch error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to delete branch.',
      message_ar: 'فشل في حذف الفرع.'
    });
  }
};

module.exports = {
  getBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch
};
