const { query } = require('../database/db');

const getCategories = async (req, res) => {
  try {
    const categories = query(`
      SELECT 
        c.*,
        COUNT(p.id) as products_count
      FROM product_categories c
      LEFT JOIN products p ON c.id = p.category_id AND p.is_active = 1
      WHERE c.is_active = 1
      GROUP BY c.id
      ORDER BY c.display_order ASC
    `);

    return res.json({
      success: true,
      categories
    });
  } catch (err) {
    console.error('getCategories error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve categories.',
      message_ar: 'فشل في استرجاع تصنيفات المنتجات.'
    });
  }
};

module.exports = {
  getCategories
};
