const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const dbPath = path.resolve(__dirname, '../../data/umco.db');
const db = new DatabaseSync(dbPath);

console.log('Testing marketing role insertion...');
try {
  const usersSql = db.prepare("SELECT sql FROM sqlite_master WHERE name = 'users'").get().sql;
  console.log('Current users schema:', usersSql);

  // If check constraint does not contain 'marketing', we can recreate the table with the new check constraint
  if (!usersSql.includes('marketing')) {
    console.log('Migrating users table to support marketing role...');
    db.exec('PRAGMA foreign_keys = OFF;');
    db.exec(`
      CREATE TABLE users_new (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name_ar TEXT NOT NULL,
        name_en TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('super_admin', 'hr_manager', 'branch_manager', 'employee', 'medical_rep', 'marketing')),
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
    console.log('Users table migrated successfully!');
  } else {
    console.log('Users table already supports marketing role.');
  }

  // Create announcements table if not exists
  db.exec(`
    CREATE TABLE IF NOT EXISTS announcements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title_ar TEXT NOT NULL,
      title_en TEXT NOT NULL,
      content_ar TEXT NOT NULL,
      content_en TEXT NOT NULL,
      category TEXT NOT NULL DEFAULT 'campaign' CHECK(category IN ('campaign', 'launch', 'awareness', 'tender', 'news')),
      badge_ar TEXT,
      badge_en TEXT,
      image_url TEXT,
      link_url TEXT,
      is_active INTEGER DEFAULT 1,
      author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create customer_inquiries table if not exists
  db.exec(`
    CREATE TABLE IF NOT EXISTS customer_inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      inquiry_number TEXT UNIQUE NOT NULL,
      client_name TEXT NOT NULL,
      client_contact TEXT NOT NULL,
      client_type TEXT NOT NULL DEFAULT 'pharmacist' CHECK(client_type IN ('doctor', 'pharmacist', 'patient', 'distributor', 'hospital')),
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
      status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new', 'replied', 'closed')),
      reply_message TEXT,
      replied_by_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      replied_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('New tables created or verified successfully!');
} catch (err) {
  console.error('Error during migration check:', err);
}
