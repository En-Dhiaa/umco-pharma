const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.resolve(__dirname, '../../data/umco.db');
const db = new DatabaseSync(dbPath);

console.log('Running IT Admin & Site Settings migration...');

try {
  // 1. Check users table schema and add it_admin role if needed
  const usersSql = db.prepare("SELECT sql FROM sqlite_master WHERE name = 'users'").get()?.sql || '';
  if (!usersSql.includes('it_admin')) {
    console.log('Migrating users table to include it_admin role...');
    db.exec('PRAGMA foreign_keys = OFF;');
    db.exec(`
      CREATE TABLE users_new (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name_ar TEXT NOT NULL,
        name_en TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('super_admin', 'it_admin', 'hr_manager', 'branch_manager', 'employee', 'medical_rep', 'marketing')),
        phone TEXT,
        avatar_url TEXT,
        is_active INTEGER NOT NULL DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      INSERT INTO users_new SELECT * FROM users;
      DROP TABLE users;
      ALTER TABLE users_new RENAME TO users;
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
    `);
    db.exec('PRAGMA foreign_keys = ON;');
    console.log('Users table upgraded with it_admin successfully!');
  } else {
    console.log('Users table already contains it_admin role.');
  }

  // 2. Create site_settings table
  db.exec(`
    CREATE TABLE IF NOT EXISTS site_settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      setting_key TEXT UNIQUE NOT NULL,
      setting_value TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'branding',
      updated_by_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(setting_key);
  `);
  console.log('site_settings table verified/created.');

  // 3. Seed default site settings if not present
  const defaultSettings = [
    { key: 'company_name_ar', value: 'يمكو للصناعات الدوائية', category: 'branding' },
    { key: 'company_name_en', value: 'YUMCO Pharmaceuticals', category: 'branding' },
    { key: 'company_sub_ar', value: 'المصنع الحديث للأدوية والمستلزمات الطبية', category: 'branding' },
    { key: 'company_sub_en', value: 'Modern Pharmaceutical & Medical Solutions', category: 'branding' },
    { key: 'logo_badge_text', value: 'YM', category: 'logo' },
    { key: 'logo_image_url', value: '', category: 'logo' },
    { key: 'logo_size', value: '42', category: 'logo' },
    { key: 'primary_color', value: '#0284c7', category: 'colors' },
    { key: 'primary_hover', value: '#0369a1', category: 'colors' },
    { key: 'accent_color', value: '#10b981', category: 'colors' },
    { key: 'font_family_ar', value: 'Cairo', category: 'typography' },
    { key: 'font_family_en', value: 'Outfit', category: 'typography' },
    { key: 'custom_font_url', value: '', category: 'typography' },
    { key: 'font_size_base', value: '16', category: 'typography' },
    { key: 'heading_scale', value: '1.0', category: 'typography' },
    { 
      key: 'nav_links_json', 
      value: JSON.stringify([
        { id: 'about', label_ar: 'عن يمكو', label_en: 'About YUMCO', url: '#about', enabled: true },
        { id: 'announcements', label_ar: 'الحملات والإعلانات', label_en: 'Campaigns & News', url: '#announcements', enabled: true },
        { id: 'products', label_ar: 'كتالوج الأدوية', label_en: 'Products', url: '#products', enabled: true },
        { id: 'clinical', label_ar: 'دليل الجرعات السريرية', label_en: 'Clinical Guide', url: '#clinical', enabled: true },
        { id: 'manufacturing', label_ar: 'التصنيع الدوائي', label_en: 'Manufacturing', url: '#manufacturing', enabled: true },
        { id: 'contract_mfg', label_ar: 'التصنيع للغير', label_en: 'Contract Mfg', url: '#contract-mfg', enabled: true },
        { id: 'branches', label_ar: 'شبكة الفروع', label_en: 'Branches Network', url: '#branches', enabled: true },
        { id: 'rfq', label_ar: 'طلبات التوريد B2B', label_en: 'B2B Quotes', url: '#rfq', enabled: true },
        { id: 'pv', label_ar: 'التيقظ الدوائي', label_en: 'Pharmacovigilance', url: '#pv', enabled: true }
      ]), 
      category: 'links' 
    },
    { 
      key: 'social_links_json', 
      value: JSON.stringify({
        facebook: 'https://facebook.com/yumcopharma',
        twitter: 'https://twitter.com/yumcopharma',
        linkedin: 'https://linkedin.com/company/yumcopharma',
        whatsapp: '+967777123456',
        telegram: 'https://t.me/yumcopharma'
      }), 
      category: 'links' 
    },
    { key: 'contact_email', value: 'info@umcopharma.com', category: 'contact' },
    { key: 'contact_phone', value: '+967 1 234 567', category: 'contact' },
    { key: 'address_ar', value: 'الجمهورية اليمنية - صنعاء - شارع الستين الجنوبي', category: 'contact' },
    { key: 'address_en', value: "Sana'a, Republic of Yemen - Southern 60m St.", category: 'contact' }
  ];

  const insertSetting = db.prepare(`
    INSERT OR IGNORE INTO site_settings (setting_key, setting_value, category)
    VALUES (?, ?, ?)
  `);

  for (const s of defaultSettings) {
    insertSetting.run(s.key, s.value, s.category);
  }
  console.log('Default site settings initialized.');

  // 4. Seed IT Director user if not exists
  const existingIt = db.prepare("SELECT id FROM users WHERE email = 'it@umcopharma.com'").get();
  if (!existingIt) {
    console.log('Seeding IT Director user (it@umcopharma.com)...');
    const passwordHash = bcrypt.hashSync('it123', 10);
    const itUserRes = db.prepare(`
      INSERT INTO users (name_ar, name_en, email, password_hash, role, phone, is_active)
      VALUES (?, ?, ?, ?, ?, ?, 1)
    `).run(
      'م. ضياء الحميري',
      'Eng. Dhiaa Al-Himyari',
      'it@umcopharma.com',
      passwordHash,
      'it_admin',
      '+967 777 000 111'
    );

    const itUserId = itUserRes.lastInsertRowid;

    // Seed employee profile
    db.prepare(`
      INSERT INTO employees (
        user_id, employee_code, job_title_ar, job_title_en,
        department_ar, department_en, branch_id, hire_date,
        salary_grade, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      itUserId,
      'EMP-IT-01',
      'مدير إدارة تقنية المعلومات ومهندس المنظومة',
      'Director of IT & Systems Engineering',
      'تقنية المعلومات والتحول الرقمي',
      'IT & Digital Transformation',
      1, // Sana'a HQ
      '2026-01-01',
      'Grade-A1',
      'active'
    );
    console.log('IT Director user and employee record created successfully! ID:', itUserId);
  } else {
    console.log('IT Director user already exists. Updating role to it_admin...');
    db.prepare("UPDATE users SET role = 'it_admin' WHERE email = 'it@umcopharma.com'").run();
  }

  console.log('Migration completed successfully!');
} catch (err) {
  console.error('Migration error:', err);
  process.exit(1);
}
