const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { get } = require('../database/db');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message_en: 'Authentication required. No token provided.',
      message_ar: 'يلزم تسجيل الدخول. لم يتم إرسال رمز المصادقة.'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = get('SELECT id, name_ar, name_en, email, role, phone, avatar_url, is_active FROM users WHERE id = ?', [decoded.id]);

    if (!user) {
      return res.status(401).json({
        success: false,
        message_en: 'User not found.',
        message_ar: 'المستخدم غير موجود.'
      });
    }

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message_en: 'User account is deactivated. Contact HR.',
        message_ar: 'الحساب معطل حالياً. يرجى مراجعة إدارة الموارد البشرية.'
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message_en: 'Invalid or expired authentication token.',
      message_ar: 'رمز المصادقة غير صالح أو منتهي الصلاحية.'
    });
  }
};

// Optional auth: attaches user if present, doesn't block if absent
const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, config.jwtSecret);
      const user = get('SELECT id, name_ar, name_en, email, role, phone, avatar_url, is_active FROM users WHERE id = ?', [decoded.id]);
      if (user && user.is_active) {
        req.user = user;
      }
    } catch {}
  }
  next();
};

module.exports = {
  authenticate,
  optionalAuth
};
