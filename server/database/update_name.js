const { db } = require('./db');

console.log('Updating all database records from أمكو to يمكو...');

// Products
db.exec(`
  UPDATE products 
  SET trade_name_ar = REPLACE(trade_name_ar, 'أمكو', 'يمكو'),
      indications_ar = REPLACE(indications_ar, 'أمكو', 'يمكو'),
      usage_instructions_ar = REPLACE(usage_instructions_ar, 'أمكو', 'يمكو');
`);

// Categories
db.exec(`
  UPDATE product_categories 
  SET name_ar = REPLACE(name_ar, 'أمكو', 'يمكو'),
      description_ar = REPLACE(description_ar, 'أمكو', 'يمكو');
`);

// Announcements
db.exec(`
  UPDATE announcements 
  SET title_ar = REPLACE(title_ar, 'أمكو', 'يمكو'),
      content_ar = REPLACE(content_ar, 'أمكو', 'يمكو');
`);

// Notifications
db.exec(`
  UPDATE notifications 
  SET title_ar = REPLACE(title_ar, 'أمكو', 'يمكو'),
      message_ar = REPLACE(message_ar, 'أمكو', 'يمكو');
`);

// Branches
db.exec(`
  UPDATE branches 
  SET address_ar = REPLACE(address_ar, 'أمكو', 'يمكو');
`);

const products = db.prepare('SELECT id, trade_name_ar, trade_name_en FROM products LIMIT 10').all();
console.log('Updated products sample:');
products.forEach(p => console.log(` - ${p.trade_name_ar} | ${p.trade_name_en}`));
console.log('Database text update from أمكو to يمكو completed successfully!');
