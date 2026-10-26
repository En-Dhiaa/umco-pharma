const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');
const config = require('../config/config');

// Ensure data directory exists
const dataDir = path.dirname(config.dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize SQLite database instance
const db = new DatabaseSync(config.dbPath);

// Enable WAL mode and foreign key constraints
db.exec('PRAGMA foreign_keys = ON;');
db.exec('PRAGMA journal_mode = WAL;');

// Initialize tables from schema.sql
const schemaPath = path.resolve(__dirname, 'schema.sql');
if (fs.existsSync(schemaPath)) {
  const schemaSql = fs.readFileSync(schemaPath, 'utf8');
  db.exec(schemaSql);
}

// Database helper utilities
const sanitizeParams = (params = []) => {
  if (!Array.isArray(params)) return [];
  return params.map(p => (p === undefined ? null : p));
};

const query = (sql, params = []) => {
  const stmt = db.prepare(sql);
  return stmt.all(...sanitizeParams(params));
};

const get = (sql, params = []) => {
  const stmt = db.prepare(sql);
  return stmt.get(...sanitizeParams(params));
};

const run = (sql, params = []) => {
  const stmt = db.prepare(sql);
  return stmt.run(...sanitizeParams(params));
};

const exec = (sql) => {
  return db.exec(sql);
};

module.exports = {
  db,
  query,
  get,
  run,
  exec
};
