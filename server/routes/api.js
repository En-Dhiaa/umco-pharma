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
const announcementController = require('../controllers/announcementController');
const inquiryController = require('../controllers/inquiryController');
const settingsController = require('../controllers/settingsController');

// --- Auth Routes ---
router.post('/auth/login', authController.login);
router.get('/auth/me', authenticate, authController.getMe);
router.put('/auth/profile', authenticate, authController.updateProfile);

// --- Site Settings, Visual Identity & Theme (Admin & IT Director Hub) ---
router.get('/settings', settingsController.getSettings);
router.put('/settings', authenticate, authorize(['super_admin', 'it_admin']), settingsController.updateSettings);
router.post('/settings/reset', authenticate, authorize(['super_admin', 'it_admin']), settingsController.resetSettings);

// --- HR & Employee Management Routes (Admin, IT Director & HR) ---
router.get('/employees', authenticate, employeeController.getEmployees);
router.get('/employees/stats/summary', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager']), employeeController.getHRStats);
router.get('/employees/:id', authenticate, employeeController.getEmployeeById);
router.post('/employees', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager']), employeeController.createEmployee);
router.put('/employees/:id', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager']), employeeController.updateEmployee);
router.patch('/employees/:id/status', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager']), employeeController.updateEmployeeStatus);
router.delete('/employees/:id', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager']), employeeController.deleteEmployee);

// --- Employee Tasks Management Routes (مهام الموظفين) ---
router.get('/tasks', authenticate, taskController.getTasks);
router.get('/tasks/stats/summary', authenticate, taskController.getTaskAnalytics);
router.get('/tasks/:id', authenticate, taskController.getTaskById);
router.post('/tasks', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager', 'branch_manager']), taskController.createTask);
router.patch('/tasks/:id', authenticate, taskController.updateTask);
router.post('/tasks/:id/comments', authenticate, taskController.addTaskComment);

// --- Notifications Center Routes (إشعارات كاملة) ---
router.get('/notifications', authenticate, notificationController.getMyNotifications);
router.patch('/notifications/:id/read', authenticate, notificationController.markAsRead);
router.post('/notifications/read-all', authenticate, notificationController.markAllAsRead);

// --- Public / Catalog Routes (Marketing, Admin & IT Management) ---
router.get('/products', productController.getProducts);
router.get('/products/:slug', productController.getProductBySlug);
router.post('/products', authenticate, authorize(['super_admin', 'it_admin', 'marketing']), productController.createProduct);
router.put('/products/:id', authenticate, authorize(['super_admin', 'it_admin', 'marketing']), productController.updateProduct);
router.delete('/products/:id', authenticate, authorize(['super_admin', 'it_admin']), productController.deleteProduct);

router.get('/categories', categoryController.getCategories);

// --- Branches Network & Management (Admin & IT Director) ---
router.get('/branches', branchController.getBranches);
router.get('/branches/:id', branchController.getBranchById);
router.post('/branches', authenticate, authorize(['super_admin', 'it_admin']), branchController.createBranch);
router.put('/branches/:id', authenticate, authorize(['super_admin', 'it_admin']), branchController.updateBranch);
router.delete('/branches/:id', authenticate, authorize(['super_admin', 'it_admin']), branchController.deleteBranch);

// --- Medical Announcements & Marketing Campaigns ---
router.get('/announcements', announcementController.getAnnouncements);
router.post('/announcements', authenticate, authorize(['super_admin', 'it_admin', 'marketing']), announcementController.createAnnouncement);
router.put('/announcements/:id', authenticate, authorize(['super_admin', 'it_admin', 'marketing']), announcementController.updateAnnouncement);
router.delete('/announcements/:id', authenticate, authorize(['super_admin', 'it_admin', 'marketing']), announcementController.deleteAnnouncement);

// --- Customer & Doctor Inquiries (Ask Pharmacist / Support) ---
router.post('/inquiries', inquiryController.createInquiry);
router.get('/inquiries', authenticate, authorize(['super_admin', 'it_admin', 'marketing', 'hr_manager']), inquiryController.getInquiries);
router.post('/inquiries/:id/reply', authenticate, authorize(['super_admin', 'it_admin', 'marketing']), inquiryController.replyInquiry);

// --- B2B & RFQ System Routes ---
router.post('/quotes', quoteController.createQuote);
router.get('/quotes', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager', 'branch_manager', 'marketing']), quoteController.getQuotes);
router.patch('/quotes/:id/status', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager', 'marketing']), quoteController.updateQuoteStatus);

// --- Pharmacovigilance (Medical Hub & PV) Routes ---
router.post('/pv', pvController.createReport);
router.get('/pv', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager', 'employee', 'marketing']), pvController.getReports);
router.patch('/pv/:id/status', authenticate, authorize(['super_admin', 'it_admin', 'hr_manager', 'employee']), pvController.updateReportStatus);

// --- System Overview Stats ---
router.get('/stats/overview', authenticate, statsController.getSystemStats);

module.exports = router;
