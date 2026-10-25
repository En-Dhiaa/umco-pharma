const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config/config');
const apiRoutes = require('./routes/api');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging (simplified)
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (req.originalUrl.startsWith('/api')) {
      console.log(`[${req.method}] ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// Mount API Endpoints
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'UMCO Pharmaceuticals Enterprise System',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Serve frontend static assets
const publicDir = path.resolve(__dirname, '../public');
app.use(express.static(publicDir));

// Fallback to SPA index.html for client-side routing
app.get('*', (req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      message_en: 'API endpoint not found.',
      message_ar: 'نقطة النهاية للـ API غير موجودة.'
    });
  }
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message_en: 'An unexpected server error occurred.',
    message_ar: 'حدث خطأ غير متوقع في الخادم.'
  });
});

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`
========================================================================
  UMCO PHARMACEUTICALS ENTERPRISE PLATFORM (شركة أمكو للصناعات الدوائية)
========================================================================
  🚀 Server running at: http://localhost:${PORT}
  📡 API Base URL:      http://localhost:${PORT}/api
  💊 Public Catalog:    http://localhost:${PORT}/#products
  👥 HR & Operations:   http://localhost:${PORT}/#portal

  Demo Credentials:
  - Super Admin:  admin@umcopharma.com  | admin123  (د. عبدالله إسحاق)
  - HR Manager:   hr@umcopharma.com     | hr123     (أ. فاطمة الشامي)
  - Production:   tariq.saleh@umcopharma.com | emp123 (م. طارق صالح)
  - Quality QA:   samira.qahtan@umcopharma.com | emp123 (د. سميرة قحطان)
========================================================================
  `);
});
