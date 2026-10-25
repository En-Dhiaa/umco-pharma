const express = require('express');
const router = express.Router();

const { authenticate } = require('../middleware/auth');
const { authorize } = require('../middleware/rbac');

const authController = require('../controllers/authController');
const employeeController = require('../controllers/employeeController');
const taskController = require('../controllers/taskController');
const notificationController = require('../controllers/notificationController');
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');
const branchController = require('../controllers/branchController');
const quoteController = require('../controllers/quoteController');
const pvController = require('../controllers/pvController');
const statsController = require('../controllers/statsController');

// --- Auth Routes ---
router.post('/auth/login', authController.login);
router.get('/auth/me', authenticate, authController.getMe);
router.put('/auth/profile', authenticate, authController.updateProfile);

// --- HR & Employee Management Routes (كل موظف يدخله الـ HR) ---
router.get('/employees', authenticate, employeeController.getEmployees);
router.get('/employees/stats/summary', authenticate, authorize(['super_admin', 'hr_manager']), employeeController.getHRStats);
router.get('/employees/:id', authenticate, employeeController.getEmployeeById);
router.post('/employees', authenticate, authorize(['super_admin', 'hr_manager']), employeeController.createEmployee);
router.put('/employees/:id', authenticate, authorize(['super_admin', 'hr_manager']), employeeController.updateEmployee);
router.patch('/employees/:id/status', authenticate, authorize(['super_admin', 'hr_manager']), employeeController.updateEmployeeStatus);

// --- Employee Tasks Management Routes (مهام الموظفين) ---
router.get('/tasks', authenticate, taskController.getTasks);
router.get('/tasks/stats/summary', authenticate, taskController.getTaskAnalytics);
router.get('/tasks/:id', authenticate, taskController.getTaskById);
router.post('/tasks', authenticate, authorize(['super_admin', 'hr_manager', 'branch_manager']), taskController.createTask);
router.patch('/tasks/:id', authenticate, taskController.updateTask);
router.post('/tasks/:id/comments', authenticate, taskController.addTaskComment);

// --- Notifications Center Routes (إشعارات كاملة) ---
router.get('/notifications', authenticate, notificationController.getMyNotifications);
router.patch('/notifications/:id/read', authenticate, notificationController.markAsRead);
router.post('/notifications/read-all', authenticate, notificationController.markAllAsRead);

// --- Public / Catalog Routes ---
router.get('/products', productController.getProducts);
router.get('/products/:slug', productController.getProductBySlug);
router.post('/products', authenticate, authorize(['super_admin']), productController.createProduct);

router.get('/categories', categoryController.getCategories);
router.get('/branches', branchController.getBranches);
router.get('/branches/:id', branchController.getBranchById);

// --- B2B & RFQ System Routes ---
router.post('/quotes', quoteController.createQuote);
router.get('/quotes', authenticate, authorize(['super_admin', 'hr_manager', 'branch_manager']), quoteController.getQuotes);
router.patch('/quotes/:id/status', authenticate, authorize(['super_admin', 'hr_manager']), quoteController.updateQuoteStatus);

// --- Pharmacovigilance (Medical Hub & PV) Routes ---
router.post('/pv', pvController.createReport);
router.get('/pv', authenticate, authorize(['super_admin', 'hr_manager', 'employee']), pvController.getReports);
router.patch('/pv/:id/status', authenticate, authorize(['super_admin', 'hr_manager', 'employee']), pvController.updateReportStatus);

// --- System Overview Stats ---
router.get('/stats/overview', authenticate, statsController.getSystemStats);

module.exports = router;
