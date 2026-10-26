/**
 * UMCO PHARMACEUTICALS - CLIENT APPLICATION LOGIC
 * High-performance, reactive SPA with full bilingual engine (AR/EN),
 * Public Catalog, B2B RFQ, PV Hub, HR Management, Employee Tasks & Notifications.
 */

// --- 1. Bilingual Translation Dictionary ---
const I18N = {
  ar: {
    // Header & Brand
    brand_name: "أمكو للصناعات الدوائية",
    brand_sub: "شركة أمكو للصناعات الطبية والدوائية",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_manufacturing: "التصنيع والجودة",
    nav_products: "المنتجات",
    nav_branches: "شبكة الفروع",
    nav_rfq: "طلب عرض سعر",
    nav_pv: "التيقظ الدوائي",
    nav_portal: "بوابة الموظفين والعمليات",
    btn_login: "تسجيل الدخول",
    btn_logout: "تسجيل الخروج",
    btn_my_tasks: "مهامي والعمليات",

    // Top Bar
    top_contact_sana: "صنعاء: شارع حدة، مبنى 64 (+967 1 414035)",
    top_email: "info@umcopharma.com",
    top_emergency_rep: "المسؤول المخول: د. عبدالله إسحاق (+967 776 666 676)",

    // Hero Section
    hero_badge: "صناعة دوائية وطنية بمعايير الجودة العالمية (GMP)",
    hero_title_1: "الريادة في الصناعات الدوائية",
    hero_title_2: "وحماية صحة المريض اليمني والإقليمي",
    hero_desc: "أكثر من 20 عاماً من الابتكار في تصنيع المعقمات الجراحية، المراهم، القطرات والمستلزمات الطبية عبر 3 خطوط إنتاج مؤتمتة وشبكة تغطي 9 محافظات.",
    btn_explore_catalog: "استكشف كتالوج المنتجات",
    btn_request_quote: "طلب عرض سعر توريد (B2B)",
    metric_years: "+20 عاماً",
    metric_years_sub: "خبرة صناعية رائدة",
    metric_lines: "3 خطوط",
    metric_lines_sub: "إنتاج مؤتمتة بالكامل",
    metric_branches: "9 فروع",
    metric_branches_sub: "تغطي محافظات اليمن",
    metric_products: "+50 مستحضر",
    metric_products_sub: "مرخصة ومطابقة لدساتير BP/USP",

    // Catalog Section
    catalog_tag: "الكتالوج الطبي المتكامل",
    catalog_title: "المستحضرات الدوائية والمستلزمات الطبية",
    catalog_desc: "استعرض كافة مستحضرات شركة أمكو مع التركيبات العلمية ودواعي الاستعمال الموثقة",
    search_placeholder: "ابحث بالاسم التجاري، المادة الفعالة، أو الاستخدام الطبي...",
    filter_all: "كافة المنتجات",
    btn_quick_view: "تفاصيل المستحضر",
    btn_add_to_quote: "إضافة لعرض السعر",
    quote_cart_badge: "سلة التسعير",
    spec_active_ing: "المادة الفعالة:",
    spec_dosage: "الشكل الصيدلاني:",
    spec_size: "العبوة:",
    btn_print_catalog: "طباعة / تصدير الكتالوج المعتمد (PDF)",

    // Manufacturing Section
    mfg_tag: "الكفاءة التصنيعية وضبط الجودة",
    mfg_title: "خطوط إنتاج مؤتمتة ومختبرات رقابة نوعية متطورة",
    mfg_desc: "نلتزم بأدق معايير ممارسات التصنيع الجيد (cGMP) لضمان الفاعلية والنقاء والتعقيم الشامل.",
    tab_line_1: "خط المراهم والكريمات والجل",
    tab_line_2: "خط المعقمات والمطهرات الجراحية",
    tab_line_3: "خط القطرات والشامبو الطبي",
    feature_gmp: "غرف نظيفة بيئية معقمة فئة Class A/B Cleanrooms",
    feature_qc: "فحص ميكروبيولوجي وكيميائي بنسبة 100% لكل دفعة إنتاجية",
    feature_automation: "تعبئة وتغليف آلي بالكامل بدون أي تلامس بشري",
    feature_storage: "مستودعات مكيفة ومراقبة حرارياً على مدار الساعة",

    // Branches Section
    branches_tag: "حضور ميداني في كافة المحافظات",
    branches_title: "شبكة فروع أمكو المعتمدة في الجمهورية اليمنية",
    branches_desc: "9 مراكز توزيع ومكاتب إقليمية لضمان سرعة إمداد المشافي والصيدليات بالاحتياجات الدوائية.",
    branch_hq: "المقر الرئيسي للإدارة",
    btn_contact_branch: "اتصال مباشر",

    // B2B & PV
    b2b_tag: "التوريد والمناقصات",
    b2b_title: "طلب عرض سعر رسمي للكميات (RFQ)",
    b2b_desc: "للصيدليات، المشافي المركزية، المراكز الطبية، والموزعين المعتمدين.",
    pv_tag: "سلامة الدواء والمرضى",
    pv_title: "بوابة التيقظ الدوائي (Pharmacovigilance Hub)",
    pv_desc: "الإبلاغ المباشر عن أي ملاحظات جودة أو أعراض جانبية لضمان سلامة المرضى.",

    // Portal & HR / Tasks
    portal_title: "بوابة العمليات وإدارة الموارد والمهام",
    tab_tasks: "لوحة مهام الموظفين (Tasks)",
    tab_employees: "سجل الموظفين وإدارة HR",
    tab_rfq_review: "طلبات عروض الأسعار",
    tab_pv_review: "بلاغات التيقظ الدوائي",
    btn_add_employee: "إضافة موظف جديد (HR)",
    btn_create_task: "إنشاء مهمة جديدة",
    task_status_todo: "قيد الانتظار",
    task_status_in_progress: "قيد التنفيذ",
    task_status_in_review: "قيد المراجعة",
    task_status_completed: "مكتملة",
    priority_urgent: "عاجلة جداً",
    priority_high: "أولوية عالية",
    priority_medium: "متوسطة",
    priority_low: "عادية",

    // Notifications
    notif_title: "مركز الإشعارات",
    notif_mark_all: "تحديد الكل كمقروء",
    notif_empty: "لا توجد إشعارات جديدة حالياً"
  },
  en: {
    // Header & Brand
    brand_name: "UMCO Pharmaceuticals",
    brand_sub: "UMCO Medical & Pharma Industries Co.",
    nav_home: "Home",
    nav_about: "About Us",
    nav_manufacturing: "Manufacturing & QA",
    nav_products: "Products",
    nav_branches: "Branches Network",
    nav_rfq: "Request a Quote",
    nav_pv: "Pharmacovigilance",
    nav_portal: "Operations Portal",
    btn_login: "Login",
    btn_logout: "Logout",
    btn_my_tasks: "My Tasks & Ops",

    // Top Bar
    top_contact_sana: "Sana'a: Hadda St, Bldg 64 (+967 1 414035)",
    top_email: "info@umcopharma.com",
    top_emergency_rep: "Authorized Rep: Dr. Abdullah Ishaq (+967 776 666 676)",

    // Hero Section
    hero_badge: "National Pharmaceutical Excellence adhering to GMP Standards",
    hero_title_1: "Pioneering Pharma Innovation,",
    hero_title_2: "Safeguarding Patient Care in Yemen & Beyond",
    hero_desc: "Over 20 years of manufacturing high-reliability surgical antiseptics, topical dermatology ointments, ophthalmic solutions, and medical supplies across 3 automated lines and 9 regional branches.",
    btn_explore_catalog: "Explore Products Catalog",
    btn_request_quote: "Request B2B Bulk Quote",
    metric_years: "+20 Years",
    metric_years_sub: "Pharma Industrial Heritage",
    metric_lines: "3 Lines",
    metric_lines_sub: "Fully Automated GMP Lines",
    metric_branches: "9 Branches",
    metric_branches_sub: "Covering Yemen Governorates",
    metric_products: "+50 Formulations",
    metric_products_sub: "USP/BP Pharmacopeia Compliant",

    // Catalog Section
    catalog_tag: "Comprehensive Medical Catalog",
    catalog_title: "Pharmaceuticals & Medical Appliances",
    catalog_desc: "Browse certified UMCO formulations with validated active ingredients and clinical monographs.",
    search_placeholder: "Search by trade name, active ingredient, or indication...",
    filter_all: "All Products",
    btn_quick_view: "Product Specs",
    btn_add_to_quote: "Add to RFQ",
    quote_cart_badge: "Quote Cart",
    spec_active_ing: "Active Ingredient:",
    spec_dosage: "Dosage Form:",
    spec_size: "Packaging:",
    btn_print_catalog: "Print / Export Official Catalog (PDF)",

    // Manufacturing Section
    mfg_tag: "Manufacturing Excellence & QC",
    mfg_title: "Automated Production Lines & Advanced Quality Control",
    mfg_desc: "Complying with stringent Good Manufacturing Practice (cGMP) regulations for total sterility and batch uniformity.",
    tab_line_1: "Ointments, Creams & Gels Line",
    tab_line_2: "Surgical Antiseptics & Douches Line",
    tab_line_3: "Drops & Medicated Shampoos Line",
    feature_gmp: "Class A/B cleanroom sterile processing zones",
    feature_qc: "100% physicochemical and microbiological batch release assays",
    feature_automation: "Touch-free robotic filling and automated blister sealing",
    feature_storage: "24/7 climate-controlled and monitored warehouses",

    // Branches Section
    branches_tag: "Nationwide Coverage",
    branches_title: "Official UMCO Branches Across Yemen",
    branches_desc: "9 certified distribution centers ensuring immediate supply fulfillment to hospitals and pharmacies.",
    branch_hq: "General Headquarters",
    btn_contact_branch: "Direct Call",

    // B2B & PV
    b2b_tag: "Supply & Tenders",
    b2b_title: "Request Official Commercial Quotation (RFQ)",
    b2b_desc: "Dedicated ordering portal for pharmacies, central hospitals, clinics, and distributors.",
    pv_tag: "Drug & Patient Safety",
    pv_title: "Pharmacovigilance Reporting Hub",
    pv_desc: "Report adverse drug events or quality inquiries to our medical safety committee.",

    // Portal & HR / Tasks
    portal_title: "Enterprise Operations & Employee Task System",
    tab_tasks: "Employee Tasks & Kanban",
    tab_employees: "HR Personnel Directory",
    tab_rfq_review: "RFQ Quotations",
    tab_pv_review: "Drug Safety Reports",
    btn_add_employee: "Add New Employee (HR)",
    btn_create_task: "Assign New Task",
    task_status_todo: "Pending",
    task_status_in_progress: "In Progress",
    task_status_in_review: "In Review",
    task_status_completed: "Completed",
    priority_urgent: "Urgent",
    priority_high: "High Priority",
    priority_medium: "Medium",
    priority_low: "Low",

    // Notifications
    notif_title: "Notifications Center",
    notif_mark_all: "Mark All as Read",
    notif_empty: "No new notifications"
  }
};

// --- 2. Global State ---
const State = {
  lang: localStorage.getItem('umco_lang') || 'ar',
  token: localStorage.getItem('umco_token') || null,
  user: null,
  view: 'public', // 'public' or 'portal'
  portalTab: 'tasks', // 'tasks', 'employees', 'quotes', 'pv'
  
  products: [],
  categories: [],
  branches: [],
  tasks: [],
  employees: [],
  notifications: [],
  quotes: [],
  pvReports: [],
  
  selectedCategory: 'all',
  searchQuery: '',
  rfqCart: [],
  activeMfgTab: 1
};

// --- 3. API Client Wrapper ---
const API = {
  async get(endpoint, auth = false) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth && State.token) headers['Authorization'] = `Bearer ${State.token}`;
    const res = await fetch(`/api${endpoint}`, { headers });
    return await res.json();
  },

  async post(endpoint, data = {}, auth = false) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth && State.token) headers['Authorization'] = `Bearer ${State.token}`;
    const res = await fetch(`/api${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    return await res.json();
  },

  async patch(endpoint, data = {}, auth = false) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth && State.token) headers['Authorization'] = `Bearer ${State.token}`;
    const res = await fetch(`/api${endpoint}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data)
    });
    return await res.json();
  }
};

// --- 4. Application Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  setLanguage(State.lang);
  
  // Try restoring existing session
  if (State.token) {
    try {
      const meRes = await API.get('/auth/me', true);
      if (meRes.success) {
        State.user = meRes.user;
      } else {
        logout();
      }
    } catch {
      logout();
    }
  }

  // Load public baseline data
  await loadCatalogData();
  await loadBranchesData();
  
  renderApp();
  setupEventListeners();

  // If user is already logged in, fetch notifications count
  if (State.user) {
    loadNotifications();
  }
});

// --- 5. Language Switcher ---
function setLanguage(lang) {
  State.lang = lang;
  localStorage.setItem('umco_lang', lang);
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  renderApp();
}

function t(key) {
  return I18N[State.lang][key] || key;
}

// --- 6. Data Fetching ---
async function loadCatalogData() {
  try {
    const [catsRes, prodsRes] = await Promise.all([
      API.get('/categories'),
      API.get('/products')
    ]);
    if (catsRes.success) State.categories = catsRes.categories;
    if (prodsRes.success) State.products = prodsRes.products;
  } catch (err) {
    console.error('Error loading catalog:', err);
  }
}

async function loadBranchesData() {
  try {
    const res = await API.get('/branches');
    if (res.success) State.branches = res.branches;
  } catch (err) {
    console.error('Error loading branches:', err);
  }
}

async function loadPortalData() {
  if (!State.user) return;
  try {
    const promises = [
      API.get('/tasks', true),
      API.get('/notifications', true)
    ];

    if (State.user.role === 'super_admin' || State.user.role === 'hr_manager') {
      promises.push(API.get('/employees', true));
      promises.push(API.get('/quotes', true));
      promises.push(API.get('/pv', true));
    }

    const results = await Promise.all(promises);
    if (results[0].success) State.tasks = results[0].tasks;
    if (results[1].success) State.notifications = results[1].notifications;
    if (results[2] && results[2].success) State.employees = results[2].employees;
    if (results[3] && results[3].success) State.quotes = results[3].quotes;
    if (results[4] && results[4].success) State.pvReports = results[4].reports;
  } catch (err) {
    console.error('Error loading portal data:', err);
  }
}

async function loadNotifications() {
  if (!State.user) return;
  const res = await API.get('/notifications', true);
  if (res.success) {
    State.notifications = res.notifications;
    updateNotificationBadge(res.unreadCount);
  }
}

function updateNotificationBadge(count) {
  const badge = document.getElementById('notif-badge');
  if (badge) {
    badge.innerText = count || 0;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// --- 7. Authentication ---
async function handleLogin(email, password) {
  try {
    const res = await API.post('/auth/login', { email, password });
    if (res.success) {
      State.token = res.token;
      State.user = res.user;
      localStorage.setItem('umco_token', res.token);
      showToast(State.lang === 'ar' ? `مرحباً بك د/أ ${res.user.name_ar}` : `Welcome back ${res.user.name_en}`, 'success');
      closeModal('login-modal');
      State.view = 'portal';
      await loadPortalData();
      renderApp();
    } else {
      showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'error');
    }
  } catch (err) {
    showToast('Login network error', 'error');
  }
}

function logout() {
  State.token = null;
  State.user = null;
  State.view = 'public';
  localStorage.removeItem('umco_token');
  showToast(State.lang === 'ar' ? 'تم تسجيل الخروج' : 'Logged out successfully', 'success');
  renderApp();
}

// --- 8. UI Rendering Engine ---
function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  root.innerHTML = `
    ${renderTopNoticeBar()}
    ${renderNavbar()}
    <main>
      ${State.view === 'public' ? renderPublicView() : renderPortalView()}
    </main>
    ${renderFooter()}
    ${renderModals()}
    <div id="toast-container" class="toast-container"></div>
  `;

  // Attach dynamic handlers
  attachViewEvents();
}

// Top Notice Bar
function renderTopNoticeBar() {
  return `
    <div class="top-notice-bar">
      <div class="container top-bar-content">
        <div class="top-bar-contact">
          <div class="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${t('top_contact_sana')}</span>
          </div>
          <div class="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>${t('top_email')}</span>
          </div>
        </div>
        <div class="top-bar-item" style="color: #F87171; font-weight: 700;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>${t('top_emergency_rep')}</span>
        </div>
      </div>
    </div>
  `;
}

// Navigation Bar
function renderNavbar() {
  const isAr = State.lang === 'ar';
  const unreadCount = State.notifications.filter(n => !n.is_read).length;

  return `
    <nav class="navbar">
      <div class="container navbar-container">
        <div class="brand-logo" onclick="switchView('public')">
          <div class="logo-badge">UM</div>
          <div class="brand-text">
            <span class="brand-name">${isAr ? 'أمكو للصناعات الدوائية' : 'UMCO PHARMA'}</span>
            <span class="brand-sub">${isAr ? 'جودة دوائية تفوق التوقعات' : 'Pharmaceutical Excellence'}</span>
          </div>
        </div>

        <ul class="nav-links">
          <li><a href="#hero" class="nav-link ${State.view === 'public' ? 'active' : ''}" onclick="switchView('public')">${t('nav_home')}</a></li>
          <li><a href="#products" class="nav-link" onclick="switchView('public')">${t('nav_products')}</a></li>
          <li><a href="#manufacturing" class="nav-link" onclick="switchView('public')">${t('nav_manufacturing')}</a></li>
          <li><a href="#branches" class="nav-link" onclick="switchView('public')">${t('nav_branches')}</a></li>
          <li><a href="#rfq" class="nav-link" onclick="switchView('public')">${t('nav_rfq')}</a></li>
          <li><a href="#pv" class="nav-link" onclick="switchView('public')">${t('nav_pv')}</a></li>
          <li><a href="#about" class="nav-link" onclick="switchView('public')">${t('nav_about')}</a></li>
        </ul>

        <div class="nav-actions">
          <!-- Language Toggle Button -->
          <button class="btn btn-outline btn-sm" onclick="toggleLanguage()" title="Switch Language">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span style="font-weight: 800;">${isAr ? 'English' : 'العربية'}</span>
          </button>

          <!-- RFQ Cart Trigger -->
          <button class="btn btn-icon-only" onclick="openRFQModal()" title="${t('quote_cart_badge')}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            ${State.rfqCart.length > 0 ? `<span class="badge-counter">${State.rfqCart.length}</span>` : ''}
          </button>

          <!-- Notification Dropdown (If Logged In) -->
          ${State.user ? `
            <div style="position: relative;">
              <button class="btn btn-icon-only" onclick="toggleNotificationDropdown()" title="${t('notif_title')}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                <span id="notif-badge" class="badge-counter" style="display: ${unreadCount > 0 ? 'flex' : 'none'};">${unreadCount}</span>
              </button>
              ${renderNotificationDropdown()}
            </div>
          ` : ''}

          <!-- Auth / Portal Action Button -->
          ${State.user ? `
            <button class="btn btn-primary btn-sm" onclick="togglePortalView()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>${State.view === 'portal' ? (isAr ? 'الموقع العام' : 'Public Site') : t('btn_my_tasks')}</span>
            </button>
            <button class="btn btn-outline btn-sm" onclick="logout()" title="${t('btn_logout')}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </button>
          ` : `
            <button class="btn btn-secondary btn-sm" onclick="openModal('login-modal')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              <span>${t('btn_login')}</span>
            </button>
          `}
        </div>
      </div>
    </nav>
  `;
}

// Notification Dropdown Component
function renderNotificationDropdown() {
  const isAr = State.lang === 'ar';
  return `
    <div id="notif-dropdown" class="notification-dropdown">
      <div class="notif-header">
        <span>${t('notif_title')}</span>
        <button class="btn btn-outline btn-sm" style="font-size: 0.75rem;" onclick="markAllNotificationsRead()">${t('notif_mark_all')}</button>
      </div>
      <div class="notif-list">
        ${State.notifications.length === 0 ? `
          <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            ${t('notif_empty')}
          </div>
        ` : State.notifications.map(n => `
          <div class="notif-item ${n.is_read ? '' : 'unread'}" onclick="markNotificationRead(${n.id})">
            <div class="notif-title">${isAr ? n.title_ar : n.title_en}</div>
            <div class="notif-text">${isAr ? n.message_ar : n.message_en}</div>
            <div class="notif-time">${new Date(n.created_at).toLocaleString(isAr ? 'ar-YE' : 'en-US')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --- 9. PUBLIC VIEW RENDERING ---
function renderPublicView() {
  return `
    ${renderHeroSection()}
    ${renderProductsSection()}
    ${renderManufacturingSection()}
    ${renderB2BSection()}
    ${renderBranchesSection()}
    ${renderPVSection()}
    ${renderAboutSection()}
  `;
}

// Hero Section
function renderHeroSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="hero" class="hero-section">
      <div class="hero-backdrop-glow"></div>
      <div class="hero-backdrop-glow-2"></div>
      <div class="container hero-grid">
        <div>
          <div class="hero-badge-pill">
            <span class="hero-badge-pulse"></span>
            <span>${t('hero_badge')}</span>
          </div>
          <h1 class="hero-title">
            <span>${t('hero_title_1')}</span><br/>
            <span class="text-highlight">${t('hero_title_2')}</span>
          </h1>
          <p class="hero-description">
            ${t('hero_desc')}
          </p>
          <div class="hero-buttons">
            <a href="#products" class="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>${t('btn_explore_catalog')}</span>
            </a>
            <a href="#rfq" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>${t('btn_request_quote')}</span>
            </a>
          </div>

          <div class="hero-metrics-grid">
            <div class="hero-metric-item">
              <span class="hero-metric-value">${t('metric_years')}</span>
              <span class="hero-metric-label">${t('metric_years_sub')}</span>
            </div>
            <div class="hero-metric-item">
              <span class="hero-metric-value">${t('metric_lines')}</span>
              <span class="hero-metric-label">${t('metric_lines_sub')}</span>
            </div>
            <div class="hero-metric-item">
              <span class="hero-metric-value">${t('metric_branches')}</span>
              <span class="hero-metric-label">${t('metric_branches_sub')}</span>
            </div>
            <div class="hero-metric-item">
              <span class="hero-metric-value">${t('metric_products')}</span>
              <span class="hero-metric-label">${t('metric_products_sub')}</span>
            </div>
          </div>
        </div>

        <!-- Hero Spotlight Card Preview -->
        <div>
          <div class="hero-card-preview">
            <div class="hero-card-header">
              <div class="hero-card-title">
                <svg width="20" height="20" color="#38BDF8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>${isAr ? 'المستحضرات الأكثر طلباً في المشافي' : 'Featured Hospital Antiseptics'}</span>
              </div>
              <span class="status-badge status-active">GMP Certified</span>
            </div>
            <div class="hero-spotlight-item">
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80" alt="Femicare" class="hero-spotlight-img"/>
              <div class="hero-spotlight-info">
                <span class="hero-spotlight-tag">${isAr ? 'معقمات جراحية' : 'Surgical Antiseptic'}</span>
                <div class="hero-spotlight-name">${isAr ? 'فيميكير بوفيدون يودين 10%' : 'Femicare Povidone Iodine 10%'}</div>
                <p style="font-size: 0.85rem; color: #94A3B8;">${isAr ? 'المحلول المعتمد في غرف العمليات والعيادات النسائية والجراحية.' : 'Sterile surgical skin & mucosa preparation formulation.'}</p>
              </div>
            </div>
            <div class="hero-floating-badge">
              <svg width="24" height="24" color="#10B981" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${isAr ? 'تغطية فورية لـ 9 محافظات يمنية' : 'Direct Dispatch across 9 Branches'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Products Catalog Section
function renderProductsSection() {
  const isAr = State.lang === 'ar';
  const filteredProducts = State.products.filter(p => {
    const matchCategory = State.selectedCategory === 'all' || p.category_slug === State.selectedCategory;
    const query = State.searchQuery.toLowerCase().trim();
    const matchSearch = !query || 
      p.trade_name_ar.toLowerCase().includes(query) || 
      p.trade_name_en.toLowerCase().includes(query) || 
      (p.scientific_name && p.scientific_name.toLowerCase().includes(query)) ||
      (p.indications_ar && p.indications_ar.toLowerCase().includes(query));
    return matchCategory && matchSearch;
  });

  return `
    <section id="products" class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag">${t('catalog_tag')}</span>
          <h2 class="section-title">${t('catalog_title')}</h2>
          <p class="section-desc">${t('catalog_desc')}</p>
        </div>

        <div class="catalog-controls">
          <div class="catalog-search-row">
            <div class="search-input-wrap">
              <input type="text" id="catalog-search" class="form-control search-input" 
                placeholder="${t('search_placeholder')}" 
                value="${State.searchQuery}" 
                oninput="handleSearch(this.value)" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div style="display: flex; align-items: center; justify-content: flex-end; gap: 12px; flex-wrap: wrap;">
              <span style="font-weight: 700; color: var(--text-secondary); font-size: 0.9rem;">
                ${filteredProducts.length} ${isAr ? 'مستحضر متوفر' : 'Formulations'}
              </span>
              <button class="btn btn-outline btn-sm" onclick="openPrintableCatalog()" style="gap: 6px;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                <span>${t('btn_print_catalog')}</span>
              </button>
            </div>
          </div>

          <div class="category-pills">
            <button class="category-pill ${State.selectedCategory === 'all' ? 'active' : ''}" onclick="selectCategory('all')">
              <span>${t('filter_all')}</span>
              <span class="pill-count">${State.products.length}</span>
            </button>
            ${State.categories.map(c => `
              <button class="category-pill ${State.selectedCategory === c.slug ? 'active' : ''}" onclick="selectCategory('${c.slug}')">
                <span>${isAr ? c.name_ar : c.name_en}</span>
                <span class="pill-count">${c.products_count}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="products-grid">
          ${filteredProducts.length === 0 ? `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px; background: #fff; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
              <svg width="48" height="48" color="var(--text-muted)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <h3 style="margin-top: 16px; color: var(--primary-navy);">${isAr ? 'لم يتم العثور على مستحضرات مطابقة' : 'No products matched your criteria'}</h3>
              <p style="color: var(--text-muted); margin-top: 6px;">${isAr ? 'جرب البحث باسم تجاري آخر أو اختر تصنيفاً عاماً.' : 'Try adjusting your search terms.'}</p>
            </div>
          ` : filteredProducts.map(p => `
            <div class="product-card">
              <div class="product-card-img-wrap">
                <img src="${p.image_url || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800'}" alt="${p.trade_name_en}" class="product-card-img"/>
                ${p.is_featured ? `<span class="product-featured-badge">${isAr ? 'مستحضر رئيسي' : 'Featured'}</span>` : ''}
                <span class="product-sku-badge">${p.sku}</span>
              </div>
              <div class="product-card-body">
                <span class="product-category-name">${isAr ? p.category_name_ar : p.category_name_en}</span>
                <h3 class="product-title">${isAr ? p.trade_name_ar : p.trade_name_en}</h3>
                <div class="product-scientific">${p.scientific_name || ''}</div>
                <div class="product-specs-chips">
                  <span class="spec-chip">${isAr ? p.dosage_form_ar : p.dosage_form_en}</span>
                  <span class="spec-chip">${p.concentration || ''}</span>
                  <span class="spec-chip">${p.package_size || ''}</span>
                </div>
                <div class="product-card-footer">
                  <button class="btn btn-outline btn-sm" style="flex: 1;" onclick="openProductQuickView(${p.id})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span>${t('btn_quick_view')}</span>
                  </button>
                  <button class="btn btn-primary btn-sm" onclick="addToQuoteCart(${p.id})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    <span>${t('btn_add_to_quote')}</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Manufacturing & Quality Section
function renderManufacturingSection() {
  const isAr = State.lang === 'ar';
  const linesData = {
    1: {
      title_ar: "خط المراهم والكريمات والجل الموضعي (Line 01)",
      title_en: "Topical Ointments, Creams & Gels Automated Line",
      desc_ar: "خط تعبئة وتغليف آلي متطور مخصص لمستحضرات الأمراض الجلدية والمراهم المسكنة كـ Umco Cort-N و Umco Thrin Cream، مع نظام تحكم رقمي يضمن دقة الجرعة وتجانس التركيبة.",
      desc_en: "Dedicated automated filling and sealing line for dermatological treatments and therapeutic ointments, engineered with computerized weight verification.",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80"
    },
    2: {
      title_ar: "خط المعقمات والمطهرات الجراحية ومحاليل التطهير (Line 02)",
      title_en: "Surgical Antiseptics & Povidone Iodine Line",
      desc_ar: "طاقة إنتاجية عالية لتصنيع محاليل بوفيدون يودين 10% (Femicare) والغسول الجراحي (Umco Scrub) في بيئة معقمة ومحكمة الغلق لتفادي أي تلوث ميكروبيولوجي.",
      desc_en: "High-capacity sterile production of 10% Povidone Iodine (Femicare) and surgical scrubs under ISO 14644 cleanroom conditions.",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80"
    },
    3: {
      title_ar: "خط القطرات العينية والأذنية والشامبو الطبي (Line 03)",
      title_en: "Ophthalmic/Otic Drops & Medicated Shampoos Line",
      desc_ar: "تقنيات التعبئة المعقمة الفائقة (Aseptic Blow-Fill-Seal) للقطرات المرطبة والعلاجية، بالإضافة إلى خط تركيب الشامبو العلاجي المضاد للقشرة والفطريات.",
      desc_en: "State-of-the-art aseptic filling technology for ophthalmic lubricants and high-viscosity medicated antifungal shampoos.",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80"
    }
  };

  const activeLine = linesData[State.activeMfgTab] || linesData[1];

  return `
    <section id="manufacturing" class="section manufacturing-section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag">${t('mfg_tag')}</span>
          <h2 class="section-title">${t('mfg_title')}</h2>
          <p class="section-desc">${t('mfg_desc')}</p>
        </div>

        <div class="lines-tabs-nav">
          <button class="line-tab-btn ${State.activeMfgTab === 1 ? 'active' : ''}" onclick="switchMfgTab(1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>${t('tab_line_1')}</span>
          </button>
          <button class="line-tab-btn ${State.activeMfgTab === 2 ? 'active' : ''}" onclick="switchMfgTab(2)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>${t('tab_line_2')}</span>
          </button>
          <button class="line-tab-btn ${State.activeMfgTab === 3 ? 'active' : ''}" onclick="switchMfgTab(3)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            <span>${t('tab_line_3')}</span>
          </button>
        </div>

        <div class="line-detail-card">
          <img src="${activeLine.img}" alt="Production Line" class="line-detail-img" />
          <div class="line-detail-content">
            <span class="status-badge status-active" style="width: fit-content; margin-bottom: 12px;">ISO 9001 / GMP Standard</span>
            <h3 style="font-size: 1.7rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 14px;">
              ${isAr ? activeLine.title_ar : activeLine.title_en}
            </h3>
            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7;">
              ${isAr ? activeLine.desc_ar : activeLine.desc_en}
            </p>
            <ul class="line-features-list">
              <li class="line-feature-item">
                <span class="feature-check-icon">✓</span>
                <span>${t('feature_gmp')}</span>
              </li>
              <li class="line-feature-item">
                <span class="feature-check-icon">✓</span>
                <span>${t('feature_qc')}</span>
              </li>
              <li class="line-feature-item">
                <span class="feature-check-icon">✓</span>
                <span>${t('feature_automation')}</span>
              </li>
              <li class="line-feature-item">
                <span class="feature-check-icon">✓</span>
                <span>${t('feature_storage')}</span>
              </li>
            </ul>
            <div>
              <a href="#rfq" class="btn btn-primary">
                <span>${isAr ? 'طلب توريد من هذا الخط' : 'Order From This Line'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Branches Section
function renderBranchesSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="branches" class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag">${t('branches_tag')}</span>
          <h2 class="section-title">${t('branches_title')}</h2>
          <p class="section-desc">${t('branches_desc')}</p>
        </div>

        <div class="branches-grid">
          ${State.branches.map(b => `
            <div class="branch-card ${b.is_headquarters ? 'is-hq' : ''}">
              ${b.is_headquarters ? `<span class="branch-hq-tag">${t('branch_hq')}</span>` : ''}
              <h3 class="branch-city">${isAr ? b.city_ar : b.city_en}</h3>
              <p class="branch-address">${isAr ? b.address_ar : b.address_en}</p>
              <div class="branch-contact-list">
                <div class="branch-contact-item">
                  <span style="color: var(--text-muted);">${isAr ? 'هاتف الفرع المعتمد:' : 'Phone:'}</span>
                  <a href="tel:${b.phone_primary.replace(/\s+/g, '')}" class="branch-phone-link">${b.phone_primary}</a>
                </div>
                ${b.phone_secondary ? `
                  <div class="branch-contact-item">
                    <span style="color: var(--text-muted);">${isAr ? 'هاتف إضافي:' : 'Secondary:'}</span>
                    <a href="tel:${b.phone_secondary.replace(/\s+/g, '')}" class="branch-phone-link">${b.phone_secondary}</a>
                  </div>
                ` : ''}
                <div class="branch-contact-item">
                  <span style="color: var(--text-muted);">${isAr ? 'المسؤول:' : 'Manager:'}</span>
                  <span style="font-weight: 700; color: var(--primary-navy);">${isAr ? b.manager_name_ar : b.manager_name_en}</span>
                </div>
                <div style="margin-top: 8px;">
                  <a href="tel:${b.phone_primary.replace(/\s+/g, '')}" class="btn btn-outline btn-sm" style="width: 100%;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>${t('btn_contact_branch')}</span>
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// B2B RFQ Section
function renderB2BSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="rfq" class="section" style="background: var(--bg-card-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag">${t('b2b_tag')}</span>
          <h2 class="section-title">${t('b2b_title')}</h2>
          <p class="section-desc">${t('b2b_desc')}</p>
        </div>

        <div style="max-width: 820px; margin: 0 auto; background: #fff; padding: 40px; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-lg);">
          <form id="rfq-form" onsubmit="submitRFQ(event)">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم المنشأة الطبية / الصيدلية *' : 'Facility / Pharmacy Name *'}</label>
                <input type="text" name="company_or_pharmacy" required class="form-control" placeholder="${isAr ? 'مستشفى / صيدلية / شركة توزيع' : 'Hospital / Pharmacy'}" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم الشخص المسؤول *' : 'Contact Person *'}</label>
                <input type="text" name="contact_person" required class="form-control" placeholder="${isAr ? 'د. فلان الفلاني' : 'Dr. Name'}" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}</label>
                <input type="tel" name="phone" required class="form-control" placeholder="+967 77..." />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input type="email" name="email" class="form-control" placeholder="example@domain.com" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'المحافظة *' : 'Governorate *'}</label>
                <select name="governorate" required class="form-control">
                  <option value="صنعاء">صنعاء (Sana'a)</option>
                  <option value="عدن">عدن (Aden)</option>
                  <option value="تعز">تعز (Taiz)</option>
                  <option value="إب">إب (Ibb)</option>
                  <option value="الحديدة">الحديدة (Al-Hodeidah)</option>
                  <option value="حضرموت">حضرموت (Hadramout)</option>
                  <option value="مأرب">مأرب (Marib)</option>
                  <option value="ذمار">ذمار (Dhamar)</option>
                  <option value="صعدة">صعدة (Sa'ada)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'نوع الطلب' : 'Inquiry Type'}</label>
                <select name="inquiry_type" class="form-control">
                  <option value="Tender">${isAr ? 'مناقصة وتوريد مشافي' : 'Hospital Tender'}</option>
                  <option value="Bulk Order">${isAr ? 'طلب كميات تجارية' : 'Bulk Wholesale Order'}</option>
                  <option value="Distribution">${isAr ? 'طلب وكالة توزيع' : 'Distribution Agency'}</option>
                  <option value="Contract Manufacturing">${isAr ? 'تصنيع تعاقدي للغير' : 'Contract Manufacturing'}</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'المستحضرات المطلوبة والكميات التقديرية' : 'Requested Formulations & Quantities'}</label>
              <textarea name="notes" rows="4" class="form-control" placeholder="${isAr ? 'حدد أسماء المنتجات والكميات المطلوبة بالتفصيل...' : 'Specify products and estimated quantities...'}" required></textarea>
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <button type="submit" class="btn btn-primary btn-lg" style="min-width: 260px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${isAr ? 'إرسال طلب التسعير الرسمي' : 'Submit Quotation Request'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

// Pharmacovigilance Section
function renderPVSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="pv" class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag" style="background: #FEF2F2; color: #DC2626;">${t('pv_tag')}</span>
          <h2 class="section-title">${t('pv_title')}</h2>
          <p class="section-desc">${t('pv_desc')}</p>
        </div>

        <div style="max-width: 820px; margin: 0 auto; background: #fff; padding: 40px; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
          <form id="pv-form" onsubmit="submitPV(event)">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم المبلغ (طبيب / صيدلاني / مريض) *' : 'Reporter Name *'}</label>
                <input type="text" name="reporter_name" required class="form-control" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'صفة المبلغ *' : 'Reporter Role *'}</label>
                <select name="reporter_role" class="form-control">
                  <option value="Physician">${isAr ? 'طبيب بشري' : 'Physician'}</option>
                  <option value="Pharmacist">${isAr ? 'صيدلاني' : 'Pharmacist'}</option>
                  <option value="Nurse">${isAr ? 'كادر تمريضي' : 'Nurse'}</option>
                  <option value="Patient">${isAr ? 'مريض / مستهلك' : 'Patient'}</option>
                </select>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'رقم الهاتف للتواصل *' : 'Phone Number *'}</label>
                <input type="tel" name="phone" required class="form-control" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم المستحضر الدوائي *' : 'Product Name *'}</label>
                <input type="text" name="product_name" required class="form-control" placeholder="e.g., Femicare, Umco Cort-N" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'رقم تشغيلة الإنتاج (Batch No.)' : 'Batch Number'}</label>
                <input type="text" name="batch_number" class="form-control" placeholder="e.g., B26-049" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'درجة الخطورة' : 'Severity'}</label>
                <select name="severity" class="form-control">
                  <option value="mild">${isAr ? 'طفيفة (Mild)' : 'Mild'}</option>
                  <option value="moderate">${isAr ? 'متوسطة (Moderate)' : 'Moderate'}</option>
                  <option value="severe">${isAr ? 'شديدة (Severe)' : 'Severe'}</option>
                  <option value="critical">${isAr ? 'حرجة (Critical)' : 'Critical'}</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'وصف العرض الجانبي أو ملاحظة الجودة بالتفصيل *' : 'Adverse Event or Quality Observation *'}</label>
              <textarea name="adverse_reaction" rows="4" class="form-control" required></textarea>
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <button type="submit" class="btn btn-outline-red btn-lg" style="min-width: 240px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>${isAr ? 'إرسال بلاغ السلامة الدوائية' : 'Submit Safety Report'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

// About Section
function renderAboutSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="about" class="section" style="background: #fff; border-top: 1px solid var(--border-color);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
          <div>
            <span class="section-tag">${isAr ? 'عن شركة أمكو' : 'About UMCO'}</span>
            <h2 class="section-title">${isAr ? 'أكثر من عقدين في خدمة الأمن الدوائي الوطني' : 'Over Two Decades of National Pharma Security'}</h2>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 20px;">
              ${isAr ? 
                'تأسست شركة أمكو للصناعات الدوائية والطبية كإحدى الشركات الرائدة التابعة لمجموعة أمكو، وحققت على مدار أكثر من 20 عاماً مكانة مرموقة كأحد أهم صروح التصنيع الدوائي المؤتمت في اليمن. نركز على توطين الصناعات المعقمة ومراهم العلاج الجلدي لتلبية احتياجات المشافي والمراكز الطبية بأعلى درجات الموثوقية.' :
                'Founded as a flagship subsidiary of UMCO Medical & Commercial Group, UMCO Pharmaceuticals has established itself over 20+ years as a premier automated manufacturing platform in Yemen, dedicated to localized production of sterile antiseptics and dermatology therapeutics.'
              }
            </p>
            <div style="background: var(--bg-card-subtle); padding: 24px; border-radius: var(--radius-lg); border-right: 4px solid var(--umco-red); margin-bottom: 20px;">
              <h4 style="font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">${isAr ? 'رسالتنا المؤسسية (Mission)' : 'Our Mission'}</h4>
              <p style="font-size: 0.95rem; color: var(--text-secondary);">
                ${isAr ? 
                  'توفير مستحضرات صيدلانية ومستلزمات طبية عالية الموثوقية تُصنّع وفق أدق المعايير العالمية، للإسهام الفاعل في تعزيز الرعاية الصحية وسلامة المرضى وكفاءة الكوادر الطبية.' :
                  'To manufacture and deliver reliable, high-quality pharmaceutical and medical products that meet international standards, advancing patient care and empowering healthcare professionals.'
                }
              </p>
            </div>
            <div style="background: var(--bg-card-subtle); padding: 24px; border-radius: var(--radius-lg); border-right: 4px solid var(--accent-blue);">
              <h4 style="font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">${isAr ? 'رؤيتنا الاستراتيجية (Vision)' : 'Our Vision'}</h4>
              <p style="font-size: 0.95rem; color: var(--text-secondary);">
                ${isAr ? 
                  'الريادة الإقليمية في الصناعات الدوائية والطبية عبر الابتكار المستمر، توطين التقنيات التصنيعية المؤتمتة، وبناء شراكات استراتيجية تضمن الأمن الدوائي.' :
                  'To lead the regional pharmaceutical and medical industry through continuous innovation, automated manufacturing excellence, and strategic global partnerships.'
                }
              </p>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80" alt="UMCO Facilities" style="width: 100%; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); border: 1px solid var(--border-color);" />
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- 10. ENTERPRISE PORTAL VIEW (HR, TASKS, NOTIFICATIONS) ---
function renderPortalView() {
  if (!State.user) return '';
  const isAr = State.lang === 'ar';
  const role = State.user.role;
  const isHR = role === 'super_admin' || role === 'hr_manager';

  return `
    <div class="portal-view">
      <div class="container">
        <!-- Portal Header -->
        <div class="portal-header-bar">
          <div class="portal-user-profile">
            <div class="portal-avatar">
              ${State.user.name_ar ? State.user.name_ar.charAt(0) : 'U'}
            </div>
            <div class="portal-user-meta">
              <span class="portal-user-name">${isAr ? State.user.name_ar : State.user.name_en}</span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">${State.user.email}</span>
              <span class="portal-user-role-badge role-${role}">
                ${formatRole(role)}
              </span>
            </div>
          </div>

          <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
            ${isHR ? `
              <button class="btn btn-primary btn-sm" onclick="openModal('create-employee-modal')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                <span>${t('btn_add_employee')}</span>
              </button>
            ` : ''}
            <button class="btn btn-secondary btn-sm" onclick="openModal('create-task-modal')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              <span>${t('btn_create_task')}</span>
            </button>
          </div>
        </div>

        <!-- Portal Tabs Navigation -->
        <div class="portal-tabs-nav">
          <button class="portal-tab-item ${State.portalTab === 'tasks' ? 'active' : ''}" onclick="switchPortalTab('tasks')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            <span>${t('tab_tasks')} (${State.tasks.length})</span>
          </button>
          ${isHR ? `
            <button class="portal-tab-item ${State.portalTab === 'employees' ? 'active' : ''}" onclick="switchPortalTab('employees')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>${t('tab_employees')} (${State.employees.length})</span>
            </button>
            <button class="portal-tab-item ${State.portalTab === 'quotes' ? 'active' : ''}" onclick="switchPortalTab('quotes')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>${t('tab_rfq_review')} (${State.quotes.length})</span>
            </button>
            <button class="portal-tab-item ${State.portalTab === 'pv' ? 'active' : ''}" onclick="switchPortalTab('pv')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
              <span>${t('tab_pv_review')} (${State.pvReports.length})</span>
            </button>
          ` : ''}
        </div>

        <!-- Portal Tab Body -->
        <div>
          ${State.portalTab === 'tasks' ? renderTasksTab() : ''}
          ${State.portalTab === 'employees' ? renderEmployeesTab() : ''}
          ${State.portalTab === 'quotes' ? renderQuotesTab() : ''}
          ${State.portalTab === 'pv' ? renderPVTab() : ''}
        </div>
      </div>
    </div>
  `;
}

// Tasks Kanban Board Tab
function renderTasksTab() {
  const isAr = State.lang === 'ar';
  const statuses = [
    { key: 'todo', label: t('task_status_todo'), badgeClass: 'kanban-badge-todo' },
    { key: 'in_progress', label: t('task_status_in_progress'), badgeClass: 'kanban-badge-in_progress' },
    { key: 'in_review', label: t('task_status_in_review'), badgeClass: 'kanban-badge-in_review' },
    { key: 'completed', label: t('task_status_completed'), badgeClass: 'kanban-badge-completed' }
  ];

  return `
    <div>
      <div class="stats-cards-grid">
        <div class="stat-card">
          <div class="stat-card-icon stat-icon-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${State.tasks.length}</span>
            <span class="stat-card-label">${isAr ? 'إجمالي المهام المسجلة' : 'Total Tasks'}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-icon stat-icon-amber">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${State.tasks.filter(t => t.status === 'in_progress').length}</span>
            <span class="stat-card-label">${isAr ? 'مهام قيد التنفيذ' : 'In Progress'}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-icon stat-icon-emerald">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${State.tasks.filter(t => t.status === 'completed').length}</span>
            <span class="stat-card-label">${isAr ? 'مهام منجزة بنجاح' : 'Completed Tasks'}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-icon stat-icon-red">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${State.tasks.filter(t => t.priority === 'urgent').length}</span>
            <span class="stat-card-label">${isAr ? 'مهام ذات أولوية عاجلة' : 'Urgent Priority'}</span>
          </div>
        </div>
      </div>

      <!-- Kanban Columns -->
      <div class="kanban-board">
        ${statuses.map(st => {
          const colTasks = State.tasks.filter(t => t.status === st.key);
          return `
            <div class="kanban-column">
              <div class="kanban-column-header">
                <span>${st.label}</span>
                <span class="status-badge ${st.badgeClass}">${colTasks.length}</span>
              </div>
              <div class="kanban-cards-list">
                ${colTasks.length === 0 ? `
                  <div style="text-align: center; padding: 30px 10px; color: var(--text-muted); font-size: 0.85rem;">
                    ${isAr ? 'لا توجد مهام في هذه القائمة' : 'No tasks in this lane'}
                  </div>
                ` : colTasks.map(task => `
                  <div class="task-card" onclick="openTaskDetailModal(${task.id})">
                    <span class="task-priority-indicator priority-${task.priority}">
                      ${formatPriority(task.priority)}
                    </span>
                    <h4 class="task-card-title">${isAr ? task.title_ar : task.title_en}</h4>
                    <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 6px;">
                      <strong>${isAr ? 'المسؤول:' : 'Assignee:'}</strong> ${isAr ? task.assignee_name_ar : task.assignee_name_en}
                    </div>
                    <div class="task-progress-bar">
                      <div class="task-progress-fill" style="width: ${task.progress_percent}%;"></div>
                    </div>
                    <div class="task-card-meta">
                      <span>${task.progress_percent}% ${isAr ? 'إنجاز' : 'progress'}</span>
                      <span>📅 ${task.due_date || 'N/A'}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// HR Employee Directory Tab (كل موظف يدخله الـ HR)
function renderEmployeesTab() {
  const isAr = State.lang === 'ar';
  return `
    <div>
      <div class="table-header-toolbar" style="background: #fff; border-radius: var(--radius-lg); margin-bottom: 24px; border: 1px solid var(--border-color);">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy);">${isAr ? 'سجل كوادر وموظفي شركة أمكو الدوائية' : 'UMCO Employee Personnel Records'}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${isAr ? 'إدارة بيانات الكوادر، الأقسام، والفروع المصرحة من إدارة الموارد البشرية.' : 'Manage employee profiles, departments, and credentials.'}</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openModal('create-employee-modal')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          <span>${t('btn_add_employee')}</span>
        </button>
      </div>

      <div class="data-table-card">
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>${isAr ? 'كود الموظف' : 'Emp Code'}</th>
                <th>${isAr ? 'اسم الموظف' : 'Employee Name'}</th>
                <th>${isAr ? 'المسمى الوظيفي' : 'Job Title'}</th>
                <th>${isAr ? 'القسم / الإدارة' : 'Department'}</th>
                <th>${isAr ? 'الفرع' : 'Branch'}</th>
                <th>${isAr ? 'المهام (منجزة / كلية)' : 'Tasks (Done / Total)'}</th>
                <th>${isAr ? 'الحالة' : 'Status'}</th>
                <th>${isAr ? 'إجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              ${State.employees.map(emp => `
                <tr>
                  <td><strong style="color: var(--primary-navy);">${emp.employee_code}</strong></td>
                  <td>
                    <div style="font-weight: 700;">${isAr ? emp.name_ar : emp.name_en}</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">${emp.email}</div>
                  </td>
                  <td>${isAr ? emp.job_title_ar : emp.job_title_en}</td>
                  <td><span class="spec-chip">${isAr ? emp.department_ar : emp.department_en}</span></td>
                  <td>${isAr ? (emp.branch_name_ar || 'المقر الرئيسي') : (emp.branch_name_en || 'HQ')}</td>
                  <td>
                    <span style="font-weight: 800; color: var(--accent-emerald);">${emp.completed_tasks || 0}</span> / 
                    <span style="font-weight: 800; color: var(--primary-navy);">${emp.total_tasks || 0}</span>
                  </td>
                  <td>
                    <span class="status-badge status-${emp.status}">${emp.status}</span>
                  </td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="assignTaskToEmployee(${emp.user_id}, '${emp.name_ar}')">
                      ${isAr ? 'إسناد مهمة' : 'Assign Task'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// B2B Quotes Tab
function renderQuotesTab() {
  const isAr = State.lang === 'ar';
  return `
    <div class="data-table-card">
      <div class="table-responsive">
        <table class="styled-table">
          <thead>
            <tr>
              <th>${isAr ? 'رقم الطلب' : 'Quote Ref'}</th>
              <th>${isAr ? 'المنشأة' : 'Company'}</th>
              <th>${isAr ? 'المسؤول والهاتف' : 'Contact'}</th>
              <th>${isAr ? 'المحافظة' : 'Governorate'}</th>
              <th>${isAr ? 'نوع التوريد' : 'Type'}</th>
              <th>${isAr ? 'الملاحظات' : 'Notes'}</th>
              <th>${isAr ? 'الحالة' : 'Status'}</th>
              <th>${isAr ? 'التاريخ' : 'Date'}</th>
            </tr>
          </thead>
          <tbody>
            ${State.quotes.map(q => `
              <tr>
                <td><strong>${q.quote_number}</strong></td>
                <td><strong style="color: var(--primary-navy);">${q.company_or_pharmacy}</strong></td>
                <td>
                  <div>${q.contact_person}</div>
                  <a href="tel:${q.phone}" style="font-size: 0.8rem; color: var(--umco-red);">${q.phone}</a>
                </td>
                <td>${q.governorate}</td>
                <td><span class="spec-chip">${q.inquiry_type}</span></td>
                <td style="max-width: 240px; font-size: 0.85rem; color: var(--text-secondary);">${q.notes || ''}</td>
                <td><span class="status-badge status-active">${q.status}</span></td>
                <td style="font-size: 0.8rem; color: var(--text-muted);">${new Date(q.created_at).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// PV Reports Tab
function renderPVTab() {
  const isAr = State.lang === 'ar';
  return `
    <div class="data-table-card">
      <div class="table-responsive">
        <table class="styled-table">
          <thead>
            <tr>
              <th>${isAr ? 'الرقم المرجعي' : 'Ref Code'}</th>
              <th>${isAr ? 'المستحضر' : 'Product'}</th>
              <th>${isAr ? 'رقم التشغيلة' : 'Batch'}</th>
              <th>${isAr ? 'المبلغ' : 'Reporter'}</th>
              <th>${isAr ? 'الدرجة' : 'Severity'}</th>
              <th>${isAr ? 'تفاصيل العرض' : 'Reaction'}</th>
              <th>${isAr ? 'الحالة' : 'Status'}</th>
            </tr>
          </thead>
          <tbody>
            ${State.pvReports.map(pv => `
              <tr>
                <td><strong>${pv.report_reference}</strong></td>
                <td><strong style="color: var(--primary-navy);">${pv.product_name}</strong></td>
                <td><span class="spec-chip">${pv.batch_number || 'N/A'}</span></td>
                <td>
                  <div>${pv.reporter_name}</div>
                  <span style="font-size: 0.75rem; color: var(--text-muted);">${pv.reporter_role}</span>
                </td>
                <td>
                  <span class="status-badge" style="background: #FEE2E2; color: #DC2626;">${pv.severity}</span>
                </td>
                <td style="max-width: 260px; font-size: 0.85rem;">${pv.adverse_reaction}</td>
                <td><span class="status-badge status-active">${pv.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// --- 11. FOOTER RENDERING ---
function renderFooter() {
  const isAr = State.lang === 'ar';
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <div class="logo-badge">UM</div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 1.3rem; font-weight: 800; color: #fff;">${isAr ? 'أمكو للصناعات الدوائية' : 'UMCO PHARMACEUTICALS'}</span>
                <span style="font-size: 0.8rem; color: #F87171;">${isAr ? 'شركة أمكو للصناعات الطبية والدوائية' : 'Medical & Pharma Industries'}</span>
              </div>
            </div>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px;">
              ${isAr ? 
                'صرح صناعي دوائي يمني رائد بخبرة تفوق 20 عاماً، يضم 3 خطوط إنتاج مؤتمتة ومعتمدة وفق ممارسات التصنيع الجيد (GMP).' :
                'A pioneering Yemeni pharmaceutical enterprise with over 20 years of automated manufacturing excellence compliant with GMP.'
              }
            </p>
            <div style="font-size: 0.85rem; color: #CBD5E1;">
              <strong>${isAr ? 'البريد الرسمي الموحد:' : 'Official Email:'}</strong> info@umcopharma.com
            </div>
          </div>

          <div>
            <h4 class="footer-col-title">${isAr ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul class="footer-links-list">
              <li><a href="#hero" class="footer-link">${t('nav_home')}</a></li>
              <li><a href="#products" class="footer-link">${t('nav_products')}</a></li>
              <li><a href="#manufacturing" class="footer-link">${t('nav_manufacturing')}</a></li>
              <li><a href="#branches" class="footer-link">${t('nav_branches')}</a></li>
              <li><a href="#rfq" class="footer-link">${t('nav_rfq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">${isAr ? 'المنتجات الرئيسية' : 'Key Formulations'}</h4>
            <ul class="footer-links-list">
              <li><a href="#products" class="footer-link">Femicare Povidone Iodine</a></li>
              <li><a href="#products" class="footer-link">Umco Cort-N Ointment</a></li>
              <li><a href="#products" class="footer-link">Umco Thrin Cream 5%</a></li>
              <li><a href="#products" class="footer-link">Umco Scrub Surgical</a></li>
              <li><a href="#products" class="footer-link">Umco Burn Gel</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">${isAr ? 'الإدارة وشبكة الفروع' : 'Headquarters'}</h4>
            <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 12px;">
              ${isAr ? 'صنعاء، حدة، شارع رقم 4، مبنى رقم 64، جوار شركة كمران.' : 'Hadda St, Street 4, Bldg 64, Beside Kamaran Co, Sana\'a, Yemen.'}
            </p>
            <p style="font-size: 0.85rem; margin-bottom: 6px;">
              ${isAr ? 'هاتف الإدارة العامة:' : 'HQ Phone:'} <a href="tel:+9671414035" style="color: #fff; direction: ltr; display: inline-block;">+967 1 414035</a>
            </p>
            <p style="font-size: 0.85rem;">
              ${isAr ? 'المسؤول المخول:' : 'Authorized Rep:'} <a href="tel:+967776666676" style="color: #F87171; direction: ltr; display: inline-block;">+967 776 666 676</a>
            </p>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            © 2026 ${isAr ? 'شركة أمكو للصناعات الدوائية والطبية. كافة الحقوق محفوظة.' : 'UMCO Pharmaceuticals & Medical Industries. All rights reserved.'}
          </div>
          <div>
            <span style="color: #10B981;">●</span> GMP & ISO 9001 Certified System
          </div>
        </div>
      </div>
    </footer>
  `;
}

// --- 12. MODALS RENDERING ---
function renderModals() {
  const isAr = State.lang === 'ar';
  return `
    <!-- Login Modal -->
    <div id="login-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 440px;">
        <div class="modal-header">
          <h3 class="modal-title">${t('btn_login')}</h3>
          <button class="btn btn-icon-only" onclick="closeModal('login-modal')">✕</button>
        </div>
        <form onsubmit="handleLoginForm(event)">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">${isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
              <input type="email" name="email" required class="form-control" placeholder="user@umcopharma.com" />
            </div>
            <div class="form-group">
              <label class="form-label">${isAr ? 'كلمة المرور' : 'Password'}</label>
              <input type="password" name="password" required class="form-control" />
            </div>
            <div style="background: var(--bg-card-subtle); padding: 12px; border-radius: var(--radius-sm); font-size: 0.8rem; color: var(--text-secondary);">
              <strong>${isAr ? 'حسابات تجريبية سريعة:' : 'Demo Accounts:'}</strong><br/>
              - HR: hr@umcopharma.com | hr123<br/>
              - Admin: admin@umcopharma.com | admin123<br/>
              - Engineer: tariq.saleh@umcopharma.com | emp123
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('login-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${t('btn_login')}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- HR Add Employee Modal (كل موظف يدخله الـ HR) -->
    <div id="create-employee-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 640px;">
        <div class="modal-header">
          <h3 class="modal-title">${t('btn_add_employee')}</h3>
          <button class="btn btn-icon-only" onclick="closeModal('create-employee-modal')">✕</button>
        </div>
        <form onsubmit="submitCreateEmployee(event)">
          <div class="modal-body">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الاسم بالعربية *' : 'Name in Arabic *'}</label>
                <input type="text" name="name_ar" required class="form-control" placeholder="د. محمد العمري" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'الاسم بالإنجليزية *' : 'Name in English *'}</label>
                <input type="text" name="name_en" required class="form-control" placeholder="Dr. Mohammed Al-Omari" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'البريد الإلكتروني الوظيفي *' : 'Corporate Email *'}</label>
                <input type="email" name="email" required class="form-control" placeholder="m.omari@umcopharma.com" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'كلمة المرور الأولية *' : 'Temporary Password *'}</label>
                <input type="password" name="password" required class="form-control" value="emp123" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'المسمى الوظيفي بالعربية *' : 'Job Title (AR) *'}</label>
                <input type="text" name="job_title_ar" required class="form-control" placeholder="أخصائي تحاليل دوائية" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'القسم / الإدارة *' : 'Department *'}</label>
                <select name="department_ar" required class="form-control">
                  <option value="الإنتاج والتصنيع الدوائي">الإنتاج والتصنيع الدوائي</option>
                  <option value="ضبط وتأكيد الجودة">ضبط وتأكيد الجودة (QC/QA)</option>
                  <option value="المبيعات والتسويق الطبي">المبيعات والتسويق الطبي</option>
                  <option value="سلاسل الإمداد والمستودعات">سلاسل الإمداد والمستودعات</option>
                  <option value="الشؤون التنظيمية والتيقظ الدوائي">الشؤون التنظيمية والتيقظ الدوائي</option>
                  <option value="الصيانة والهندسة الصناعية">الصيانة والهندسة الصناعية</option>
                  <option value="الموارد البشرية">الموارد البشرية</option>
                </select>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الفرع التابع له' : 'Assigned Branch'}</label>
                <select name="branch_id" class="form-control">
                  ${State.branches.map(b => `<option value="${b.id}">${isAr ? b.city_ar : b.city_en}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'تاريخ التعيين *' : 'Hire Date *'}</label>
                <input type="date" name="hire_date" required class="form-control" value="${new Date().toISOString().split('T')[0]}" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                <input type="tel" name="phone" class="form-control" placeholder="+967 77..." />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'الرتبة والدرجة المالية' : 'Grade / Band'}</label>
                <input type="text" name="salary_grade" class="form-control" placeholder="Grade-A2" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('create-employee-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${isAr ? 'تسجيل وإصدار كود الموظف' : 'Register Employee'}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Create Task Modal -->
    <div id="create-task-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 600px;">
        <div class="modal-header">
          <h3 class="modal-title">${t('btn_create_task')}</h3>
          <button class="btn btn-icon-only" onclick="closeModal('create-task-modal')">✕</button>
        </div>
        <form onsubmit="submitCreateTask(event)">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">${isAr ? 'عنوان المهمة بالعربية *' : 'Task Title (Arabic) *'}</label>
              <input type="text" name="title_ar" required class="form-control" placeholder="معايرة خط التعبئة..." />
            </div>
            <div class="form-group">
              <label class="form-label">${isAr ? 'عنوان المهمة بالإنجليزية' : 'Task Title (English)'}</label>
              <input type="text" name="title_en" class="form-control" placeholder="Calibration of filling line..." />
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'إسناد إلى الموظف *' : 'Assign to Employee *'}</label>
                <select name="assigned_to_user_id" required class="form-control">
                  ${State.employees.map(e => `
                    <option value="${e.user_id}">${e.employee_code} - ${isAr ? e.name_ar : e.name_en} (${isAr ? e.job_title_ar : e.job_title_en})</option>
                  `).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'مستوى الأولوية' : 'Priority'}</label>
                <select name="priority" class="form-control">
                  <option value="medium">${t('priority_medium')}</option>
                  <option value="high">${t('priority_high')}</option>
                  <option value="urgent">${t('priority_urgent')}</option>
                  <option value="low">${t('priority_low')}</option>
                </select>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'تصنيف المهمة' : 'Category'}</label>
                <select name="category" class="form-control">
                  <option value="production">الإنتاج والتصنيع (Production)</option>
                  <option value="quality_assurance">تأكيد وضبط الجودة (QC/QA)</option>
                  <option value="regulatory">الشؤون التنظيمية (Regulatory)</option>
                  <option value="sales_distribution">المبيعات والتوزيع (Sales)</option>
                  <option value="maintenance">الصيانة والهندسة (Maintenance)</option>
                  <option value="hr_admin">الموارد البشرية والإدارة (HR)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'تاريخ الاستحقاق' : 'Due Date'}</label>
                <input type="date" name="due_date" class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'تفاصيل المهمة ومتطلبات التنفيذ' : 'Task Details'}</label>
              <textarea name="description_ar" rows="3" class="form-control"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('create-task-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${isAr ? 'إسناد المهمة وإشعار الموظف' : 'Assign Task'}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Task Detail Drawer / Modal -->
    <div id="task-detail-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 650px;" id="task-detail-content">
        <!-- Rendered Dynamically -->
      </div>
    </div>

    <!-- Product Quick View Modal -->
    <div id="product-quick-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 600px;" id="product-quick-content">
        <!-- Rendered Dynamically -->
      </div>
    </div>

    <!-- Printable Catalog Modal -->
    <div id="catalog-print-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 950px;" id="catalog-print-content">
        <!-- Rendered Dynamically -->
      </div>
    </div>
  `;
}

// --- 13. INTERACTIVE LOGIC & EVENT HANDLERS ---
function toggleLanguage() {
  setLanguage(State.lang === 'ar' ? 'en' : 'ar');
}

function switchView(view) {
  State.view = view;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function togglePortalView() {
  State.view = State.view === 'portal' ? 'public' : 'portal';
  if (State.view === 'portal') {
    loadPortalData();
  }
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchPortalTab(tab) {
  State.portalTab = tab;
  renderApp();
}

function switchMfgTab(tabNum) {
  State.activeMfgTab = tabNum;
  renderApp();
}

function selectCategory(catSlug) {
  State.selectedCategory = catSlug;
  renderApp();
}

function handleSearch(val) {
  State.searchQuery = val;
  renderApp();
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) {
    searchInput.focus();
    searchInput.selectionStart = searchInput.selectionEnd = searchInput.value.length;
  }
}

function toggleNotificationDropdown() {
  const dd = document.getElementById('notif-dropdown');
  if (dd) dd.classList.toggle('open');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// Form Handlers
async function handleLoginForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  await handleLogin(fd.get('email'), fd.get('password'));
}

async function submitCreateEmployee(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  data.branch_id = parseInt(data.branch_id, 10);

  const res = await API.post('/employees', data, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    closeModal('create-employee-modal');
    await loadPortalData();
    renderApp();
  } else {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'error');
  }
}

async function submitCreateTask(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  data.assigned_to_user_id = parseInt(data.assigned_to_user_id, 10);

  const res = await API.post('/tasks', data, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    closeModal('create-task-modal');
    await loadPortalData();
    renderApp();
  } else {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'error');
  }
}

async function submitRFQ(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  data.items = State.rfqCart;

  const res = await API.post('/quotes', data);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    e.target.reset();
    State.rfqCart = [];
    renderApp();
  } else {
    showToast('Failed to submit quote request', 'error');
  }
}

async function submitPV(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const res = await API.post('/pv', data);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    e.target.reset();
  } else {
    showToast('Failed to submit safety report', 'error');
  }
}

// Notifications Actions
async function markNotificationRead(id) {
  await API.patch(`/notifications/${id}/read`, {}, true);
  const notif = State.notifications.find(n => n.id === id);
  if (notif) notif.is_read = 1;
  const unread = State.notifications.filter(n => !n.is_read).length;
  updateNotificationBadge(unread);
  renderApp();
}

async function markAllNotificationsRead() {
  await API.post('/notifications/read-all', {}, true);
  State.notifications.forEach(n => n.is_read = 1);
  updateNotificationBadge(0);
  renderApp();
}

// Task Details Modal
async function openTaskDetailModal(taskId) {
  const res = await API.get(`/tasks/${taskId}`, true);
  if (!res.success) return;
  const task = res.task;
  const comments = res.comments || [];
  const isAr = State.lang === 'ar';

  const container = document.getElementById('task-detail-content');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="task-priority-indicator priority-${task.priority}">${formatPriority(task.priority)}</span>
        <h3 class="modal-title" style="margin-top: 6px;">${isAr ? task.title_ar : task.title_en}</h3>
      </div>
      <button class="btn btn-icon-only" onclick="closeModal('task-detail-modal')">✕</button>
    </div>
    <div class="modal-body">
      <div style="background: var(--bg-card-subtle); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px;">
        <div style="font-size: 0.9rem; margin-bottom: 6px;"><strong>${isAr ? 'المسؤول المكلف:' : 'Assignee:'}</strong> ${isAr ? task.assignee_name_ar : task.assignee_name_en} (${task.assignee_code})</div>
        <div style="font-size: 0.9rem; margin-bottom: 6px;"><strong>${isAr ? 'تاريخ الاستحقاق:' : 'Due Date:'}</strong> ${task.due_date || 'N/A'}</div>
        <div style="font-size: 0.9rem;"><strong>${isAr ? 'الوصف:' : 'Details:'}</strong> ${isAr ? (task.description_ar || 'لا يوجد') : (task.description_en || 'None')}</div>
      </div>

      <div class="form-group">
        <label class="form-label">${isAr ? 'تحديث حالة المهمة' : 'Update Status'}</label>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-sm ${task.status === 'todo' ? 'btn-primary' : 'btn-outline'}" onclick="updateTaskStatusQuick(${task.id}, 'todo')">${t('task_status_todo')}</button>
          <button class="btn btn-sm ${task.status === 'in_progress' ? 'btn-primary' : 'btn-outline'}" onclick="updateTaskStatusQuick(${task.id}, 'in_progress')">${t('task_status_in_progress')}</button>
          <button class="btn btn-sm ${task.status === 'in_review' ? 'btn-primary' : 'btn-outline'}" onclick="updateTaskStatusQuick(${task.id}, 'in_review')">${t('task_status_in_review')}</button>
          <button class="btn btn-sm ${task.status === 'completed' ? 'btn-primary' : 'btn-outline'}" onclick="updateTaskStatusQuick(${task.id}, 'completed')">${t('task_status_completed')}</button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">${isAr ? 'نسبة الإنجاز:' : 'Progress:'} ${task.progress_percent}%</label>
        <input type="range" min="0" max="100" value="${task.progress_percent}" style="width: 100%;" onchange="updateTaskProgressQuick(${task.id}, this.value)" />
      </div>

      <div style="margin-top: 24px;">
        <h4 style="font-size: 1rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px;">${isAr ? 'التعليقات وسجل المتابعة' : 'Task Activity & Comments'}</h4>
        <div style="max-height: 180px; overflow-y: auto; margin-bottom: 16px;">
          ${comments.map(c => `
            <div style="background: #F8FAFC; border: 1px solid var(--border-light); padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 4px;">
                <strong>${isAr ? c.user_name_ar : c.user_name_en}</strong>
                <span>${new Date(c.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div style="font-size: 0.85rem; color: var(--text-primary);">${c.comment}</div>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; gap: 8px;">
          <input type="text" id="task-comment-input" class="form-control" placeholder="${isAr ? 'أضف تعليقاً أو استفساراً...' : 'Add comment...'}" />
          <button class="btn btn-secondary btn-sm" onclick="sendTaskComment(${task.id})">${isAr ? 'إرسال' : 'Send'}</button>
        </div>
      </div>
    </div>
  `;

  openModal('task-detail-modal');
}

async function updateTaskStatusQuick(taskId, status) {
  const res = await API.patch(`/tasks/${taskId}`, { status }, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? 'تم تحديث حالة المهمة' : 'Status updated', 'success');
    closeModal('task-detail-modal');
    await loadPortalData();
    renderApp();
  }
}

async function updateTaskProgressQuick(taskId, progress) {
  const res = await API.patch(`/tasks/${taskId}`, { progress_percent: parseInt(progress, 10) }, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? 'تم تحديث نسبة الإنجاز' : 'Progress updated', 'success');
    await loadPortalData();
    renderApp();
  }
}

async function sendTaskComment(taskId) {
  const input = document.getElementById('task-comment-input');
  if (!input || !input.value.trim()) return;
  const res = await API.post(`/tasks/${taskId}/comments`, { comment: input.value.trim() }, true);
  if (res.success) {
    input.value = '';
    openTaskDetailModal(taskId); // Refresh modal
  }
}

// Product Quick View Modal
function openProductQuickView(prodId) {
  const p = State.products.find(item => item.id === prodId);
  if (!p) return;
  const isAr = State.lang === 'ar';

  const container = document.getElementById('product-quick-content');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="spec-chip">${isAr ? p.category_name_ar : p.category_name_en}</span>
        <h3 class="modal-title" style="margin-top: 6px;">${isAr ? p.trade_name_ar : p.trade_name_en}</h3>
      </div>
      <button class="btn btn-icon-only" onclick="closeModal('product-quick-modal')">✕</button>
    </div>
    <div class="modal-body">
      <img src="${p.image_url}" alt="${p.trade_name_en}" style="width: 100%; height: 220px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 16px;" />
      
      <div style="background: var(--bg-card-subtle); padding: 16px; border-radius: var(--radius-md); margin-bottom: 16px;">
        <div style="margin-bottom: 8px;"><strong>${t('spec_active_ing')}</strong> ${p.scientific_name || 'N/A'}</div>
        <div style="margin-bottom: 8px;"><strong>${t('spec_dosage')}</strong> ${isAr ? p.dosage_form_ar : p.dosage_form_en} (${p.concentration || ''})</div>
        <div><strong>${t('spec_size')}</strong> ${p.package_size || ''}</div>
      </div>

      <div style="margin-bottom: 14px;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 4px;">${isAr ? 'دواعي الاستعمال:' : 'Indications:'}</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${isAr ? p.indications_ar : p.indications_en}</p>
      </div>

      <div>
        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 4px;">${isAr ? 'ظروف التخزين والحفظ:' : 'Storage:'}</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${isAr ? (p.storage_conditions_ar || 'يحفظ تحت 25° مئوية.') : (p.storage_conditions_en || 'Store below 25°C.')}</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" onclick="addToQuoteCart(${p.id}); closeModal('product-quick-modal');">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span>${t('btn_add_to_quote')}</span>
      </button>
    </div>
  `;

  openModal('product-quick-modal');
}

// Printable Official Catalog Monograph Sheet
function openPrintableCatalog() {
  const isAr = State.lang === 'ar';
  const container = document.getElementById('catalog-print-content');
  if (!container) return;

  const nowFormatted = new Date().toLocaleDateString(isAr ? 'ar-YE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  container.innerHTML = `
    <div class="modal-header no-print">
      <div style="display: flex; align-items: center; gap: 10px;">
        <svg width="22" height="22" color="var(--primary-crimson)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <h3 class="modal-title">${isAr ? 'الكتالوج الدوائي المعتمد - شركة أمكو للصناعات الدوائية' : 'UMCO Pharmaceuticals - Official Product Monograph Catalog'}</h3>
      </div>
      <button class="btn btn-icon-only" onclick="closeModal('catalog-print-modal')">✕</button>
    </div>

    <div class="modal-body printable-catalog-sheet">
      <div class="catalog-print-header">
        <div class="catalog-print-logo-area">
          <div class="logo-badge" style="width: 44px; height: 44px; font-size: 1.2rem;">UM</div>
          <div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #0A1E3F;">${isAr ? 'شركة أمكو للصناعات الدوائية والطبية' : 'UMCO Pharmaceuticals & Medical Industries Co.'}</div>
            <div style="font-size: 0.8rem; color: #C8102E; font-weight: 700;">${isAr ? 'المقر الرئيسي: صنعاء، شارع حدة، مبنى 64 (+967 1 414035)' : 'HQ: Hadda St, Bldg 64, Sana\'a, Yemen (+967 1 414035)'}</div>
          </div>
        </div>
        <div class="catalog-print-meta">
          <div><strong>${isAr ? 'تاريخ التحديث:' : 'Date:'}</strong> ${nowFormatted}</div>
          <div><strong>${isAr ? 'المعيار الصناعي:' : 'Standard:'}</strong> cGMP / ISO 9001:2015</div>
          <div><strong>${isAr ? 'البريد الرسمي:' : 'Email:'}</strong> info@umcopharma.com</div>
        </div>
      </div>

      <div style="margin-bottom: 12px; font-size: 0.9rem; color: #334155;">
        ${isAr ? 
          'قائمة المستحضرات الصيدلانية والمعقمات الطبية المسجلة والمرخصة والمطابقة للدساتير الدوائية العالمية (USP / BP).' :
          'Official schedule of licensed pharmaceutical formulations, surgical antiseptics and clinical topical preparations.'
        }
      </div>

      <div style="overflow-x: auto;">
        <table class="catalog-print-table">
          <thead>
            <tr>
              <th style="width: 12%;">${isAr ? 'كود المستحضر' : 'SKU'}</th>
              <th style="width: 25%;">${isAr ? 'الاسم التجاري' : 'Trade Name'}</th>
              <th style="width: 25%;">${isAr ? 'المادة الفعالة والتركيز' : 'Active Ingredient & Strength'}</th>
              <th style="width: 18%;">${isAr ? 'الشكل والعبوة' : 'Dosage & Size'}</th>
              <th style="width: 20%;">${isAr ? 'القسم العلاجي' : 'Category'}</th>
            </tr>
          </thead>
          <tbody>
            ${State.products.map(p => `
              <tr>
                <td style="font-weight: 700; color: #0A1E3F;">${p.sku || '-'}</td>
                <td>
                  <strong style="color: #C8102E;">${isAr ? p.trade_name_ar : p.trade_name_en}</strong>
                  <div style="font-size: 0.78rem; color: #64748b;">${isAr ? p.trade_name_en : p.trade_name_ar}</div>
                </td>
                <td>
                  <strong>${p.scientific_name || '-'}</strong>
                  ${p.concentration ? `<div style="font-size: 0.8rem; color: #475569;">${p.concentration}</div>` : ''}
                </td>
                <td>
                  <span>${isAr ? p.dosage_form_ar : p.dosage_form_en}</span>
                  ${p.package_size ? `<div style="font-size: 0.78rem; color: #64748b;">(${p.package_size})</div>` : ''}
                </td>
                <td>${isAr ? p.category_name_ar : p.category_name_en}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="catalog-print-footer">
        <div>
          <strong>${isAr ? 'المسؤول المخول للشراكات والتوريد:' : 'Authorized Commercial Representative:'}</strong> 
          د. عبدالله إسحاق (+967 776 666 676)
        </div>
        <div>
          ${isAr ? 'وثيقة رسمية صادرة آلياً عن منصة أمكو للعمليات الدوائية' : 'Official Document Generated via UMCO Pharma Platform'}
        </div>
      </div>
    </div>

    <div class="modal-footer no-print">
      <button type="button" class="btn btn-outline" onclick="closeModal('catalog-print-modal')">${isAr ? 'إغلاق' : 'Close'}</button>
      <button type="button" class="btn btn-primary" onclick="window.print()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        <span>${isAr ? 'طباعة المستند / حفظ كـ PDF' : 'Print / Save as PDF'}</span>
      </button>
    </div>
  `;

  openModal('catalog-print-modal');
}

// RFQ Cart Helpers
function addToQuoteCart(prodId) {
  const p = State.products.find(item => item.id === prodId);
  if (!p) return;
  const existing = State.rfqCart.find(i => i.product_id === prodId);
  if (existing) {
    existing.quantity += 1;
  } else {
    State.rfqCart.push({
      product_id: p.id,
      name: State.lang === 'ar' ? p.trade_name_ar : p.trade_name_en,
      quantity: 1
    });
  }
  showToast(State.lang === 'ar' ? `تمت إضافة (${p.trade_name_ar}) لسلة التسعير` : `Added to quote cart`, 'success');
  renderApp();
}

function openRFQModal() {
  const rfqSection = document.getElementById('rfq');
  if (rfqSection) {
    rfqSection.scrollIntoView({ behavior: 'smooth' });
    const notesField = document.querySelector('#rfq-form textarea[name="notes"]');
    if (notesField && State.rfqCart.length > 0) {
      const summary = State.rfqCart.map(i => `- ${i.name} (${i.quantity})`).join('\n');
      notesField.value = `المنتجات المطلوبة من السلة:\n${summary}`;
    }
  }
}

// Helpers
function formatRole(role) {
  const isAr = State.lang === 'ar';
  const roles = {
    super_admin: isAr ? 'مشرف النظام العام' : 'Super Admin',
    hr_manager: isAr ? 'مدير الموارد البشرية' : 'HR Manager',
    branch_manager: isAr ? 'مدير فرع' : 'Branch Manager',
    employee: isAr ? 'موظف اختصاصي' : 'Specialist Employee',
    medical_rep: isAr ? 'مندوب دعاية طبية' : 'Medical Representative'
  };
  return roles[role] || role;
}

function formatPriority(p) {
  const isAr = State.lang === 'ar';
  const map = {
    urgent: isAr ? 'عاجلة جداً' : 'Urgent',
    high: isAr ? 'أولوية عالية' : 'High',
    medium: isAr ? 'متوسطة' : 'Medium',
    low: isAr ? 'عادية' : 'Low'
  };
  return map[p] || p;
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function setupEventListeners() {
  // Global click to close notification dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dd = document.getElementById('notif-dropdown');
    if (dd && dd.classList.contains('open') && !e.target.closest('#notif-dropdown') && !e.target.closest('button[onclick*="toggleNotificationDropdown"]')) {
      dd.classList.remove('open');
    }
  });
}

function attachViewEvents() {
  // Empty placeholder for any post-render bindings
}
