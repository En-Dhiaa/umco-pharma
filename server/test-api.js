const { query, get } = require('./database/db');
const authController = require('./controllers/authController');
const employeeController = require('./controllers/employeeController');
const taskController = require('./controllers/taskController');
const notificationController = require('./controllers/notificationController');
const productController = require('./controllers/productController');
const quoteController = require('./controllers/quoteController');
const pvController = require('./controllers/pvController');
const statsController = require('./controllers/statsController');

// Helper mock request / response
const mockReqRes = (body = {}, queryParams = {}, user = null, params = {}) => {
  let statusCode = 200;
  let responseData = null;
  const req = { body, query: queryParams, user, params, headers: {} };
  const res = {
    status: (code) => { statusCode = code; return res; },
    json: (data) => { responseData = data; return res; }
  };
  return { req, res, getResult: () => ({ status: statusCode, data: responseData }) };
};

const assert = (condition, message) => {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
};

const runTest = async () => {
  console.log('=== STARTING COMPREHENSIVE UMCO BACKEND TESTS ===\n');

  // 1. Test Login as HR Manager
  console.log('1. Testing HR Manager Login...');
  const { req: loginReq, res: loginRes, getResult: getLoginRes } = mockReqRes({
    email: 'hr@umcopharma.com',
    password: 'hr123'
  });
  await authController.login(loginReq, loginRes);
  const loginResult = getLoginRes();
  assert(loginResult.status === 200, 'HR login should return status 200');
  assert(loginResult.data?.success === true, 'HR login should succeed');
  assert(loginResult.data?.token, 'HR login should return JWT token');
  console.log('   ✅ HR Login successful:', loginResult.data.user.name_ar, `(${loginResult.data.user.role})`);
  const hrUser = loginResult.data.user;

  // 2. Test HR Adding a new employee with unique email
  console.log('\n2. Testing HR Creating New Employee...');
  const timestamp = Date.now();
  const testEmail = `test.eng.${timestamp}@umcopharma.com`;
  const { req: empReq, res: empRes, getResult: getEmpRes } = mockReqRes({
    name_ar: `م. حسام العريقي ${timestamp.toString().slice(-4)}`,
    name_en: `Eng. Hussam Al-Oraiqi ${timestamp.toString().slice(-4)}`,
    email: testEmail,
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
  assert(createEmpResult.status === 201, `Create employee should return 201, got ${createEmpResult.status}`);
  assert(createEmpResult.data?.success === true, 'Employee creation should succeed');
  const newEmpId = createEmpResult.data.employee.user_id;
  const newEmpCode = createEmpResult.data.employee.employee_code;
  console.log('   ✅ Employee created successfully:', newEmpCode, `(User ID: ${newEmpId})`);

  // 3. Test Assigning a Task to the New Employee
  console.log('\n3. Testing Task Creation & Assignment...');
  const { req: taskReq, res: taskRes, getResult: getTaskRes } = mockReqRes({
    title_ar: 'الصيانة الوقائية الدورية لخط محاليل فيميكير',
    title_en: 'Periodic Preventive Maintenance for Femicare Liquid Line',
    description_ar: 'فحص دوري لمضخات الضغط العالي وصمامات التعقيم بالبخار حسب بروتوكول GMP.',
    description_en: 'Periodic inspection of high pressure pumps and steam sterilization valves per GMP.',
    assigned_to_user_id: newEmpId,
    category: 'maintenance',
    priority: 'urgent',
    due_date: '2026-10-30',
    estimated_hours: 6
  }, {}, hrUser);

  await taskController.createTask(taskReq, taskRes);
  const createTaskResult = getTaskRes();
  assert(createTaskResult.status === 201, `Create task should return 201, got ${createTaskResult.status}`);
  assert(createTaskResult.data?.taskId, 'Create task should return a valid taskId');
  const newTaskId = createTaskResult.data.taskId;
  console.log('   ✅ Task created and assigned successfully: Task ID', newTaskId);

  // 4. Test Employee Login
  console.log('\n4. Testing New Employee Login...');
  const { req: empLoginReq, res: empLoginRes, getResult: getEmpLoginRes } = mockReqRes({
    email: testEmail,
    password: 'empPassword123'
  });
  await authController.login(empLoginReq, empLoginRes);
  const empLoginData = getEmpLoginRes().data;
  assert(empLoginData?.success === true, 'New employee login should succeed');
  const empUser = empLoginData.user;
  console.log('   ✅ Employee Login successful:', empUser.name_ar, `(${empUser.email})`);

  // 5. Test Employee Notifications
  console.log('\n5. Testing Employee Notifications Retrieval...');
  const { req: notifReq, res: notifRes, getResult: getNotifRes } = mockReqRes({}, {}, empUser);
  await notificationController.getMyNotifications(notifReq, notifRes);
  const notifResult = getNotifRes();
  assert(notifResult.status === 200, 'Notifications retrieval should return 200');
  assert(Array.isArray(notifResult.data?.notifications), 'Notifications should be an array');
  assert(notifResult.data.notifications.length >= 1, 'Should have received task notification');
  console.log(`   ✅ Received ${notifResult.data.notifications.length} notifications:`);
  notifResult.data.notifications.forEach(n => console.log(`      - [${n.type}] ${n.title_ar}`));

  // 6. Test Updating Task Status & Progress
  console.log('\n6. Testing Employee Updating Task to In Progress...');
  const { req: updReq, res: updRes, getResult: getUpdRes } = mockReqRes({
    status: 'in_progress',
    progress_percent: 50,
    actual_hours: 3
  }, {}, empUser, { id: newTaskId });

  await taskController.updateTask(updReq, updRes);
  const updateResult = getUpdRes();
  assert(updateResult.status === 200, `Task update should return 200, got ${updateResult.status}`);
  assert(updateResult.data?.success === true, 'Task update should succeed');
  console.log('   ✅ Task status updated to in_progress (50%)');

  // 7. Test Adding Comment to Task
  console.log('\n7. Testing Adding Task Comment...');
  const { req: commReq, res: commRes, getResult: getCommRes } = mockReqRes({
    comment: 'تم الانتهاء من فحص صمامات الضغط، جاري العمل على تبديل الفلاتر.'
  }, {}, empUser, { id: newTaskId });

  await taskController.addTaskComment(commReq, commRes);
  const commResult = getCommRes();
  assert(commResult.status === 201, `Add comment should return 201, got ${commResult.status}`);
  console.log('   ✅ Task comment added successfully');

  // 8. Test Products Catalog API
  console.log('\n8. Testing Products Catalog API...');
  const { req: prodReq, res: prodRes, getResult: getProdRes } = mockReqRes({}, { category: 'sterilizers-antiseptics' });
  await productController.getProducts(prodReq, prodRes);
  const prodResult = getProdRes();
  assert(prodResult.status === 200, 'Products retrieval should return 200');
  assert(prodResult.data?.products?.length > 0, 'Should find products in sterilizers category');
  console.log(`   ✅ Sterilizers count: ${prodResult.data.products.length}`);
  prodResult.data.products.slice(0, 3).forEach(p => console.log(`      - ${p.trade_name_ar} (${p.trade_name_en})`));

  // 9. Test B2B RFQ (Quotation) Creation
  console.log('\n9. Testing B2B RFQ (Quotation Request)...');
  const { req: quoteReq, res: quoteRes, getResult: getQuoteRes } = mockReqRes({
    company_or_pharmacy: 'مستشفى الثورة النموذجي العام',
    contact_person: 'د. يحيى الشرفي',
    phone: '+967 771 234 567',
    email: 'procurement@al-thawrah.org',
    governorate: 'صنعاء',
    inquiry_type: 'Bulk Hospital Order',
    items: [
      { id: 1, name: 'Femicare Povidone Iodine 10%', quantity: 500 },
      { id: 2, name: 'Umco Scrub Surgical Scrub', quantity: 200 }
    ],
    notes: 'توريد عاجل للأقسام الجراحية وغرف العمليات'
  });
  await quoteController.createQuote(quoteReq, quoteRes);
  const quoteResult = getQuoteRes();
  assert(quoteResult.status === 201, `Create quote should return 201, got ${quoteResult.status}`);
  assert(quoteResult.data?.quoteNumber, 'Quote creation should return quote number');
  console.log('   ✅ RFQ created successfully:', quoteResult.data.quoteNumber);

  // 10. Test Pharmacovigilance (PV) Reporting
  console.log('\n10. Testing Pharmacovigilance (PV) Report Submission...');
  const { req: pvReq, res: pvRes, getResult: getPvRes } = mockReqRes({
    reporter_name: 'د. منى الكبسي - صيدلانية سريرية',
    reporter_role: 'pharmacist',
    phone: '+967 777 888 999',
    email: 'clinical.pharmacy@hospital.ye',
    patient_initials: 'A. M.',
    patient_age: 34,
    patient_gender: 'female',
    product_name: 'Umco Derm Cream',
    batch_number: 'BATCH-2026-UD04',
    adverse_reaction: 'احمرار طفيف مؤقت في موضع الاستخدام زال بعد ساعة واحدة.',
    severity: 'mild',
    action_taken: 'إيقاف المستحضر مؤقتاً ومراقبة الحالة'
  });
  await pvController.createReport(pvReq, pvRes);
  const pvResult = getPvRes();
  assert(pvResult.status === 201, `Create PV report should return 201, got ${pvResult.status}`);
  assert(pvResult.data?.reference, 'PV report creation should return reference');
  console.log('   ✅ PV Report submitted successfully:', pvResult.data.reference);

  // 11. Test System Stats Overview
  console.log('\n11. Testing System Stats Overview...');
  const { req: statsReq, res: statsRes, getResult: getStatsRes } = mockReqRes({}, {}, hrUser);
  await statsController.getSystemStats(statsReq, statsRes);
  const statsResult = getStatsRes();
  assert(statsResult.status === 200, 'Stats overview should return 200');
  console.log('   ✅ System Stats:');
  console.log('      - Products:', statsResult.data.stats.products);
  console.log('      - Branches:', statsResult.data.stats.branches);
  console.log('      - Active Employees:', statsResult.data.stats.employees);
  console.log('      - Total Tasks:', statsResult.data.stats.tasks.total);
  console.log('      - Total Quotes:', statsResult.data.stats.quotes);
  console.log('      - Total PV Reports:', statsResult.data.stats.pvReports);

  console.log('\n======================================================');
  console.log('🎉 ALL 11 WORKFLOW TESTS EXECUTED & PASSED WITH 100% SUCCESS!');
  console.log('======================================================\n');
};

runTest().catch((err) => {
  console.error('\n❌ TEST SUITE FAILED:', err);
  process.exit(1);
});
