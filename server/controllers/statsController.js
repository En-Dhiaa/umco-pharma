const { query, get } = require('../database/db');

const getSystemStats = async (req, res) => {
  try {
    const productsCount = get('SELECT COUNT(*) as count FROM products WHERE is_active = 1');
    const branchesCount = get('SELECT COUNT(*) as count FROM branches WHERE is_active = 1');
    const employeesCount = get("SELECT COUNT(*) as count FROM employees WHERE status = 'active'");
    const tasksTotal = get('SELECT COUNT(*) as count FROM tasks');
    const tasksCompleted = get("SELECT COUNT(*) as count FROM tasks WHERE status = 'completed'");
    const tasksPending = get("SELECT COUNT(*) as count FROM tasks WHERE status IN ('todo', 'in_progress', 'in_review')");
    const quotesTotal = get('SELECT COUNT(*) as count FROM quote_requests');
    const pvReports = get('SELECT COUNT(*) as count FROM pharmacovigilance_reports');

    const recentTasks = query(`
      SELECT t.*, u.name_ar as assignee_name_ar, u.name_en as assignee_name_en
      FROM tasks t
      JOIN users u ON t.assigned_to_user_id = u.id
      ORDER BY t.created_at DESC
      LIMIT 5
    `);

    const recentQuotes = query(`
      SELECT id, quote_number, company_or_pharmacy, governorate, inquiry_type, status, created_at
      FROM quote_requests
      ORDER BY created_at DESC
      LIMIT 5
    `);

    return res.json({
      success: true,
      stats: {
        products: productsCount.count,
        branches: branchesCount.count,
        employees: employeesCount.count,
        tasks: {
          total: tasksTotal.count,
          completed: tasksCompleted.count,
          pending: tasksPending.count
        },
        quotes: quotesTotal.count,
        pvReports: pvReports.count
      },
      recentTasks,
      recentQuotes
    });
  } catch (err) {
    console.error('getSystemStats error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve stats.',
      message_ar: 'فشل في استرجاع إحصائيات النظام.'
    });
  }
};

module.exports = {
  getSystemStats
};
