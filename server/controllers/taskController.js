const { query, get, run } = require('../database/db');
const NotificationService = require('../services/notificationService');

/**
 * List tasks with multi-criteria filtering & role scoping
 */
const getTasks = async (req, res) => {
  try {
    const user = req.user;
    const {
      status,
      priority,
      category,
      assigned_to,
      only_mine,
      search,
      is_overdue
    } = req.query;

    let sql = `
      SELECT 
        t.*,
        u_assignee.name_ar as assignee_name_ar,
        u_assignee.name_en as assignee_name_en,
        u_assignee.email as assignee_email,
        u_assignee.avatar_url as assignee_avatar,
        e.employee_code as assignee_code,
        e.job_title_ar as assignee_title_ar,
        e.department_ar as assignee_dept_ar,
        u_creator.name_ar as creator_name_ar,
        u_creator.name_en as creator_name_en,
        (SELECT COUNT(*) FROM task_comments tc WHERE tc.task_id = t.id) as comments_count
      FROM tasks t
      JOIN users u_assignee ON t.assigned_to_user_id = u_assignee.id
      JOIN users u_creator ON t.created_by_user_id = u_creator.id
      LEFT JOIN employees e ON u_assignee.id = e.user_id
      WHERE 1=1
    `;

    const params = [];

    // Role scoping: normal employees see their own tasks by default unless explicitly searching or viewing public
    if (user.role === 'employee' || user.role === 'medical_rep' || only_mine === 'true') {
      sql += ` AND t.assigned_to_user_id = ?`;
      params.push(user.id);
    } else if (assigned_to) {
      sql += ` AND t.assigned_to_user_id = ?`;
      params.push(assigned_to);
    }

    if (status) {
      sql += ` AND t.status = ?`;
      params.push(status);
    }

    if (priority) {
      sql += ` AND t.priority = ?`;
      params.push(priority);
    }

    if (category) {
      sql += ` AND t.category = ?`;
      params.push(category);
    }

    if (is_overdue === 'true') {
      sql += ` AND t.due_date < date('now') AND t.status != 'completed' AND t.status != 'cancelled'`;
    }

    if (search) {
      sql += ` AND (
        t.title_ar LIKE ? OR 
        t.title_en LIKE ? OR 
        t.description_ar LIKE ? OR 
        t.description_en LIKE ? OR
        u_assignee.name_ar LIKE ? OR
        u_assignee.name_en LIKE ?
      )`;
      const s = `%${search}%`;
      params.push(s, s, s, s, s, s);
    }

    sql += ` ORDER BY 
      CASE t.priority 
        WHEN 'urgent' THEN 1 
        WHEN 'high' THEN 2 
        WHEN 'medium' THEN 3 
        WHEN 'low' THEN 4 
      END ASC, 
      t.due_date ASC, 
      t.id DESC`;

    const tasks = query(sql, params);

    return res.json({
      success: true,
      count: tasks.length,
      tasks
    });
  } catch (err) {
    console.error('getTasks error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve tasks.',
      message_ar: 'فشل في استرجاع قائمة المهام.'
    });
  }
};

/**
 * Get single task details with comments
 */
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = get(`
      SELECT 
        t.*,
        u_assignee.name_ar as assignee_name_ar,
        u_assignee.name_en as assignee_name_en,
        u_assignee.email as assignee_email,
        u_assignee.phone as assignee_phone,
        e.employee_code as assignee_code,
        e.job_title_ar as assignee_title_ar,
        e.department_ar as assignee_dept_ar,
        u_creator.name_ar as creator_name_ar,
        u_creator.name_en as creator_name_en
      FROM tasks t
      JOIN users u_assignee ON t.assigned_to_user_id = u_assignee.id
      JOIN users u_creator ON t.created_by_user_id = u_creator.id
      LEFT JOIN employees e ON u_assignee.id = e.user_id
      WHERE t.id = ?
    `, [id]);

    if (!task) {
      return res.status(404).json({
        success: false,
        message_en: 'Task not found.',
        message_ar: 'المهمة غير موجودة.'
      });
    }

    // Get comments
    const comments = query(`
      SELECT 
        tc.*,
        u.name_ar as user_name_ar,
        u.name_en as user_name_en,
        u.role as user_role,
        u.avatar_url
      FROM task_comments tc
      JOIN users u ON tc.user_id = u.id
      WHERE tc.task_id = ?
      ORDER BY tc.created_at ASC
    `, [id]);

    return res.json({
      success: true,
      task,
      comments
    });
  } catch (err) {
    console.error('getTaskById error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to fetch task.',
      message_ar: 'فشل في جلب بيانات المهمة.'
    });
  }
};

/**
 * Create a new task (HR Manager / Admin / Branch Manager)
 */
const createTask = async (req, res) => {
  try {
    const creatorUser = req.user;
    const {
      title_ar,
      title_en,
      description_ar,
      description_en,
      assigned_to_user_id,
      category = 'production',
      priority = 'medium',
      due_date,
      estimated_hours
    } = req.body;

    if (!title_ar || !assigned_to_user_id) {
      return res.status(400).json({
        success: false,
        message_en: 'Task title and assigned employee are required.',
        message_ar: 'عنوان المهمة وتحديد الموظف المسند إليه مطلوبان.'
      });
    }

    // Verify assigned user exists and is active
    const assignee = get('SELECT id, name_ar, name_en, email, is_active FROM users WHERE id = ?', [assigned_to_user_id]);
    if (!assignee || !assignee.is_active) {
      return res.status(404).json({
        success: false,
        message_en: 'Assigned employee not found or inactive.',
        message_ar: 'الموظف المسند إليه غير موجود أو حسابه غير نشط.'
      });
    }

    const taskTitleEn = title_en ? title_en.trim() : title_ar.trim();

    const result = run(`
      INSERT INTO tasks (
        title_ar, title_en, description_ar, description_en,
        assigned_to_user_id, created_by_user_id, category,
        priority, status, progress_percent, due_date, estimated_hours
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'todo', 0, ?, ?)
    `, [
      title_ar.trim(),
      taskTitleEn,
      description_ar ? description_ar.trim() : null,
      description_en ? description_en.trim() : null,
      assigned_to_user_id,
      creatorUser.id,
      category,
      priority,
      due_date || null,
      estimated_hours || null
    ]);

    const newTaskId = result.lastInsertRowid;

    // Send instant notification to assigned employee
    NotificationService.notifyTaskAssigned({
      taskId: newTaskId,
      taskTitleAr: title_ar.trim(),
      taskTitleEn: taskTitleEn,
      assigneeId: assigned_to_user_id,
      assignerId: creatorUser.id,
      assignerName: creatorUser.name_ar
    });

    return res.status(201).json({
      success: true,
      message_en: 'Task created and assigned successfully.',
      message_ar: 'تم إنشاء المهمة وإسنادها للموظف بنجاح.',
      taskId: newTaskId
    });
  } catch (err) {
    console.error('createTask error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to create task.',
      message_ar: 'فشل في إنشاء المهمة.'
    });
  }
};

/**
 * Update task progress, status, or assignment
 */
const updateTask = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const {
      status,
      progress_percent,
      actual_hours,
      title_ar,
      title_en,
      description_ar,
      priority,
      due_date,
      assigned_to_user_id
    } = req.body;

    const task = get('SELECT * FROM tasks WHERE id = ?', [id]);
    if (!task) {
      return res.status(404).json({
        success: false,
        message_en: 'Task not found.',
        message_ar: 'المهمة غير موجودة.'
      });
    }

    // Authorization: only the assignee, the creator, or an HR/Admin can update
    const isAssignee = task.assigned_to_user_id === user.id;
    const isCreator = task.created_by_user_id === user.id;
    const isStaff = user.role === 'super_admin' || user.role === 'hr_manager';

    if (!isAssignee && !isCreator && !isStaff) {
      return res.status(403).json({
        success: false,
        message_en: 'You are not authorized to update this task.',
        message_ar: 'ليس لديك الصلاحية لتحديث هذه المهمة.'
      });
    }

    let completedAt = task.completed_at;
    let newProgress = progress_percent !== undefined ? progress_percent : task.progress_percent;

    if (status === 'completed') {
      completedAt = new Date().toISOString();
      newProgress = 100;
    } else if (status && status !== 'completed') {
      completedAt = null;
    }

    // If regular employee, they can only update status, progress, actual_hours
    if (!isStaff && !isCreator) {
      run(`
        UPDATE tasks
        SET status = COALESCE(?, status),
            progress_percent = ?,
            actual_hours = COALESCE(?, actual_hours),
            completed_at = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `, [status, newProgress, actual_hours, completedAt, id]);
    } else {
      // HR/Admin/Creator can update all attributes
      run(`
        UPDATE tasks
        SET status = COALESCE(?, status),
            progress_percent = ?,
            actual_hours = COALESCE(?, actual_hours),
            completed_at = ?,
            title_ar = COALESCE(?, title_ar),
            title_en = COALESCE(?, title_en),
            description_ar = COALESCE(?, description_ar),
            priority = COALESCE(?, priority),
            due_date = COALESCE(?, due_date),
            assigned_to_user_id = COALESCE(?, assigned_to_user_id),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `, [
        status, newProgress, actual_hours, completedAt,
        title_ar, title_en, description_ar, priority, due_date,
        assigned_to_user_id, id
      ]);
    }

    // Trigger notification if status changed
    if (status && status !== task.status) {
      const recipientToNotify = isAssignee ? task.created_by_user_id : task.assigned_to_user_id;
      NotificationService.notifyTaskStatusChanged({
        taskId: task.id,
        taskTitleAr: task.title_ar,
        taskTitleEn: task.title_en,
        newStatus: status,
        updaterName: user.name_ar,
        notifyUserId: recipientToNotify
      });
    }

    return res.json({
      success: true,
      message_en: 'Task updated successfully.',
      message_ar: 'تم تحديث المهمة بنجاح.'
    });
  } catch (err) {
    console.error('updateTask error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update task.',
      message_ar: 'فشل في تحديث المهمة.'
    });
  }
};

/**
 * Add a comment / log entry to a task
 */
const addTaskComment = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { comment } = req.body;

    if (!comment || !comment.trim()) {
      return res.status(400).json({
        success: false,
        message_en: 'Comment text is required.',
        message_ar: 'نص التعليق مطلوب.'
      });
    }

    const task = get('SELECT * FROM tasks WHERE id = ?', [id]);
    if (!task) {
      return res.status(404).json({
        success: false,
        message_en: 'Task not found.',
        message_ar: 'المهمة غير موجودة.'
      });
    }

    const result = run(`
      INSERT INTO task_comments (task_id, user_id, comment)
      VALUES (?, ?, ?)
    `, [id, user.id, comment.trim()]);

    // Notify the other party
    const targetUserId = (user.id === task.assigned_to_user_id) ? task.created_by_user_id : task.assigned_to_user_id;
    if (targetUserId) {
      NotificationService.notify({
        recipientId: targetUserId,
        senderId: user.id,
        type: 'task_comment',
        titleAr: `تعليق جديد على المهمة: ${task.title_ar}`,
        titleEn: `New Comment on Task: ${task.title_en}`,
        messageAr: `${user.name_ar}: ${comment.trim()}`,
        messageEn: `${user.name_en}: ${comment.trim()}`,
        linkUrl: `/tasks?id=${task.id}`
      });
    }

    return res.status(201).json({
      success: true,
      message_en: 'Comment added.',
      message_ar: 'تمت إضافة التعليق بنجاح.',
      commentId: result.lastInsertRowid
    });
  } catch (err) {
    console.error('addTaskComment error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to add comment.',
      message_ar: 'فشل في إضافة التعليق.'
    });
  }
};

/**
 * Task Analytics & Performance Metrics
 */
const getTaskAnalytics = async (req, res) => {
  try {
    const user = req.user;
    const isStaff = user.role === 'super_admin' || user.role === 'hr_manager';

    const userFilter = isStaff ? '' : ` WHERE assigned_to_user_id = ${user.id}`;
    const userFilterAnd = isStaff ? '' : ` AND assigned_to_user_id = ${user.id}`;

    const total = get(`SELECT COUNT(*) as count FROM tasks ${userFilter}`);
    const todo = get(`SELECT COUNT(*) as count FROM tasks WHERE status = 'todo' ${userFilterAnd}`);
    const in_progress = get(`SELECT COUNT(*) as count FROM tasks WHERE status = 'in_progress' ${userFilterAnd}`);
    const in_review = get(`SELECT COUNT(*) as count FROM tasks WHERE status = 'in_review' ${userFilterAnd}`);
    const completed = get(`SELECT COUNT(*) as count FROM tasks WHERE status = 'completed' ${userFilterAnd}`);
    const overdue = get(`SELECT COUNT(*) as count FROM tasks WHERE due_date < date('now') AND status NOT IN ('completed', 'cancelled') ${userFilterAnd}`);

    const byPriority = query(`
      SELECT priority, COUNT(*) as count
      FROM tasks
      ${userFilter}
      GROUP BY priority
    `);

    const byCategory = query(`
      SELECT category, COUNT(*) as count
      FROM tasks
      ${userFilter}
      GROUP BY category
    `);

    return res.json({
      success: true,
      analytics: {
        total: total.count,
        todo: todo.count,
        in_progress: in_progress.count,
        in_review: in_review.count,
        completed: completed.count,
        overdue: overdue.count,
        byPriority,
        byCategory
      }
    });
  } catch (err) {
    console.error('getTaskAnalytics error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve task metrics.',
      message_ar: 'فشل في استرجاع مؤشرات المهام.'
    });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  addTaskComment,
  getTaskAnalytics
};
