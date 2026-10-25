const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { get, run } = require('../database/db');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message_en: 'Email and password are required.',
        message_ar: 'البريد الإلكتروني وكلمة المرور مطلوبان.'
      });
    }

    const user = get('SELECT * FROM users WHERE LOWER(email) = LOWER(?)', [email.trim()]);
    if (!user) {
      return res.status(401).json({
        success: false,
        message_en: 'Invalid email or password.',
        message_ar: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.'
      });
    }

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message_en: 'Account is deactivated. Contact HR.',
        message_ar: 'الحساب معطل حالياً. يرجى التواصل مع إدارة الموارد البشرية.'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message_en: 'Invalid email or password.',
        message_ar: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.'
      });
    }

    // Fetch employee extra profile if applicable
    const employee = get(`
      SELECT e.*, b.city_ar as branch_name_ar, b.city_en as branch_name_en
      FROM employees e
      LEFT JOIN branches b ON e.branch_id = b.id
      WHERE e.user_id = ?
    `, [user.id]);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    // Sanitize user object
    const userSafe = {
      id: user.id,
      name_ar: user.name_ar,
      name_en: user.name_en,
      email: user.email,
      role: user.role,
      phone: user.phone,
      avatar_url: user.avatar_url,
      employee: employee || null
    };

    return res.json({
      success: true,
      message_en: 'Login successful.',
      message_ar: 'تم تسجيل الدخول بنجاح.',
      token,
      user: userSafe
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Internal server error during login.',
      message_ar: 'حدث خطأ في الخادم أثناء تسجيل الدخول.'
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = req.user;
    const employee = get(`
      SELECT e.*, b.city_ar as branch_name_ar, b.city_en as branch_name_en
      FROM employees e
      LEFT JOIN branches b ON e.branch_id = b.id
      WHERE e.user_id = ?
    `, [user.id]);

    // Count unread notifications
    const unread = get('SELECT COUNT(*) as count FROM notifications WHERE recipient_user_id = ? AND is_read = 0', [user.id]);

    return res.json({
      success: true,
      user: {
        ...user,
        employee: employee || null,
        unreadNotifications: unread?.count || 0
      }
    });
  } catch (err) {
    console.error('getMe error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve profile.',
      message_ar: 'فشل في استرجاع بيانات الملف الشخصي.'
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name_ar, name_en, phone, avatar_url } = req.body;

    run(`
      UPDATE users
      SET name_ar = COALESCE(?, name_ar),
          name_en = COALESCE(?, name_en),
          phone = COALESCE(?, phone),
          avatar_url = COALESCE(?, avatar_url),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [name_ar, name_en, phone, avatar_url, userId]);

    const updated = get('SELECT id, name_ar, name_en, email, role, phone, avatar_url FROM users WHERE id = ?', [userId]);

    return res.json({
      success: true,
      message_en: 'Profile updated successfully.',
      message_ar: 'تم تحديث الملف الشخصي بنجاح.',
      user: updated
    });
  } catch (err) {
    console.error('updateProfile error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update profile.',
      message_ar: 'فشل في تحديث بيانات الملف الشخصي.'
    });
  }
};

module.exports = {
  login,
  getMe,
  updateProfile
};
