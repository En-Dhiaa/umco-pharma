const { query, get } = require('../database/db');

const getBranches = async (req, res) => {
  try {
    const branches = query(`
      SELECT 
        b.*,
        COUNT(e.id) as staff_count
      FROM branches b
      LEFT JOIN employees e ON b.id = e.branch_id AND e.status = 'active'
      WHERE b.is_active = 1
      GROUP BY b.id
      ORDER BY b.display_order ASC
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

module.exports = {
  getBranches,
  getBranchById
};
