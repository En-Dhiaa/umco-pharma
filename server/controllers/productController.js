const { query, get, run } = require('../database/db');

const getProducts = async (req, res) => {
  try {
    const { category, dosage_form, search, featured, is_active = '1' } = req.query;

    let sql = `
      SELECT 
        p.*,
        c.name_ar as category_name_ar,
        c.name_en as category_name_en,
        c.slug as category_slug
      FROM products p
      JOIN product_categories c ON p.category_id = c.id
      WHERE 1=1
    `;

    const params = [];

    if (is_active !== 'all') {
      sql += ` AND p.is_active = ?`;
      params.push(parseInt(is_active, 10));
    }

    if (category) {
      sql += ` AND (c.slug = ? OR c.id = ?)`;
      params.push(category, category);
    }

    if (dosage_form) {
      sql += ` AND (p.dosage_form_ar LIKE ? OR p.dosage_form_en LIKE ?)`;
      params.push(`%${dosage_form}%`, `%${dosage_form}%`);
    }

    if (featured === 'true' || featured === '1') {
      sql += ` AND p.is_featured = 1`;
    }

    if (search) {
      sql += ` AND (
        p.trade_name_ar LIKE ? OR 
        p.trade_name_en LIKE ? OR 
        p.scientific_name LIKE ? OR 
        p.indications_ar LIKE ? OR 
        p.indications_en LIKE ? OR 
        p.sku LIKE ?
      )`;
      const s = `%${search}%`;
      params.push(s, s, s, s, s, s);
    }

    sql += ` ORDER BY p.is_featured DESC, p.id ASC`;

    const products = query(sql, params);

    return res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (err) {
    console.error('getProducts error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve products catalog.',
      message_ar: 'فشل في استرجاع كتالوج المنتجات.'
    });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = get(`
      SELECT 
        p.*,
        c.name_ar as category_name_ar,
        c.name_en as category_name_en,
        c.slug as category_slug
      FROM products p
      JOIN product_categories c ON p.category_id = c.id
      WHERE p.slug = ? OR p.id = ?
    `, [slug, slug]);

    if (!product) {
      return res.status(404).json({
        success: false,
        message_en: 'Product not found.',
        message_ar: 'المنتج غير موجود.'
      });
    }

    // Related products in the same category
    const related = query(`
      SELECT id, slug, sku, trade_name_ar, trade_name_en, dosage_form_ar, dosage_form_en, image_url
      FROM products
      WHERE category_id = ? AND id != ? AND is_active = 1
      LIMIT 4
    `, [product.category_id, product.id]);

    return res.json({
      success: true,
      product,
      relatedProducts: related
    });
  } catch (err) {
    console.error('getProductBySlug error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to fetch product details.',
      message_ar: 'فشل في استرجاع تفاصيل المنتج.'
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      category_id,
      slug,
      sku,
      trade_name_ar,
      trade_name_en,
      scientific_name,
      dosage_form_ar,
      dosage_form_en,
      concentration,
      package_size,
      indications_ar,
      indications_en,
      usage_instructions_ar,
      usage_instructions_en,
      storage_conditions_ar,
      storage_conditions_en,
      image_url,
      datasheet_url,
      is_featured = 0
    } = req.body;

    if (!category_id || !trade_name_ar || !trade_name_en || !slug) {
      return res.status(400).json({
        success: false,
        message_en: 'Missing required product information.',
        message_ar: 'يرجى تزويد البيانات الأساسية للمنتج.'
      });
    }

    const resRun = run(`
      INSERT INTO products (
        category_id, slug, sku, trade_name_ar, trade_name_en,
        scientific_name, dosage_form_ar, dosage_form_en, concentration,
        package_size, indications_ar, indications_en, usage_instructions_ar,
        usage_instructions_en, storage_conditions_ar, storage_conditions_en,
        image_url, datasheet_url, is_featured
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      category_id, slug, sku, trade_name_ar, trade_name_en,
      scientific_name, dosage_form_ar, dosage_form_en, concentration,
      package_size, indications_ar, indications_en, usage_instructions_ar,
      usage_instructions_en, storage_conditions_ar, storage_conditions_en,
      image_url, datasheet_url, is_featured
    ]);

    return res.status(201).json({
      success: true,
      message_en: 'Product created successfully.',
      message_ar: 'تمت إضافة المنتج بنجاح.',
      productId: resRun.lastInsertRowid
    });
  } catch (err) {
    console.error('createProduct error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to create product.',
      message_ar: 'فشل في إضافة المنتج.'
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ success: false, message_en: 'Product ID required.', message_ar: 'معرف المنتج مطلوب.' });
    }
    const product = get('SELECT * FROM products WHERE id = ?', [id]);
    if (!product) {
      return res.status(404).json({ success: false, message_en: 'Product not found.', message_ar: 'المنتج غير موجود.' });
    }

    const {
      category_id,
      slug,
      sku,
      trade_name_ar,
      trade_name_en,
      scientific_name,
      dosage_form_ar,
      dosage_form_en,
      concentration,
      package_size,
      indications_ar,
      indications_en,
      usage_instructions_ar,
      usage_instructions_en,
      storage_conditions_ar,
      storage_conditions_en,
      image_url,
      datasheet_url,
      is_featured,
      is_active
    } = req.body;

    run(`
      UPDATE products
      SET category_id = COALESCE(?, category_id),
          slug = COALESCE(?, slug),
          sku = COALESCE(?, sku),
          trade_name_ar = COALESCE(?, trade_name_ar),
          trade_name_en = COALESCE(?, trade_name_en),
          scientific_name = COALESCE(?, scientific_name),
          dosage_form_ar = COALESCE(?, dosage_form_ar),
          dosage_form_en = COALESCE(?, dosage_form_en),
          concentration = COALESCE(?, concentration),
          package_size = COALESCE(?, package_size),
          indications_ar = COALESCE(?, indications_ar),
          indications_en = COALESCE(?, indications_en),
          usage_instructions_ar = COALESCE(?, usage_instructions_ar),
          usage_instructions_en = COALESCE(?, usage_instructions_en),
          storage_conditions_ar = COALESCE(?, storage_conditions_ar),
          storage_conditions_en = COALESCE(?, storage_conditions_en),
          image_url = COALESCE(?, image_url),
          datasheet_url = COALESCE(?, datasheet_url),
          is_featured = COALESCE(?, is_featured),
          is_active = COALESCE(?, is_active),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [
      category_id, slug, sku, trade_name_ar, trade_name_en,
      scientific_name, dosage_form_ar, dosage_form_en, concentration,
      package_size, indications_ar, indications_en, usage_instructions_ar,
      usage_instructions_en, storage_conditions_ar, storage_conditions_en,
      image_url, datasheet_url, is_featured, is_active,
      id
    ]);

    return res.json({
      success: true,
      message_en: 'Product updated successfully.',
      message_ar: 'تم تحديث بيانات المنتج بنجاح.'
    });
  } catch (err) {
    console.error('updateProduct error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update product.',
      message_ar: 'فشل في تحديث المنتج.'
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    run('UPDATE products SET is_active = 0 WHERE id = ?', [id]);
    return res.json({
      success: true,
      message_en: 'Product archived successfully.',
      message_ar: 'تمت أرشفة المنتج بنجاح.'
    });
  } catch (err) {
    console.error('deleteProduct error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to archive product.',
      message_ar: 'فشل في أرشفة المنتج.'
    });
  }
};

module.exports = {
  getProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct
};
