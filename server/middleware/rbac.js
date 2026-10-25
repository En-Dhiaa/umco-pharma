// Role-Based Access Control Middleware
const authorize = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message_en: 'Unauthorized. Please login first.',
        message_ar: 'غير مصرح. يرجى تسجيل الدخول أولاً.'
      });
    }

    // Super Admin always has full access
    if (req.user.role === 'super_admin') {
      return next();
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message_en: 'Forbidden. You do not have permission to access this resource.',
        message_ar: 'عذراً، لا تمتلك الصلاحية الكافية للوصول إلى هذا المورد.'
      });
    }

    next();
  };
};

module.exports = {
  authorize
};
