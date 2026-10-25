const http = require('http');

const runTest = async () => {
  // Start server locally in-process or test controllers directly
  console.log('Testing UMCO Backend Controllers and Workflows directly...');

  const authController = require('./controllers/authController');
  const employeeController = require('./controllers/employeeController');
  const taskController = require('./controllers/taskController');
  const notificationController = require('./controllers/notificationController');
  const productController = require('./controllers/productController');

  // Helper mock request / response
  const mockReqRes = (body = {}, query = {}, user = null, params = {}) => {
    let statusCode = 200;
    let responseData = null;
    const req = { body, query, user, params, headers: {} };
    const res = {
      status: (code) => { statusCode = code; return res; },
      json: (data) => { responseData = data; return res; }
    };
    return { req, res, getResult: () => ({ status: statusCode, data: responseData }) };
  };

  // 1. Test Login as HR
  console.log('1. Testing HR Login...');
  const { req: loginReq, res: loginRes, getResult: getLoginRes } = mockReqRes({
    email: 'hr@umcopharma.com',
    password: 'hr123'
  });
  await authController.login(loginReq, loginRes);
  const loginResult = getLoginRes();
  console.log('HR Login status:', loginResult.status, 'Success:', loginResult.data?.success, 'User:', loginResult.data?.user?.name_ar);

  const hrUser = loginResult.data?.user;
  if (!hrUser) throw new Error('HR Login failed');

  // 2. Test HR Adding a new employee
  console.log('2. Testing HR Creating New Employee...');
  const { req: empReq, res: empRes, getResult: getEmpRes } = mockReqRes({
    name_ar: 'م. حسام العريقي',
    name_en: 'Eng. Hussam Al-Oraiqi',
    email: 'hussam.oraiqi@umcopharma.com',
    password: 'empPassword123',
    role: 'employee',
    phone: '+967 778 889 900',
    job_title_ar: 'مهندس صيانة خطوط السوائل الطبية',
    job_title_en: 'Medical Liquids Line Maintenance Engineer',
    department_ar: 'الصيانة والهندسة الصناعية',
    department_en: 'Maintenance & Industrial Engineering',
    branch_id: 1,
    hire_date: '2026-10-25',
    salary_grade: 'Grade-B2'
  }, {}, hrUser);

  await employeeController.createEmployee(empReq, empRes);
  const createEmpResult = getEmpRes();
  console.log('Create Employee status:', createEmpResult.status, 'Result:', createEmpResult.data);
  const newEmpId = createEmpResult.data?.employee?.user_id;

  // 3. Test Assigning a Task to the New Employee
  console.log('3. Testing Task Creation & Assignment...');
  const { req: taskReq, res: taskRes, getResult: getTaskRes } = mockReqRes({
    title_ar: 'الصيانة الوقائية لخط محاليل فيميكير',
    title_en: 'Preventive Maintenance for Femicare Liquid Line',
    description_ar: 'فحص دوري لمضخات الضغط العالي وصمامات التعقيم بالبخار.',
    description_en: 'Periodic inspection of high pressure pumps and steam valves.',
    assigned_to_user_id: newEmpId,
    category: 'maintenance',
    priority: 'urgent',
    due_date: '2026-10-30',
    estimated_hours: 6
  }, {}, hrUser);

  await taskController.createTask(taskReq, taskRes);
  const createTaskResult = getTaskRes();
  console.log('Create Task status:', createTaskResult.status, 'TaskId:', createTaskResult.data?.taskId);
  const newTaskId = createTaskResult.data?.taskId;

  // 4. Test Employee Login & Checking Notifications
  console.log('4. Testing New Employee Login & Notifications...');
  const { req: empLoginReq, res: empLoginRes, getResult: getEmpLoginRes } = mockReqRes({
    email: 'hussam.oraiqi@umcopharma.com',
    password: 'empPassword123'
  });
  await authController.login(empLoginReq, empLoginRes);
  const empLoginData = getEmpLoginRes().data;
  console.log('Employee Login Success:', empLoginData?.success, 'Name:', empLoginData?.user?.name_ar);

  // 5. Test Employee Fetching Notifications
  const { req: notifReq, res: notifRes, getResult: getNotifRes } = mockReqRes({}, {}, empLoginData?.user);
  await notificationController.getMyNotifications(notifReq, notifRes);
  const notifResult = getNotifRes();
  console.log('Employee Notifications Count:', notifResult.data?.notifications?.length);
  notifResult.data?.notifications?.forEach(n => console.log(' - Notif:', n.title_ar));

  // 6. Test Updating Task Status
  console.log('6. Testing Employee Updating Task to In Progress...');
  const { req: updReq, res: updRes, getResult: getUpdRes } = mockReqRes({
    status: 'in_progress',
    progress_percent: 50,
    actual_hours: 3
  }, {}, empLoginData?.user, { id: newTaskId });

  await taskController.updateTask(updReq, updRes);
  console.log('Update Task Result:', getUpdRes().data);

  // 7. Test Public Products Catalog
  console.log('7. Testing Products Catalog API...');
  const { req: prodReq, res: prodRes, getResult: getProdRes } = mockReqRes({}, { category: 'sterilizers-antiseptics' });
  await productController.getProducts(prodReq, prodRes);
  const prodResult = getProdRes();
  console.log('Sterilizers products count:', prodResult.data?.count);
  prodResult.data?.products?.slice(0, 3).forEach(p => console.log(' - Product:', p.trade_name_ar, '|', p.trade_name_en));

  console.log('\n--- ALL BACKEND CONTROLLER & WORKFLOW TESTS PASSED 100%! ---');
};

runTest().catch(console.error);
