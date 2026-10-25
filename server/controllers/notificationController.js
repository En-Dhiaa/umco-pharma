const { query, get, run } = require('../database/db');

const getMyNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const { limit = 30 } = req.query;

    const notifications = query(`
      SELECT 
        n.*,
        u_sender.name_ar as sender_name_ar,
        u_sender.name_en as sender_name_en,
        u_sender.avatar_url as sender_avatar
      FROM notifications n
      LEFT JOIN users u_sender ON n.sender_user_id = u_sender.id
      WHERE n.recipient_user_id = ?
      ORDER BY n.created_at DESC
      LIMIT ?
    `, [userId, parseInt(limit, 10)]);

    const unread = get('SELECT COUNT(*) as count FROM notifications WHERE recipient_user_id = ? AND is_read = 0', [userId]);

    return res.json({
      success: true,
      unreadCount: unread.count,
      notifications
    });
  } catch (err) {
    console.error('getMyNotifications error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve notifications.',
      message_ar: 'فشل في استرجاع الإشعارات.'
    });
  }
};

const markAsRead = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    run('UPDATE notifications SET is_read = 1 WHERE id = ? AND recipient_user_id = ?', [id, userId]);

    return res.json({
      success: true,
      message_en: 'Notification marked as read.',
      message_ar: 'تم تمييز الإشعار كمقروء.'
    });
  } catch (err) {
    console.error('markAsRead error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update notification.',
      message_ar: 'فشل في تحديث حالة الإشعار.'
    });
  }
};

const markAllAsRead = async (req, res) => {
  try {
    const userId = req.user.id;

    run('UPDATE notifications SET is_read = 1 WHERE recipient_user_id = ?', [userId]);

    return res.json({
      success: true,
      message_en: 'All notifications marked as read.',
      message_ar: 'تم تمييز كافة الإشعارات كمقروءة.'
    });
  } catch (err) {
    console.error('markAllAsRead error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to mark all as read.',
      message_ar: 'فشل في تحديث الإشعارات.'
    });
  }
};

module.exports = {
  getMyNotifications,
  markAsRead,
  markAllAsRead
};
