const bcrypt = require('bcryptjs');
const { query, get, run } = require('../database/db');
const NotificationService = require('../services/notificationService');

/**
 * List all employees with rich search, filters & performance metrics
 */
const getEmployees = async (req, res) => {
  try {
    const { department, branch_id, status, search } = req.query;

    let sql = `
      SELECT 
        e.*,
        u.name_ar,
        u.name_en,
        u.email,
        u.phone,
        u.avatar_url,
        u.role,
        u.is_active as user_active,
        b.city_ar as branch_name_ar,
        b.city_en as branch_name_en,
        (SELECT COUNT(*) FROM tasks t WHERE t.assigned_to_user_id = u.id) as total_tasks,
        (SELECT COUNT(*) FROM tasks t WHERE t.assigned_to_user_id = u.id AND t.status = 'completed') as completed_tasks,
        (SELECT COUNT(*) FROM tasks t WHERE t.assigned_to_user_id = u.id AND t.status IN ('todo', 'in_progress', 'in_review')) as pending_tasks
      FROM employees e
      JOIN users u ON e.user_id = u.id
      LEFT JOIN branches b ON e.branch_id = b.id
      WHERE 1=1
    `;

    const params = [];

    if (department) {
      sql += ` AND (e.department_en = ? OR e.department_ar = ?)`;
      params.push(department, department);
    }

    if (branch_id) {
      sql += ` AND e.branch_id = ?`;
      params.push(branch_id);
    }

    if (status) {
      sql += ` AND e.status = ?`;
      params.push(status);
    }

    if (search) {
      sql += ` AND (
        u.name_ar LIKE ? OR 
        u.name_en LIKE ? OR 
        u.email LIKE ? OR 
        e.employee_code LIKE ? OR 
        e.job_title_ar LIKE ? OR 
        e.job_title_en LIKE ?
      )`;
      const s = `%${search}%`;
      params.push(s, s, s, s, s, s);
    }

    sql += ` ORDER BY e.id DESC`;

    const employees = query(sql, params);

    return res.json({
      success: true,
      count: employees.length,
      employees
    });
  } catch (err) {
    console.error('getEmployees error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve employees directory.',
      message_ar: 'فشل في استرجاع سجل الموظفين.'
    });
  }
};

/**
 * Get single employee profile with assigned tasks
 */
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = get(`
      SELECT 
        e.*,
        u.name_ar,
        u.name_en,
        u.email,
        u.phone,
        u.avatar_url,
        u.role,
        u.is_active as user_active,
        b.city_ar as branch_name_ar,
        b.city_en as branch_name_en,
        hr.name_ar as created_by_name_ar,
        hr.name_en as created_by_name_en
      FROM employees e
      JOIN users u ON e.user_id = u.id
      LEFT JOIN branches b ON e.branch_id = b.id
      LEFT JOIN users hr ON e.created_by_user_id = hr.id
      WHERE e.id = ? OR e.user_id = ?
    `, [id, id]);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message_en: 'Employee not found.',
        message_ar: 'الموظف غير موجود.'
      });
    }

    // Get recent tasks assigned to this employee
    const tasks = query(`
      SELECT t.*, u_creator.name_ar as creator_name_ar, u_creator.name_en as creator_name_en
      FROM tasks t
      JOIN users u_creator ON t.created_by_user_id = u_creator.id
      WHERE t.assigned_to_user_id = ?
      ORDER BY t.created_at DESC
      LIMIT 10
    `, [employee.user_id]);

    return res.json({
      success: true,
      employee,
      recentTasks: tasks
    });
  } catch (err) {
    console.error('getEmployeeById error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to fetch employee details.',
      message_ar: 'فشل في جلب تفاصيل الموظف.'
    });
  }
};

/**
 * HR adds a new employee (كل موظف يدخله الـ HR)
 */
const createEmployee = async (req, res) => {
  try {
    const hrUserId = req.user.id;
    const {
      name_ar,
      name_en,
      email,
      password,
      role = 'employee',
      phone,
      job_title_ar,
      job_title_en,
      department_ar,
      department_en,
      branch_id,
      hire_date,
      salary_grade,
      national_id,
      education_ar,
      education_en,
      emergency_contact,
      notes
    } = req.body;

    // Validation
    if (!name_ar || !name_en || !email || !password || !job_title_ar || !department_ar || !hire_date) {
      return res.status(400).json({
        success: false,
        message_en: 'Please provide all required fields (Arabic & English Name, Email, Password, Job Title, Department, Hire Date).',
        message_ar: 'يرجى تزويد كافة الحقول المطلوبة (الاسم بالعربي والإنجليزي، البريد، كلمة المرور، المسمى الوظيفي، القسم، تاريخ التعيين).'
      });
    }

    // Check email uniqueness
    const existingUser = get('SELECT id FROM users WHERE LOWER(email) = LOWER(?)', [email.trim()]);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message_en: 'An account with this email address already exists.',
        message_ar: 'يوجد حساب مسجل مسبقاً بهذا البريد الإلكتروني.'
      });
    }

    // Generate unique employee code: EMP-100X
    const lastEmp = get('SELECT MAX(id) as max_id FROM employees');
    const nextSeq = (lastEmp?.max_id || 0) + 1;
    const employee_code = `EMP-${1000 + nextSeq}`;

    // Hash password
    const password_hash = await bcrypt.hash(password, 10);

    // 1. Create User record
    const userRes = run(`
      INSERT INTO users (name_ar, name_en, email, password_hash, role, phone, is_active)
      VALUES (?, ?, ?, ?, ?, ?, 1)
    `, [name_ar.trim(), name_en.trim(), email.trim().toLowerCase(), password_hash, role, phone || null]);

    const newUserId = userRes.lastInsertRowid;

    // 2. Create Employee profile linked to user and HR creator
    const empRes = run(`
      INSERT INTO employees (
        user_id, employee_code, job_title_ar, job_title_en,
        department_ar, department_en, branch_id, hire_date,
        salary_grade, status, national_id, education_ar,
        education_en, emergency_contact, notes, created_by_user_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, ?, ?, ?)
    `, [
      newUserId,
      employee_code,
      job_title_ar.trim(),
      job_title_en ? job_title_en.trim() : job_title_ar.trim(),
      department_ar.trim(),
      department_en ? department_en.trim() : department_ar.trim(),
      branch_id || null,
      hire_date,
      salary_grade || 'Grade-Standard',
      national_id || null,
      education_ar || null,
      education_en || null,
      emergency_contact || null,
      notes || null,
      hrUserId
    ]);

    // Send Welcome Notification to the employee
    NotificationService.notify({
      recipientId: newUserId,
      senderId: hrUserId,
      type: 'hr_notice',
      titleAr: 'مرحباً بك في منصة أمكو للصناعات الدوائية',
      titleEn: 'Welcome to UMCO Pharmaceuticals Platform',
      messageAr: `تم إنشاء حسابك الوظيفي برقم كود (${employee_code}) بنجاح. يمكنك الآن استعراض مهامك وتحديث إنجازاتك اليومية.`,
      messageEn: `Your employee profile (${employee_code}) has been created successfully. You can now view assigned tasks and submit your progress.`,
      linkUrl: '/tasks'
    });

    return res.status(201).json({
      success: true,
      message_en: `Employee ${name_en} created successfully with code ${employee_code}.`,
      message_ar: `تم تسجيل الموظف ${name_ar} بنجاح برقم كود ${employee_code}.`,
      employee: {
        id: empRes.lastInsertRowid,
        user_id: newUserId,
        employee_code,
        name_ar,
        name_en,
        email,
        job_title_ar,
        department_ar
      }
    });
  } catch (err) {
    console.error('createEmployee error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to create employee.',
      message_ar: 'حدث خطأ أثناء إضافة الموظف.'
    });
  }
};

/**
 * Update employee details (HR only)
 */
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name_ar,
      name_en,
      phone,
      job_title_ar,
      job_title_en,
      department_ar,
      department_en,
      branch_id,
      salary_grade,
      education_ar,
      education_en,
      emergency_contact,
      notes
    } = req.body;

    const emp = get('SELECT * FROM employees WHERE id = ?', [id]);
    if (!emp) {
      return res.status(404).json({
        success: false,
        message_en: 'Employee not found.',
        message_ar: 'الموظف غير موجود.'
      });
    }

    // Update user record
    if (name_ar || name_en || phone) {
      run(`
        UPDATE users
        SET name_ar = COALESCE(?, name_ar),
            name_en = COALESCE(?, name_en),
            phone = COALESCE(?, phone),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `, [name_ar, name_en, phone, emp.user_id]);
    }

    // Update employee record
    run(`
      UPDATE employees
      SET job_title_ar = COALESCE(?, job_title_ar),
          job_title_en = COALESCE(?, job_title_en),
          department_ar = COALESCE(?, department_ar),
          department_en = COALESCE(?, department_en),
          branch_id = COALESCE(?, branch_id),
          salary_grade = COALESCE(?, salary_grade),
          education_ar = COALESCE(?, education_ar),
          education_en = COALESCE(?, education_en),
          emergency_contact = COALESCE(?, emergency_contact),
          notes = COALESCE(?, notes),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [
      job_title_ar, job_title_en,
      department_ar, department_en,
      branch_id, salary_grade,
      education_ar, education_en,
      emergency_contact, notes,
      id
    ]);

    return res.json({
      success: true,
      message_en: 'Employee updated successfully.',
      message_ar: 'تم تحديث بيانات الموظف بنجاح.'
    });
  } catch (err) {
    console.error('updateEmployee error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to update employee.',
      message_ar: 'فشل في تحديث بيانات الموظف.'
    });
  }
};

/**
 * Update employee status (active, on_leave, suspended, terminated)
 */
const updateEmployeeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['active', 'on_leave', 'suspended', 'terminated'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message_en: 'Invalid status value.',
        message_ar: 'قيمة الحالة غير صالحة.'
      });
    }

    const emp = get('SELECT * FROM employees WHERE id = ?', [id]);
    if (!emp) {
      return res.status(404).json({
        success: false,
        message_en: 'Employee not found.',
        message_ar: 'الموظف غير موجود.'
      });
    }

    run('UPDATE employees SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [status, id]);

    // If suspended or terminated, deactivate user login
    const isActiveUser = (status === 'active' || status === 'on_leave') ? 1 : 0;
    run('UPDATE users SET is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [isActiveUser, emp.user_id]);

    return res.json({
      success: true,
      message_en: `Employee status updated to ${status}.`,
      message_ar: `تم تعديل حالة الموظف بنجاح إلى (${status}).`
    });
  } catch (err) {
    console.error('updateEmployeeStatus error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to change status.',
      message_ar: 'فشل في تعديل حالة الموظف.'
    });
  }
};

/**
 * HR & Personnel Metrics
 */
const getHRStats = async (req, res) => {
  try {
    const totalEmployees = get('SELECT COUNT(*) as count FROM employees');
    const activeEmployees = get("SELECT COUNT(*) as count FROM employees WHERE status = 'active'");
    const onLeaveEmployees = get("SELECT COUNT(*) as count FROM employees WHERE status = 'on_leave'");
    
    const byDepartment = query(`
      SELECT department_ar, department_en, COUNT(*) as count
      FROM employees
      GROUP BY department_en
      ORDER BY count DESC
    `);

    const byBranch = query(`
      SELECT b.city_ar, b.city_en, COUNT(e.id) as count
      FROM branches b
      LEFT JOIN employees e ON b.id = e.branch_id
      GROUP BY b.id
      ORDER BY count DESC
    `);

    return res.json({
      success: true,
      stats: {
        total: totalEmployees.count,
        active: activeEmployees.count,
        on_leave: onLeaveEmployees.count,
        byDepartment,
        byBranch
      }
    });
  } catch (err) {
    console.error('getHRStats error:', err);
    return res.status(500).json({
      success: false,
      message_en: 'Failed to retrieve HR statistics.',
      message_ar: 'فشل في استرجاع إحصائيات الموارد البشرية.'
    });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  updateEmployeeStatus,
  getHRStats
};
