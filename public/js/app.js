/**
 * UMCO PHARMACEUTICALS - CLIENT APPLICATION LOGIC
 * High-performance, reactive SPA with full bilingual engine (AR/EN),
 * Public Catalog, B2B RFQ, PV Hub, HR Management, Employee Tasks & Notifications.
 */

// --- 1. Bilingual Translation Dictionary ---
const I18N = {
  ar: {
    // Header & Brand
    brand_name: "يمكو للصناعات الدوائية",
    brand_sub: "شركة يمكو للصناعات الطبية والدوائية",
    nav_home: "الرئيسية",
    nav_campaigns: "الحملات والأخبار",
    nav_products: "المنتجات",
    nav_clinical: "الدليل الدوائي والجرعات",
    nav_manufacturing: "التصنيع والجودة",
    nav_branches: "شبكة الفروع",
    nav_rfq: "طلب عرض سعر",
    nav_pv: "التيقظ الدوائي",
    nav_about: "من نحن",
    nav_portal: "بوابة الموظفين والعمليات",
    btn_login: "تسجيل الدخول",
    btn_logout: "تسجيل الخروج",
    btn_my_tasks: "مهامي والعمليات",
    btn_ask_pharmacist: "اسأل الصيدلي / الدعم الطبي",

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

    // Announcements Section
    campaigns_tag: "الإعلام الطبي والحملات الدوائية",
    campaigns_title: "أحدث الأخبار والحملات التوعوية والتدشينات الدوائية",
    campaigns_desc: "مبادرات مستمرة من فريق التسويق والشؤون الطبية لتعزيز ثقافة التعقيم ودعم المنظومة الصحية الوطنية.",

    // Catalog Section
    catalog_tag: "الكتالوج الطبي المتكامل",
    catalog_title: "المستحضرات الدوائية والمستلزمات الطبية",
    catalog_desc: "استعرض كافة مستحضرات شركة يمكو مع التركيبات العلمية ودواعي الاستعمال الموثقة",
    search_placeholder: "ابحث بالاسم التجاري، المادة الفعالة، أو الاستخدام الطبي...",
    filter_all: "كافة المنتجات",
    btn_quick_view: "تفاصيل المستحضر",
    btn_add_to_quote: "إضافة لعرض السعر",
    quote_cart_badge: "سلة التسعير",
    spec_active_ing: "المادة الفعالة:",
    spec_dosage: "الشكل الصيدلاني:",
    spec_size: "العبوة:",
    btn_print_catalog: "طباعة / تصدير الكتالوج المعتمد (PDF)",

    // Clinical Guide Section
    clinical_tag: "مرجع الأطباء والصيادلة",
    clinical_title: "الدليل الدوائي السريع ومساعد الجرعات السريرية",
    clinical_desc: "استرشاد سريع بالتركيزات ودواعي الاستعمال المعتمدة وفق مراجع الفارماكوبيا العالمية.",

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
    branches_title: "شبكة فروع يمكو المعتمدة في الجمهورية اليمنية",
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

    // Portal & HR / Tasks / Marketing
    portal_title: "بوابة العمليات وإدارة الموارد والمهام",
    tab_tasks: "لوحة مهام الموظفين (Tasks)",
    tab_branding: "إدارة الهوية والمظهر والروابط",
    tab_branches_mgmt: "إدارة شبكة الفروع",
    tab_employees: "سجل الموظفين وإدارة HR",
    tab_inquiries: "استفسارات العملاء والأطباء",
    tab_campaigns: "إدارة الحملات والإعلانات",
    tab_products_mgmt: "إدارة ونشر الأدوية",
    tab_rfq_review: "طلبات عروض الأسعار",
    tab_pv_review: "بلاغات التيقظ الدوائي",
    btn_add_branch: "إضافة فرع جديد",
    btn_save_settings: "حفظ وتطبيق الهوية فوراً",
    btn_reset_settings: "استعادة الضبط الافتراضي",
    btn_add_employee: "إضافة موظف جديد (HR)",
    btn_create_task: "إنشاء مهمة جديدة",
    btn_add_announcement: "نشر إعلان / حملة جديدة",
    btn_add_product: "إضافة دواء / مستحضر جديد",
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
    brand_name: "YUMCO Pharmaceuticals",
    brand_sub: "YUMCO Medical & Pharma Industries Co.",
    nav_home: "Home",
    nav_campaigns: "Campaigns & News",
    nav_products: "Products",
    nav_clinical: "Clinical Guide",
    nav_manufacturing: "Manufacturing & QA",
    nav_branches: "Branches Network",
    nav_rfq: "Request a Quote",
    nav_pv: "Pharmacovigilance",
    nav_about: "About Us",
    nav_portal: "Operations Portal",
    btn_login: "Login",
    btn_logout: "Logout",
    btn_my_tasks: "My Tasks & Ops",
    btn_ask_pharmacist: "Ask Pharmacist / Inquiries",

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

    // Announcements Section
    campaigns_tag: "Medical Communications & Announcements",
    campaigns_title: "Latest Healthcare Campaigns, Product Launches & Bulletins",
    campaigns_desc: "Continuous clinical initiatives by YUMCO marketing and medical affairs to empower patient wellness.",

    // Catalog Section
    catalog_tag: "Comprehensive Medical Catalog",
    catalog_title: "Pharmaceuticals & Medical Appliances",
    catalog_desc: "Browse certified YUMCO formulations with validated active ingredients and clinical monographs.",
    search_placeholder: "Search by trade name, active ingredient, or indication...",
    filter_all: "All Products",
    btn_quick_view: "Product Specs",
    btn_add_to_quote: "Add to RFQ",
    quote_cart_badge: "Quote Cart",
    spec_active_ing: "Active Ingredient:",
    spec_dosage: "Dosage Form:",
    spec_size: "Packaging:",
    btn_print_catalog: "Print / Export Official Catalog (PDF)",

    // Clinical Guide Section
    clinical_tag: "Clinical Reference Guide",
    clinical_title: "Dosage Reference & Indications Index",
    clinical_desc: "Quick clinical reference for physicians and pharmacists based on BP and USP standards.",

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
    branches_title: "Official YUMCO Branches Across Yemen",
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

    // Portal & HR / Tasks / Marketing
    portal_title: "Enterprise Operations & Employee Task System",
    tab_tasks: "Employee Tasks & Kanban",
    tab_branding: "Theme & Visual Identity",
    tab_branches_mgmt: "Branches Management",
    tab_employees: "HR Personnel Directory",
    tab_inquiries: "Doctor & Client Inquiries",
    tab_campaigns: "Marketing & Campaigns",
    tab_products_mgmt: "Formulations Management",
    tab_rfq_review: "RFQ Quotations",
    tab_pv_review: "Drug Safety Reports",
    btn_add_branch: "Add New Branch",
    btn_save_settings: "Save & Apply Identity",
    btn_reset_settings: "Reset Defaults",
    btn_add_employee: "Add New Employee (HR)",
    btn_create_task: "Assign New Task",
    btn_add_announcement: "Publish New Campaign",
    btn_add_product: "Add New Formulation",
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

// --- 2. Global State & Language Auto-Detection ---
function detectInitialLanguage() {
  const saved = localStorage.getItem('umco_lang');
  if (saved === 'ar' || saved === 'en') return saved;
  // Detect browser/regional language
  const browserLang = (navigator.languages && navigator.languages.length > 0)
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage || 'ar');
  return browserLang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

const State = {
  lang: detectInitialLanguage(),
  token: localStorage.getItem('umco_token') || null,
  user: null,
  view: 'public', // 'public' or 'portal'
  portalTab: 'tasks', // 'tasks', 'employees', 'quotes', 'pv', 'inquiries', 'campaigns', 'products_mgmt'
  
  products: [],
  categories: [],
  branches: [],
  tasks: [],
  employees: [],
  notifications: [],
  quotes: [],
  pvReports: [],
  announcements: [],
  inquiries: [],
  settings: {},
  branchesMap: null,
  branchMarkers: {},
  
  selectedCategory: 'all',
  selectedClinicalCategory: 'all',
  searchQuery: '',
  rfqCart: [],
  activeMfgTab: 1,
  inquiryWidgetOpen: false
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

  async put(endpoint, data = {}, auth = false) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth && State.token) headers['Authorization'] = `Bearer ${State.token}`;
    const res = await fetch(`/api${endpoint}`, {
      method: 'PUT',
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
  },

  async delete(endpoint, auth = false) {
    const headers = { 'Content-Type': 'application/json' };
    if (auth && State.token) headers['Authorization'] = `Bearer ${State.token}`;
    const res = await fetch(`/api${endpoint}`, {
      method: 'DELETE',
      headers
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

  // Load settings & baseline data
  await loadSettingsData();
  await loadCatalogData();
  await loadAnnouncementsData();
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
async function loadSettingsData() {
  try {
    const res = await API.get('/settings');
    if (res.success && res.settings) {
      State.settings = res.settings;
      applySiteSettings(res.settings);
    }
  } catch (err) {
    console.error('Error loading settings:', err);
  }
}

function applySiteSettings(settings) {
  if (!settings || typeof settings !== 'object') return;
  const root = document.documentElement;

  if (settings.primary_color) {
    root.style.setProperty('--umco-red', settings.primary_color);
    root.style.setProperty('--primary-color', settings.primary_color);
  }
  if (settings.primary_hover) {
    root.style.setProperty('--umco-red-hover', settings.primary_hover);
  }
  if (settings.accent_color) {
    root.style.setProperty('--accent-teal', settings.accent_color);
    root.style.setProperty('--accent-color', settings.accent_color);
  }
  if (settings.font_size_base) {
    root.style.setProperty('--base-font-size', `${settings.font_size_base}px`);
  }
  if (settings.heading_scale) {
    root.style.setProperty('--heading-scale', settings.heading_scale);
  }
  if (settings.custom_font_url) {
    let fontEl = document.getElementById('custom-dynamic-font');
    if (!fontEl) {
      fontEl = document.createElement('link');
      fontEl.id = 'custom-dynamic-font';
      fontEl.rel = 'stylesheet';
      document.head.appendChild(fontEl);
    }
    fontEl.href = settings.custom_font_url;
  }
  if (settings.font_family_ar) {
    root.style.setProperty('--font-ar', `'${settings.font_family_ar}', sans-serif`);
  }
  if (settings.font_family_en) {
    root.style.setProperty('--font-en', `'${settings.font_family_en}', sans-serif`);
  }
}

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

async function loadAnnouncementsData() {
  try {
    const res = await API.get('/announcements');
    if (res.success) State.announcements = res.announcements;
  } catch (err) {
    console.error('Error loading announcements:', err);
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

    const role = State.user.role;
    const isAdminOrIT = role === 'super_admin' || role === 'it_admin';

    if (isAdminOrIT || role === 'hr_manager') {
      promises.push(API.get('/employees', true));
      promises.push(API.get('/quotes', true));
      promises.push(API.get('/pv', true));
    }

    if (isAdminOrIT || role === 'marketing') {
      promises.push(API.get('/inquiries', true));
      promises.push(API.get('/announcements', true));
      if (role === 'marketing') {
        promises.push(API.get('/quotes', true));
      }
    }

    if (isAdminOrIT) {
      promises.push(API.get('/branches?all=true', true));
    }

    const results = await Promise.all(promises);
    if (results[0] && results[0].success) State.tasks = results[0].tasks;
    if (results[1] && results[1].success) State.notifications = results[1].notifications;

    let idx = 2;
    if (isAdminOrIT || role === 'hr_manager') {
      if (results[idx] && results[idx].success) State.employees = results[idx].employees;
      idx++;
      if (results[idx] && results[idx].success) State.quotes = results[idx].quotes;
      idx++;
      if (results[idx] && results[idx].success) State.pvReports = results[idx].reports;
      idx++;
    }

    if (isAdminOrIT || role === 'marketing') {
      if (results[idx] && results[idx].success) State.inquiries = results[idx].inquiries;
      idx++;
      if (results[idx] && results[idx].success) State.announcements = results[idx].announcements;
      idx++;
      if (role === 'marketing') {
        if (results[idx] && results[idx].success) State.quotes = results[idx].quotes;
        idx++;
      }
    }

    if (isAdminOrIT) {
      if (results[idx] && results[idx].success) State.branches = results[idx].branches;
      idx++;
    }
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

  if (State.view === 'public') {
    setTimeout(() => {
      initBranchesMap();
      if (typeof initHeroSlider === 'function') {
        initHeroSlider();
      }
    }, 100);
  }
}

// Top Notice Bar (Integrated directly in two-tier header)
function renderTopNoticeBar() {
  return '';
}

// Master Two-Tier Navigation Header (Matching screenshot layout & structure)
function renderNavbar() {
  const isAr = State.lang === 'ar';
  const unreadCount = State.notifications.filter(n => !n.is_read).length;
  const s = State.settings || {};

  const brandName = isAr ? (s.company_name_ar || 'يمكو للصناعات الدوائية') : (s.company_name_en || 'UMCO Pharmaceuticals');
  const brandSub = isAr ? (s.company_sub_ar || 'الصناعات الدوائية والطبية') : (s.company_sub_en || 'Pharmaceutical Industries');
  const logoImg = s.logo_image_url || '/wp-content/uploads/2024/11/logo-new3-jpg.webp';

  return `
    <header class="umco-header">
      <div class="umco-header-wrapper">
        <!-- Left Solid Crimson Brand Block -->
        <a href="#hero" class="header-brand-block" onclick="switchView('public'); window.scrollTo({top:0, behavior:'smooth'});" title="${brandName}">
          <img src="${logoImg}" alt="${brandName}" class="header-brand-logo" />
          <span class="header-brand-sub">${brandSub}</span>
        </a>

        <!-- Right Main Column: Top Bar + Nav Bar -->
        <div class="header-main-content">
          <!-- Top Row: Contact Details & GET A QUOTE Button -->
          <div class="header-top-row">
            <div class="header-top-info">
              <span>Haddah, Next to Kamran Co., Sana'a, Yemen</span>
              <span class="top-info-sep">|</span>
              <a href="tel:+96701414035" class="top-info-link">+967 01 414035</a>
              <span class="top-info-sep">|</span>
              <a href="mailto:info@umcopharma.com" class="top-info-link">info@umcopharma.com</a>
            </div>
            <button class="header-quote-btn" onclick="openRFQModal()">
              ${isAr ? 'طلب عرض أسعار' : 'GET A QUOTE'}
            </button>
          </div>

          <!-- Bottom Nav Row (Deep Navy #0A192F) -->
          <nav class="header-nav-row">
            <ul class="header-nav-list">
              <!-- HOME (Solid Red Active Tab) -->
              <li class="nav-item">
                <a href="#hero" class="nav-link active-home-tab" onclick="switchView('public'); window.scrollTo({top:0, behavior:'smooth'});">
                  ${isAr ? 'الرئيسية' : 'HOME'}
                </a>
              </li>

              <!-- ABOUT Dropdown -->
              <li class="nav-item has-dropdown">
                <a href="#about" class="nav-link" onclick="event.preventDefault(); scrollToSection('about')">
                  <span>${isAr ? 'عن الشركة' : 'ABOUT'}</span>
                  <svg class="dropdown-caret" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </a>
                <div class="header-dropdown-menu">
                  <a href="#about-intro" class="dropdown-item" onclick="scrollToSection('about-intro')">
                    <span class="dropdown-icon">🏢</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'مقدمة عن الشركة' : 'Introduction'}</strong>
                      <small>${isAr ? 'تاريخ يمتد لأكثر من 20 عاماً' : '20+ years market history'}</small>
                    </div>
                  </a>
                  <a href="#vision-mission" class="dropdown-item" onclick="scrollToSection('vision-mission')">
                    <span class="dropdown-icon">🎯</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'الرؤية والرسالة' : 'Vision & Mission'}</strong>
                      <small>${isAr ? 'قيم التميز والجودة الدوائية' : 'Excellence in healthcare'}</small>
                    </div>
                  </a>
                  <a href="#facilities" class="dropdown-item" onclick="scrollToSection('facilities')">
                    <span class="dropdown-icon">🏭</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'منشآتنا ومصانعنا' : 'Our Facilities'}</strong>
                      <small>${isAr ? '3 خطوط إنتاج ومختبر متقدم' : '3 auto lines & advanced lab'}</small>
                    </div>
                  </a>
                  <a href="#plan" class="dropdown-item" onclick="scrollToSection('plan')">
                    <span class="dropdown-icon">🚀</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'خطتنا وتوسعاتنا' : 'Our Plan'}</strong>
                      <small>${isAr ? 'المصنع الجديد للشراب والأقراص' : 'Syrups & tablets factory'}</small>
                    </div>
                  </a>
                  <a href="#partners" class="dropdown-item" onclick="scrollToSection('partners')">
                    <span class="dropdown-icon">🤝</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'شراكاتنا الدولية' : 'Partnerships'}</strong>
                      <small>${isAr ? 'وكالات عالمية ومحلية معتمدة' : 'Global & local alliances'}</small>
                    </div>
                  </a>
                  <a href="#activities" class="dropdown-item" onclick="scrollToSection('activities')">
                    <span class="dropdown-icon">📊</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'أنشطتنا التجارية' : 'Business Activities'}</strong>
                      <small>${isAr ? 'توريد الأدوية والمستلزمات الطبية' : 'Medicines & medical supplies'}</small>
                    </div>
                  </a>
                  <a href="#why-choose-us" class="dropdown-item" onclick="scrollToSection('why-choose-us')">
                    <span class="dropdown-icon">⭐</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'لماذا تختار يمكو' : 'Why Choose Us'}</strong>
                      <small>${isAr ? 'التزامات المعايير الستة الصارمة' : 'Our 6 core commitments'}</small>
                    </div>
                  </a>
                  <a href="#certificates" class="dropdown-item" onclick="scrollToSection('certificates')">
                    <span class="dropdown-icon">📜</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'شهاداتنا وتراخيصنا' : 'Our Certificates'}</strong>
                      <small>${isAr ? 'الهيئة العليا ووزارة الصحة' : 'MoH & Supreme Drug Board'}</small>
                    </div>
                  </a>
                  <a href="#leadership" class="dropdown-item" onclick="scrollToSection('leadership')">
                    <span class="dropdown-icon">👥</span>
                    <div class="dropdown-text">
                      <strong>${isAr ? 'فريق القيادة' : 'Leadership Team'}</strong>
                      <small>${isAr ? 'قيادة تنفيذية متخصصة ومتميزة' : 'Executive Management'}</small>
                    </div>
                  </a>
                </div>
              </li>

              <!-- PRODUCTS Dropdown -->
              <li class="nav-item has-dropdown">
                <a href="#products" class="nav-link" onclick="event.preventDefault(); scrollToSection('products')">
                  <span>${isAr ? 'المنتجات' : 'PRODUCTS'}</span>
                  <svg class="dropdown-caret" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </a>
                <div class="header-dropdown-menu dropdown-wide">
                  <div class="dropdown-cols">
                    <div class="dropdown-col">
                      <span class="dropdown-col-title">${isAr ? 'الأدوية والمستحضرات الدوائية' : 'Pharmaceuticals Products'}</span>
                      <a href="#products" class="dropdown-item" onclick="filterCategoryAndScroll('sterilizers-antiseptics')">
                        <span class="dropdown-icon">🧴</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'المطهرات والمعقمات الجراحية' : 'Medical & Surgical Sterilizers'}</strong>
                          <small>UMCANOL, SADEX, VETOL PLUS...</small>
                        </div>
                      </a>
                      <a href="#products" class="dropdown-item" onclick="filterCategoryAndScroll('ointments-creams-gels')">
                        <span class="dropdown-icon">🧪</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'المراهم والكريمات والجل' : 'Ointments, Creams & Gels'}</strong>
                          <small>Facid, UMCO CORT, Dactazon...</small>
                        </div>
                      </a>
                      <a href="#products" class="dropdown-item" onclick="filterCategoryAndScroll('medical-drops')">
                        <span class="dropdown-icon">💧</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'قطرات الأذن والأنف' : 'Drops Section'}</strong>
                          <small>UMCOZAL, Rhinofin, Otocare...</small>
                        </div>
                      </a>
                      <a href="#products" class="dropdown-item" onclick="filterCategoryAndScroll('medicated-shampoos')">
                        <span class="dropdown-icon">🫧</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'شامبوهات علاجية' : 'Shampoo Section'}</strong>
                          <small>Dandruff & therapeutic care</small>
                        </div>
                      </a>
                      <a href="#products" class="dropdown-item" onclick="filterCategoryAndScroll('medical-liquids')">
                        <span class="dropdown-icon">🧪</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'السوائل والغسولات الطبية' : 'Liquids Section'}</strong>
                          <small>HEXODENT, Lidopain Spray...</small>
                        </div>
                      </a>
                    </div>
                    <div class="dropdown-col">
                      <span class="dropdown-col-title">${isAr ? 'المستلزمات الطبية والسريرية' : 'Medical Appliances & Clinical'}</span>
                      <a href="#medical-appliances" class="dropdown-item" onclick="scrollToSection('medical-appliances')">
                        <span class="dropdown-icon">🩺</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'المستلزمات والأجهزة الطبية' : 'Medical Appliances Products'}</strong>
                          <small>${isAr ? 'قساطر، ضمادات، كراسي، أجهزة تنفس' : 'Catheters, Swabs, Masks, Chairs...'}</small>
                        </div>
                      </a>
                      <a href="#clinical" class="dropdown-item" onclick="scrollToSection('clinical')">
                        <span class="dropdown-icon">📖</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'دليل الجرعات السريري' : 'Clinical Dosage Guide'}</strong>
                          <small>${isAr ? 'إرشادات الاستخدام المعتمدة' : 'Official medical administration'}</small>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="dropdown-item highlight-item" onclick="openProductsListModal()">
                        <span class="dropdown-icon">📄</span>
                        <div class="dropdown-text">
                          <strong>${isAr ? 'قائمة المنتجات الرسمية (PDF)' : 'Official Products Catalog (PDF)'}</strong>
                          <small>${isAr ? 'معاينة وتحميل الدليل الكامل' : 'Preview & download PDF catalog'}</small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <!-- PRODUCTS LIST Button -->
              <li class="nav-item">
                <a href="javascript:void(0)" class="nav-link" onclick="openProductsListModal()">
                  ${isAr ? 'قائمة المنتجات' : 'PRODUCTS LIST'}
                </a>
              </li>

              <!-- PARTNERS -->
              <li class="nav-item">
                <a href="#partners" class="nav-link" onclick="scrollToSection('partners')">
                  ${isAr ? 'شركاؤنا' : 'PARTNERS'}
                </a>
              </li>

              <!-- CONTACT -->
              <li class="nav-item">
                <a href="#contact-us" class="nav-link" onclick="scrollToSection('contact-us')">
                  ${isAr ? 'تواصل معنا' : 'CONTACT'}
                </a>
              </li>
            </ul>

            <!-- Right Controls: Social, Lang, Cart, Portal -->
            <div class="header-nav-right">
              <!-- Social circles -->
              <div class="nav-social-icons">
                <a href="https://www.facebook.com/UMCOPHARMA" target="_blank" rel="noopener noreferrer" class="social-circle" title="Facebook">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-circle" title="X (Twitter)">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-circle" title="YouTube">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0a192f"/></svg>
                </a>
                <a href="https://wa.me/967777414035" target="_blank" rel="noopener noreferrer" class="social-circle" title="WhatsApp">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24"/></svg>
                </a>
              </div>

              <!-- Language Toggle Button -->
              <button class="nav-btn-icon" onclick="toggleLanguage()" title="Switch Language">
                <span style="font-weight: 800; font-size: 0.75rem;">${isAr ? 'EN' : 'عربي'}</span>
              </button>

              <!-- RFQ Cart Trigger -->
              <button class="nav-btn-icon" onclick="openRFQModal()" title="${t('quote_cart_badge')}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                ${State.rfqCart.length > 0 ? `<span class="badge-counter">${State.rfqCart.length}</span>` : ''}
              </button>

              <!-- Notifications (If Logged In) -->
              ${State.user ? `
                <div style="position: relative;">
                  <button class="nav-btn-icon" onclick="toggleNotificationDropdown()" title="${t('notif_title')}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span id="notif-badge" class="badge-counter" style="display: ${unreadCount > 0 ? 'flex' : 'none'};">${unreadCount}</span>
                  </button>
                  ${renderNotificationDropdown()}
                </div>
              ` : ''}

              <!-- Auth / Portal Action Button -->
              ${State.user ? `
                <button class="nav-portal-btn" onclick="togglePortalView()">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span>${State.view === 'portal' ? (isAr ? 'الموقع العام' : 'Public') : (isAr ? 'لوحة الإدارة' : 'Portal')}</span>
                </button>
                <button class="nav-btn-icon" onclick="logout()" title="${t('btn_logout')}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
              ` : `
                <button class="nav-login-btn" onclick="openModal('login-modal')">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  <span>${t('btn_login')}</span>
                </button>
              `}
            </div>
          </nav>
        </div>

        <!-- Mobile Drawer Toggle Button -->
        <button class="header-mobile-toggle" onclick="toggleMobileNav()" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Mobile Slide-out Drawer -->
      <div id="mobile-nav-drawer" class="mobile-nav-drawer">
        <a href="#hero" class="mobile-nav-link" onclick="toggleMobileNav(); switchView('public');">${isAr ? 'الرئيسية' : 'HOME'}</a>
        <a href="#about" class="mobile-nav-link" onclick="toggleMobileNav(); scrollToSection('about');">${isAr ? 'عن الشركة' : 'ABOUT'}</a>
        <div class="mobile-sub-menu">
          <a href="#about-intro" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('about-intro');">🏢 ${isAr ? 'مقدمة عن الشركة' : 'Introduction'}</a>
          <a href="#vision-mission" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('vision-mission');">🎯 ${isAr ? 'الرؤية والرسالة' : 'Vision & Mission'}</a>
          <a href="#facilities" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('facilities');">🏭 ${isAr ? 'منشآتنا ومصانعنا' : 'Our Facilities'}</a>
          <a href="#plan" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('plan');">🚀 ${isAr ? 'خطتنا وتوسعاتنا' : 'Our Plan'}</a>
          <a href="#why-choose-us" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('why-choose-us');">⭐ ${isAr ? 'لماذا تختار يمكو' : 'Why Choose Us'}</a>
          <a href="#certificates" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('certificates');">📜 ${isAr ? 'شهاداتنا وتراخيصنا' : 'Our Certificates'}</a>
          <a href="#leadership" class="mobile-sub-link" onclick="toggleMobileNav(); scrollToSection('leadership');">👥 ${isAr ? 'فريق القيادة' : 'Leadership Team'}</a>
        </div>
        <a href="#products" class="mobile-nav-link" onclick="toggleMobileNav(); scrollToSection('products');">${isAr ? 'المنتجات الدوائية' : 'PHARMACEUTICALS'}</a>
        <a href="#medical-appliances" class="mobile-nav-link" onclick="toggleMobileNav(); scrollToSection('medical-appliances');">${isAr ? 'المستلزمات الطبية' : 'MEDICAL APPLIANCES'}</a>
        <a href="javascript:void(0)" class="mobile-nav-link" onclick="toggleMobileNav(); openProductsListModal();">📄 ${isAr ? 'قائمة المنتجات (PDF)' : 'PRODUCTS LIST (PDF)'}</a>
        <a href="#partners" class="mobile-nav-link" onclick="toggleMobileNav(); scrollToSection('partners');">${isAr ? 'شركاؤنا المعتمدون' : 'PARTNERS'}</a>
        <a href="#contact-us" class="mobile-nav-link" onclick="toggleMobileNav(); scrollToSection('contact-us');">${isAr ? 'تواصل معنا' : 'CONTACT'}</a>
        <div style="display: flex; gap: 10px; margin-top: 14px;">
          <button class="btn btn-outline btn-sm" style="flex:1;" onclick="toggleLanguage()">${isAr ? 'English' : 'العربية'}</button>
          <button class="btn btn-primary btn-sm" style="flex:1;" onclick="openRFQModal()">${isAr ? 'عرض الأسعار' : 'Quote Cart'}</button>
        </div>
      </div>
    </header>
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

// --- 9. PUBLIC VIEW RENDERING & SECTIONS ---

// Medical Appliances Catalog Data (Migrated from original old/medical-appliances-products with real image paths)
const MEDICAL_APPLIANCES = [
  {
    name_en: 'CREPE BANDAGE',
    name_ar: 'شاش ضاغط طبي (كريب)',
    desc_en: 'High elasticity, breathable cotton crepe bandage for sprains and surgical dressing support.',
    desc_ar: 'شاش مطاطي عالي المرونة وقابل للتنفس لدعم التواءات المفاصل وتثبيت الضمادات الجراحية.',
    image: '/wp-content/uploads/2024/08/medical-product1-jpg.webp',
    spec: '10cm x 4.5m / 15cm x 4.5m'
  },
  {
    name_en: 'PE SHOE COVER',
    name_ar: 'غطاء حذاء معقم بلاستيكي (PE)',
    desc_en: 'Disposable waterproof polyethylene shoe covers for operating rooms and cleanrooms.',
    desc_ar: 'أغطية أحذية واقية عازلة للماء ومقاومة للانزلاق لغرف العمليات والعناية المركزة والمختبرات.',
    image: '/wp-content/uploads/2024/08/medical-product2-jpg.webp',
    spec: 'Universal Elastic, Blue'
  },
  {
    name_en: 'NURSE CAP (Bouffant Cap)',
    name_ar: 'قبعة تمريض وجراحة غير منسوجة',
    desc_en: 'Non-woven breathable disposable caps for infection prevention in clinical environments.',
    desc_ar: 'قبعات طبية خفيفة وقابلة للتنفس لمنع العدوى وتأمين بيئة جراحية معقمة.',
    image: '/wp-content/uploads/2024/08/medical-product3-jpg.webp',
    spec: '21-inch, Non-woven PP'
  },
  {
    name_en: 'NELATON CATHETER',
    name_ar: 'قسطرة نيلاتون البولية أحادية الاستخدام',
    desc_en: 'Medical grade PVC urinary catheter with atraumatic rounded closed tip and two lateral eyes.',
    desc_ar: 'قسطرة نيلاتون طبية مصنعة من بولي كلوريد الفينيل غير التحسسي بنهاية ناعمة لراحة المريض.',
    image: '/wp-content/uploads/2024/08/medical-product4-jpg.webp',
    spec: 'Sizes Fr 8 - 18'
  },
  {
    name_en: 'DISPOSABLE ANESTHESIA CIRCUIT',
    name_ar: 'دارة تخدير وتنفس اصطناعي معقمة',
    desc_en: 'Corrugated dual-limb breathing circuit with reservoir bag for general anesthesia and ventilation.',
    desc_ar: 'دائرة تنفس وتخدير معقمة مع كيس تخزين للتهوية الميكانيكية وإجراءات التخدير العام.',
    image: '/wp-content/uploads/2024/08/medical-product5-jpg.webp',
    spec: 'Adult / Pediatric 1.8m'
  },
  {
    name_en: 'ABDOMINAL SWABS (Lap Sponges)',
    name_ar: 'شاش بطني جراحي مع خيط كشف شعاعي',
    desc_en: '100% pure absorbent cotton laparotomy sponges with X-ray detectable barium sulphate thread.',
    desc_ar: 'شاش بطني جراحي عالي الامتصاص 100% قطن نقي مزود بشريط ممغنط يكشف بالأشعة السينية.',
    image: '/wp-content/uploads/2024/08/medical-product6-2-jpg.webp',
    spec: '30cm x 30cm, Pre-washed'
  },
  {
    name_en: 'ORAL / NASAL ENDOTRACHEAL TUBE',
    name_ar: 'أنبوب التنفس الرغامي ذو بالون (فموي / أنفي)',
    desc_en: 'Cuffed and uncuffed endotracheal tubes made of thermosensitive PVC with radiopaque line.',
    desc_ar: 'أنبوب رغامي معقم مع بالون ضغط منخفض لتأمين مجرى الهواء أثناء التخدير والإنعاش.',
    image: '/wp-content/uploads/2024/08/medical-product7-jpg.webp',
    spec: 'Sizes 3.0mm - 9.0mm ID'
  },
  {
    name_en: 'RYLES TUBE (Nasogastric Tube)',
    name_ar: 'أنبوب رايلز المعدي المعوي (أنفي - معدي)',
    desc_en: 'For nutritional feeding and gastric decompression with graduation marks and X-ray line.',
    desc_ar: 'أنبوب تغذية أنفي معدي لتفريغ المعدة وإعطاء الأدوية والمغذيات السريرية.',
    image: '/wp-content/uploads/2024/08/medical-product8-jpg.webp',
    spec: 'Length 105cm, Fr 12 - 18'
  },
  {
    name_en: 'NON-WOVEN WOUND DRESSING',
    name_ar: 'ضماد جراحي ذاتي الالتصاق غير منسوج',
    desc_en: 'Hypoallergenic adhesive dressing with non-adherent absorbent central wound pad.',
    desc_ar: 'ضمادات جراحية لاصقة ناعمة ولطيفة على الجلد مع وسادة ماصة غير ملتصقة بالجرح.',
    image: '/wp-content/uploads/2024/08/medical-product10-jpg.webp',
    spec: '10cm x 15cm / 10cm x 25cm'
  },
  {
    name_en: 'NEBULIZER MASK WITH TUBING',
    name_ar: 'قناع رذاذ واستنشاق دوائي مع وعاء وأنبوب',
    desc_en: 'Aerosol therapy mask with 6ml nebulizer cup and 2m star-lumen crush-resistant tubing.',
    desc_ar: 'قناع جلسات الاستنشاق الرذاذي للأدوية التنفسية مع أنبوب توصيل مرن ووعاء تدريج.',
    image: '/wp-content/uploads/2024/08/medical-product12-jpg.webp',
    spec: 'Adult & Pediatric Sets'
  },
  {
    name_en: 'OXYGEN MASK',
    name_ar: 'قناع أكسجين طبي مع أنبوب توصيل',
    desc_en: 'Medium concentration oxygen mask with adjustable nose clip and comfortable elastic strap.',
    desc_ar: 'قناع تزويد الأكسجين الطبي مع مشبك أنفي قابل للتعديل وأنبوب عالي التحمل.',
    image: '/wp-content/uploads/2024/08/medical-product13-jpg.webp',
    spec: 'Adult / Child Size'
  },
  {
    name_en: 'ECONOMY URINE BAG',
    name_ar: 'كيس جمع البول الطبي المعقم 2000 مل',
    desc_en: '2000ml urine drainage bag with non-return valve, push-pull drainage valve, and kink-free tube.',
    desc_ar: 'كيس تصريف بول سعة 2000 مل مع صمام مانع للارتجاع وصمام تفريغ وأنبوب غير قابل للالتواء.',
    image: '/wp-content/uploads/2024/08/medical-product14-jpg.webp',
    spec: '2000ml, Anti-reflux valve'
  },
  {
    name_en: 'ADULT DIAPERS',
    name_ar: 'حفاضات رعاية كبار السن الفائقة الامتصاص',
    desc_en: 'High absorption antibacterial adult diapers with wetness indicator and leak guards.',
    desc_ar: 'حفاضات رعاية كبار السن والمرضى طريحي الفراش بقدرة امتصاص فائقة ومؤشر رطوبة.',
    image: '/wp-content/uploads/2024/08/medical-product15-2-jpg.webp',
    spec: 'Sizes M, L, XL'
  },
  {
    name_en: 'LATEX SURGICAL GLOVES',
    name_ar: 'قفازات جراحية معقمة من اللاتكس الطبيعي',
    desc_en: 'Sterile pre-powdered and powder-free anatomical latex gloves with micro-roughened surface.',
    desc_ar: 'قفازات جراحية معقمة توفر أعلى درجات التحسس اللمسي والمتانة أثناء العمليات الجراحية.',
    image: '/wp-content/uploads/2024/08/medical-product16-jpg.webp',
    spec: 'Sizes 6.5, 7.0, 7.5, 8.0'
  },
  {
    name_en: 'PE EXAMINATION GLOVES',
    name_ar: 'قفازات فحص بلاستيكية (PE) ملساء',
    desc_en: 'Clear food-safe and medical examination gloves for routine hygiene tasks.',
    desc_ar: 'قفازات فحص بلاستيكية خفيفة ومقاومة للاستخدامات الطبية والتطهير العام.',
    image: '/wp-content/uploads/2024/08/medical-product17-jpg.webp',
    spec: 'Box of 100 pcs'
  },
  {
    name_en: 'NON REBREATHING MASK',
    name_ar: 'قناع أكسجين عالي التركيز مع خزان (NRB)',
    desc_en: 'High concentration oxygen therapy mask with reservoir bag and one-way valves.',
    desc_ar: 'قناع أكسجين عالي التركيز مخصص لحالات الطوارئ ونقص الأكسجة الحاد في المشافي.',
    image: '/wp-content/uploads/2024/08/medical-product18-jpg.webp',
    spec: 'High Concentration Reservoir'
  },
  {
    name_en: 'TOILET COMMODE CHAIR',
    name_ar: 'كرسي حمام ونقل طبي للمرضى وكبار السن',
    desc_en: 'Chromed steel foldable commode chair with removable bucket, armrests, and non-slip rubber tips.',
    desc_ar: 'كرسي طبي فولاذي قابل للطي مخصص للحمام ونقل المرضى وكبار السن مع وعاء قابل للإزالة.',
    image: '/wp-content/uploads/2024/08/medical-product23-2-jpg.webp',
    spec: 'Foldable Chrome Frame'
  },
  {
    name_en: 'OXYGEN REGULATOR (Flowmeter)',
    name_ar: 'منظم ومقياس تدفق أسطوانات الأكسجين الطبي',
    desc_en: 'Medical oxygen cylinder pressure regulator with humidifier bottle and precise flow control.',
    desc_ar: 'منظم أكسجين عالي الدقة لأسطوانات المستشفيات مع قارورة ترطيب ومقياس ضغط آمن.',
    image: '/wp-content/uploads/2024/08/medical-product24-jpg.webp',
    spec: '0-15 L/min with Humidifier'
  },
  {
    name_en: 'SUCTION CATHETER (Finger Control)',
    name_ar: 'قسطرة شفط الإفرازات مع تحكم بالإصبع',
    desc_en: 'Transparent PVC suction catheter with central open tip and finger vacuum control valve.',
    desc_ar: 'قسطرة شفط مخاطية معقمة لتنظيف مجرى الهواء مع صمام تحكم بالضغط الإبهامي.',
    image: '/wp-content/uploads/2024/08/medical-product25-jpg.webp',
    spec: 'Length 50cm, Fr 8 - 16'
  },
  {
    name_en: 'COMPRESSOR NEBULIZER',
    name_ar: 'جهاز تبخير واستنشاق دوائي منزلي وسريري',
    desc_en: 'Piston compressor nebulizer system for effective clinical aerosol treatment of asthma and COPD.',
    desc_ar: 'جهاز تبخير متطور بمكبس ضغط هادئ لعلاج الربو والالتهابات الشعبية في المشافي والمنازل.',
    image: '/wp-content/uploads/2024/08/medical-product26-jpg.webp',
    spec: 'Heavy Duty Clinical Grade'
  },
  {
    name_en: 'CLINICAL EXAMINATION LAMP',
    name_ar: 'مصباح كشف وفحص سريري طبي متحرك',
    desc_en: 'Mobile flexible gooseneck examination lamp with powerful LED illumination for exam rooms.',
    desc_ar: 'مصباح كشف طبي متحرك بعنق مرن وإضاءة باردة لغرف الفحص والعيادات الجراحية الصغرى.',
    image: '/wp-content/uploads/2024/08/medical-product27-jpg.webp',
    spec: 'LED Cold Light, Wheeled Base'
  },
  {
    name_en: 'SILICONE FOLEY CATHETER (2-Way)',
    name_ar: 'قسطرة فولي سيليكون 100% ثنائية الاتجاه',
    desc_en: '100% all-silicone 2-way foley catheter with symmetrical balloon for long-term catheterization.',
    desc_ar: 'قسطرة بولية سيليكونية نقية 100% لتقليل التحسس والالتهابات في فترات القسطرة الطويلة.',
    image: '/wp-content/uploads/2024/08/medical-product28-jpg.webp',
    spec: '100% Silicone, 5-15ml Balloon'
  },
  {
    name_en: 'UMBILICAL CORD CLAMP',
    name_ar: 'مشبك حبل سري معقم لحديثي الولادة',
    desc_en: 'Sterile disposable polypropylene cord clamp with interlocking teeth and security click lock.',
    desc_ar: 'مشبك حبل سري آمن مع قفل إغلاق محكم ومقاوم للفتح العرضي لرعاية المواليد.',
    image: '/wp-content/uploads/2024/08/medical-product30-jpg.webp',
    spec: 'Medical Grade PP, Sterile'
  },
  {
    name_en: 'SURGICAL SKIN STAPLER',
    name_ar: 'دباسة خياطة جراحية سريعة مع دبابيس',
    desc_en: 'Single-use ergonomic surgical skin stapler preloaded with 35 medical grade stainless steel staples.',
    desc_ar: 'دباسة جراحية دقيقة معقمة محملة بـ 35 دبوس ستانلس ستيل لإغلاق الجروح الجراحية بسرعة وأمان.',
    image: '/wp-content/uploads/2024/08/medical-product23-1-jpg.webp',
    spec: '35 Wide Staples'
  }
];

function renderPublicView() {
  return `
    ${renderHeroSlider()}
    ${renderMarketExperienceSection()}
    ${renderCategoryCarousel()}
    ${renderAnnouncementsSection()}
    ${renderProductsSection()}
    ${renderMedicalAppliancesSection()}
    ${renderClinicalGuideSection()}
    ${renderManufacturingSection()}
    ${renderContractMfgSection()}
    ${renderB2BSection()}
    ${renderPartnersSection()}
    ${renderAboutFullSection()}
    ${renderBranchesSection()}
    ${renderContactUsSection()}
    ${renderPVSection()}
    ${renderFloatingInquiryWidget()}
  `;
}

// Announcements & Medical Campaigns Showcase
function renderAnnouncementsSection() {
  const isAr = State.lang === 'ar';
  const announcements = State.announcements || [];
  if (announcements.length === 0) return '';

  return `
    <section id="campaigns" class="section" style="background: var(--bg-card-subtle);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag" style="background: rgba(200, 16, 46, 0.1); color: var(--umco-red);">${t('campaigns_tag')}</span>
          <h2 class="section-title">${t('campaigns_title')}</h2>
          <p class="section-desc">${t('campaigns_desc')}</p>
        </div>

        <div class="announcements-grid">
          ${announcements.map(a => `
            <div class="announcement-card">
              <div class="announcement-img-wrap">
                <img src="${a.image_url || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800'}" alt="${a.title_en}" class="announcement-img" />
                <span class="announcement-badge">${isAr ? (a.target_audience || 'المجتمع الطبي') : (a.target_audience || 'Medical Community')}</span>
              </div>
              <div class="announcement-body">
                <span style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">📅 ${new Date(a.created_at).toLocaleDateString(isAr ? 'ar-YE' : 'en-US')}</span>
                <h3 class="announcement-title">${isAr ? a.title_ar : a.title_en}</h3>
                <p class="announcement-content">${isAr ? a.content_ar : a.content_en}</p>
                <div style="margin-top: auto;">
                  <button class="btn btn-outline btn-sm" style="width: 100%;" onclick="toggleInquiryWidget()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>${isAr ? 'استفسار عن الحملة / طلب عينات' : 'Inquire / Request Samples'}</span>
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

// Healthcare Professionals (HCP) Clinical Dosage Guide
function renderClinicalGuideSection() {
  const isAr = State.lang === 'ar';
  const products = State.products || [];

  return `
    <section id="clinical" class="section">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag">${t('clinical_tag')}</span>
          <h2 class="section-title">${t('clinical_title')}</h2>
          <p class="section-desc">${t('clinical_desc')}</p>
        </div>

        <div class="clinical-table-wrap">
          <table class="clinical-table">
            <thead>
              <tr>
                <th style="width: 22%;">${isAr ? 'المستحضر والمادة الفعالة' : 'Product & Active API'}</th>
                <th style="width: 15%;">${isAr ? 'الشكل والتركيز' : 'Dosage & Strength'}</th>
                <th style="width: 35%;">${isAr ? 'دواعي الاستعمال السريرية' : 'Approved Indications'}</th>
                <th style="width: 18%;">${isAr ? 'طريقة الاستخدام المقررة' : 'Clinical Administration'}</th>
                <th style="width: 10%; text-align: center;">${isAr ? 'إجراء' : 'Action'}</th>
              </tr>
            </thead>
            <tbody>
              ${products.slice(0, 7).map(p => `
                <tr>
                  <td>
                    <strong style="color: var(--primary-navy);">${isAr ? p.trade_name_ar : p.trade_name_en}</strong>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">${p.scientific_name || ''}</div>
                  </td>
                  <td>
                    <span class="spec-chip">${isAr ? p.dosage_form_ar : p.dosage_form_en}</span>
                    <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${p.concentration || ''}</div>
                  </td>
                  <td style="color: var(--text-secondary); line-height: 1.5;">${isAr ? p.indications_ar : p.indications_en}</td>
                  <td style="font-size: 0.85rem; color: var(--text-secondary);">${isAr ? (p.usage_instructions_ar || 'حسب استشارة الطبيب المشرف.') : (p.usage_instructions_en || 'As directed by physician.')}</td>
                  <td style="text-align: center;">
                    <button class="btn btn-outline btn-sm" onclick="openProductQuickView(${p.id})" title="${t('btn_quick_view')}">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

// Contract & Toll Manufacturing Section (Global Pharma Standard)
function renderContractMfgSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="contract-mfg" class="section" style="background: #F8FAFC; border-top: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag" style="background: rgba(14, 165, 233, 0.1); color: var(--accent-blue);">${isAr ? 'شراكات التصنيع للغير (B2B)' : 'Contract & Toll Manufacturing'}</span>
          <h2 class="section-title">${isAr ? 'حلول التصنيع الدوائي التعاقدي للشركات المحلية والدولية' : 'Contract Formulation & Sterile Toll Manufacturing'}</h2>
          <p class="section-desc">
            ${isAr ? 
              'نوفر لشركائنا بنية تحتية تصنيعية حديثة، غرف نظيفة معتمدة، وأنظمة رقابة متقدمة لإنتاج وتعبئة المستحضرات الصيدلانية تحت علاماتهم التجارية الخاصة.' :
              'We offer global and regional pharmaceutical partners state-of-the-art cleanroom manufacturing, automated packaging, and analytical release under private label agreements.'
            }
          </p>
        </div>

        <div class="contract-mfg-grid">
          <div class="contract-mfg-card">
            <div class="contract-mfg-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h4 class="contract-mfg-title">${isAr ? 'صياغة وتطوير التراكيب' : 'Formulation & R&D'}</h4>
            <p class="contract-mfg-desc">${isAr ? 'تطوير ودراسة ثبات المستحضرات الصيدلانية ومطابقتها لدساتير BP و USP مع إعداد ملفات CTD.' : 'Full formulation stability testing and CTD regulatory dossier preparation.'}</p>
          </div>

          <div class="contract-mfg-card">
            <div class="contract-mfg-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4 class="contract-mfg-title">${isAr ? 'تعبئة معقمة فائقة النقاء' : 'Aseptic Filling'}</h4>
            <p class="contract-mfg-desc">${isAr ? 'غرف نظيفة Class A/B معقمة بنظام فلاتر HEPA وتعبئة آلية لمنع أي مخاطر للتلوث الميكروبي.' : 'Class A/B cleanrooms with computerized particulate monitoring and HEPA filtration.'}</p>
          </div>

          <div class="contract-mfg-card">
            <div class="contract-mfg-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            </div>
            <h4 class="contract-mfg-title">${isAr ? 'الرقابة النوعية والتحليل HPLC' : 'QC & Analytical Testing'}</h4>
            <p class="contract-mfg-desc">${isAr ? 'تحاليل كيميائية وفيزيائية وجرثومية متقدمة لكل تشغيلة قبل الإفراج الرسمي عنها.' : 'High-performance liquid chromatography (HPLC) and microbial assays for every batch.'}</p>
          </div>

          <div class="contract-mfg-card">
            <div class="contract-mfg-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h4 class="contract-mfg-title">${isAr ? 'التغليف والتوزيع الإقليمي' : 'Packaging & Logistics'}</h4>
            <p class="contract-mfg-desc">${isAr ? 'تغليف آلي بنظام التتبع الباركودي وسلاسل توريد مبردة تغطي مختلف المحافظات.' : 'Serialized barcoded automated secondary packaging and cold-chain dispatch.'}</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 32px;">
          <a href="#rfq" class="btn btn-primary btn-lg">
            <span>${isAr ? 'طلب مناقشة شراكة تصنيع تعاقدي' : 'Request Contract Manufacturing Proposal'}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

// Floating "Ask Pharmacist / Medical Support" Widget
function renderFloatingInquiryWidget() {
  const isAr = State.lang === 'ar';
  const isOpen = State.inquiryWidgetOpen;

  return `
    <!-- Floating Trigger Button -->
    <button class="floating-inquiry-trigger" onclick="toggleInquiryWidget()" title="${t('btn_ask_pharmacist')}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span>${isAr ? 'اسأل الصيدلي / الاستفسار الطبي' : 'Ask Pharmacist / Medical Support'}</span>
    </button>

    <!-- Floating Dialog Panel -->
    <div class="floating-inquiry-panel ${isOpen ? 'open' : ''}" id="floating-inquiry-panel">
      <div class="inquiry-panel-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg width="18" height="18" color="#38BDF8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span style="font-weight: 800; font-size: 0.95rem;">${isAr ? 'استفسار صيدلاني وطبي مباشر' : 'Medical & Clinical Inquiries'}</span>
        </div>
        <button class="btn btn-icon-only" style="color: #fff; background: transparent; padding: 0;" onclick="toggleInquiryWidget()">✕</button>
      </div>

      <div class="inquiry-panel-body">
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.4;">
          ${isAr ? 'يتولى فريق التسويق والشؤون الطبية بشركة يمكو الرد المباشر على استفسارات الأطباء والصيادلة والمرضى.' : 'YUMCO Medical & Marketing team responds promptly to your clinical and availability questions.'}
        </p>

        <form onsubmit="submitInquiry(event)">
          <div class="form-group" style="margin-bottom: 10px;">
            <input type="text" name="customer_name" required class="form-control" style="font-size: 0.85rem; padding: 8px 12px;" placeholder="${isAr ? 'الاسم الكريم *' : 'Your Name *'}" />
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <select name="customer_role" class="form-control" style="font-size: 0.85rem; padding: 8px 12px;">
              <option value="physician">${isAr ? 'طبيب بشري' : 'Physician'}</option>
              <option value="pharmacist" selected>${isAr ? 'صيدلاني / صيدلانية' : 'Pharmacist'}</option>
              <option value="hospital_buyer">${isAr ? 'مسؤول مشتريات مشافي' : 'Hospital Procurement'}</option>
              <option value="patient">${isAr ? 'مريض / مستهلك' : 'Patient'}</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <input type="tel" name="phone" required class="form-control" style="font-size: 0.85rem; padding: 8px 12px;" placeholder="${isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}" />
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <select name="category" class="form-control" style="font-size: 0.85rem; padding: 8px 12px;">
              <option value="availability">${isAr ? 'توفر الأصناف والأسعار' : 'Drug Availability & Pricing'}</option>
              <option value="dosage">${isAr ? 'الجرعات والاستخدام السريري' : 'Clinical Dosage & Indications'}</option>
              <option value="interactions">${isAr ? 'التداخلات الدوائية والآثار' : 'Drug Interactions'}</option>
              <option value="samples">${isAr ? 'طلب عينات لمستشفى أو عيادة' : 'Medical Samples Request'}</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <textarea name="message" required rows="3" class="form-control" style="font-size: 0.85rem; padding: 8px 12px;" placeholder="${isAr ? 'اكتب استفسارك الطبي أو التجاري هنا بالتفصيل...' : 'Type your question here...' }"></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${isAr ? 'إرسال الاستفسار الطبي' : 'Send Inquiry'}</span>
          </button>
        </form>
      </div>
    </div>
  `;
}

// Hero Slider Controller & Event Engine
let currentHeroSlide = 0;
let heroSliderTimer = null;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides || slides.length === 0) return;

  function setSlide(idx) {
    currentHeroSlide = (idx + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentHeroSlide));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentHeroSlide));
  }

  window.nextHeroSlide = function() {
    setSlide(currentHeroSlide + 1);
  };

  window.prevHeroSlide = function() {
    setSlide(currentHeroSlide - 1);
  };

  window.goToHeroSlide = function(idx) {
    setSlide(idx);
    resetHeroTimer();
  };

  function resetHeroTimer() {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
    heroSliderTimer = setInterval(window.nextHeroSlide, 6000);
  }

  resetHeroTimer();
}

// 1. Hero Interactive Slider (Using real slider-1 to 4 images from old website)
function renderHeroSlider() {
  const isAr = State.lang === 'ar';
  const slides = [
    {
      bg: '/wp-content/uploads/2024/07/slider-1.png',
      tag: isAr ? 'معايير الجودة الدوائية العالمية' : 'International Pharmacopeia Standards',
      title: isAr ? 'معايير دولية، أمان وموثوقية علاجية' : 'Int. Standards, Safety, and Reliability',
      desc: isAr ? 
        'نسعى لتجاوز أعلى معايير الجودة العالمية، وضمان أمان ومأمونية وفاعلية كافة منتجاتنا الصيدلانية على مدار أكثر من 20 عاماً من العطاء والتميز.' : 
        'We strive to meet and exceed international standards, ensuring the safety, efficacy, and the reliability of all of our products with a history spanning over 20 years.'
    },
    {
      bg: '/wp-content/uploads/2024/07/slider-2.png',
      tag: isAr ? 'عشرون عاماً من التميز الطبي (2004 - 2024)' : 'Over 20 Years of Market Excellence',
      title: isAr ? 'تاريخ حافل يمتد لأكثر من 20 عاماً' : 'A History Spanning Over 20 Years',
      desc: isAr ? 
        'منذ تأسيسنا في صنعاء عام 2004، أصبحت يمكو اسماً موثوقاً في الصناعات الدوائية والطبية، مشهوداً لها بالالتزام التام والريادة ورضا العملاء.' : 
        'Since 2004, we have become a renowned name in the medical industry, well known for our commitment to excellence and customer satisfaction.'
    },
    {
      bg: '/wp-content/uploads/2024/07/slider-3.png',
      tag: isAr ? 'بنية تحتية صناعية مؤتمتة متطورة' : 'State-of-the-Art Automated Facilities',
      title: isAr ? '3 خطوط إنتاج آلية ومختبرات رقابة حديثة' : '3 Fully Automated Lines & R&D Labs',
      desc: isAr ? 
        'نمتلك صروحاً صناعية متقدمة وثلاثة خطوط إنتاج أوتوماتيكية متكاملة تدعمها مختبرات مجهزة بأحدث تقنيات الفحص والتحليل الصيدلاني الدقيق.' : 
        'Boasting three full auto production lines and a well-equipped laboratory staffed by highly educated and experienced pharmaceutical specialists.'
    },
    {
      bg: '/wp-content/uploads/2024/07/slider-4.png',
      tag: isAr ? 'شبكة توزيع وشراكات وطنية راسخة' : 'National Distribution & Partnerships',
      title: isAr ? 'نضع رضا العميل وأمان المشافي أولاً' : 'Prioritizing Customer Satisfaction',
      desc: isAr ? 
        'نخدم أكثر من 1000 عميل تشمل ما يزيد عن 200 مستشفى حكومي وخاص، مع أسطول توزيع يضم أكثر من 20 شاحنة مجهزة تغطي كافة محافظات الجمهورية.' : 
        'With over a thousand clients, including more than 200 government and private hospitals, we prioritize patient safety and healthcare supply security.'
    }
  ];

  return `
    <section id="hero" class="hero-slider-container">
      ${slides.map((s, idx) => `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${s.bg}');">
          <div class="hero-slide-overlay">
            <div class="container">
              <div class="hero-slide-inner">
                <span class="hero-slide-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  ${s.tag}
                </span>
                <h1 class="hero-slide-title">${s.title}</h1>
                <p class="hero-slide-desc">${s.desc}</p>
                <div class="hero-slide-actions">
                  <a href="#products" class="btn btn-primary btn-lg" onclick="scrollToSection('products')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span>${isAr ? 'استعراض المنتجات' : 'Explore Products'}</span>
                  </a>
                  <button class="btn btn-outline-red btn-lg" style="background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.4);" onclick="openRFQModal()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span>${isAr ? 'طلب عرض أسعار' : 'Get A Quote'}</span>
                  </button>
                  <a href="javascript:void(0)" class="btn btn-outline btn-lg" style="background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.4);" onclick="openProductsListModal()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M12 18v-6M9 15l3 3 3-3"/></svg>
                    <span>${isAr ? 'دليل الأصناف (PDF)' : 'Products PDF'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}

      <!-- Slider Arrows -->
      <button class="slider-arrow-btn slider-btn-prev" onclick="prevHeroSlide()" aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="slider-arrow-btn slider-btn-next" onclick="nextHeroSlide()" aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <!-- Slider Dots -->
      <div class="slider-dots">
        ${slides.map((_, i) => `
          <button class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToHeroSlide(${i})" aria-label="Slide ${i+1}"></button>
        `).join('')}
      </div>
    </section>
  `;
}

// 2. 20+ Years Market Experience Section (Matching original index.html)
function renderMarketExperienceSection() {
  const isAr = State.lang === 'ar';
  return `
    <section class="experience-section">
      <div class="container">
        <!-- Decorative UMCO Ornament Divider -->
        <div class="umco-ornament-divider">
          <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="UMCO Ornament" class="umco-ornament-img" />
        </div>
        <div style="text-align: center; margin-bottom: 32px;">
          <span style="font-size: 0.82rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
            ${isAr ? 'الصناعات الدوائية والطبية' : 'Pharmaceutical Industries'}
          </span>
          <h2 style="font-size: 2.1rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
            ${isAr ? 'أكثر من 20 عاماً في خدمة المنظومة الصحية' : 'Over 20 Years of Market Experience'}
          </h2>
          <p style="color: var(--text-secondary); max-width: 760px; margin: 10px auto 0 auto; line-height: 1.7;">
            ${isAr ? 
              'تعد شركة يمكو للصناعات الدوائية إحدى كبرى الشركات الطبية والصناعية الموثوقة في الجمهورية اليمنية، وهي إحدى شركات مجموعة يمكو للصناعات الطبية والتجارية، والمكرسة للارتقاء بخدمات الرعاية الصحية والإنتاج الدوائي البشري.' :
              'UMCO Pharmaceuticals is a leading and trusted medical company and industry in Yemen, subsidiary of UMCO for Medical & Trading Industries, dedicated to improving healthcare services and human medical products in the Republic of Yemen.'
            }
          </p>
        </div>

        <div class="exp-hero-grid">
          <!-- Big 20+ Experience Badge Banner -->
          <div class="exp-badge-banner">
            <div class="exp-huge-num">20+</div>
            <div class="exp-huge-label">${isAr ? 'عاماً من الخبرة والريادة في السوق' : 'Market Experience'}</div>
            <div class="exp-huge-sub">${isAr ? 'تأسست عام 2004 في صنعاء، الجمهورية اليمنية' : 'Established in 2004, Sana’a, Republic of Yemen'}</div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.12);">
              <div>
                <div style="font-size: 1.5rem; font-weight: 900; color: #38BDF8;">47+</div>
                <div style="font-size: 0.75rem; color: #CBD5E1;">${isAr ? 'مستحضر ومستلزم مسجل' : 'Registered Formulations'}</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 900; color: #34D399;">200+</div>
                <div style="font-size: 0.75rem; color: #CBD5E1;">${isAr ? 'مشفى حكومي وخاص' : 'Hospitals Served'}</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 900; color: #FBBF24;">20+</div>
                <div style="font-size: 0.75rem; color: #CBD5E1;">${isAr ? 'شاحنة توزيع مجهزة' : 'Distribution Fleet'}</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 900; color: #F472B6;">$25M+</div>
                <div style="font-size: 0.75rem; color: #CBD5E1;">${isAr ? 'حجم المبيعات السنوية' : 'Annual Sales Turnover'}</div>
              </div>
            </div>
          </div>

          <!-- 6 Quick Highlight Cards (Matching old index.html icon boxes) -->
          <div class="exp-highlight-cards">
            <a href="#about-intro" class="exp-mini-card" onclick="scrollToSection('about-intro')">
              <span class="exp-mini-icon">📖</span>
              <span class="exp-mini-title">${isAr ? 'عن الشركة' : 'About Us'}</span>
              <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 4px;">${isAr ? 'تاريخ التأسيس والنشأة 2004' : 'History & establishment'}</small>
            </a>
            <a href="#vision-mission" class="exp-mini-card" onclick="scrollToSection('vision-mission')">
              <span class="exp-mini-icon">📈</span>
              <span class="exp-mini-title">${isAr ? 'الرؤية والرسالة' : 'Vision / Mission'}</span>
              <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 4px;">${isAr ? 'ريادة التميز الدوائي' : 'Healthcare advancement'}</small>
            </a>
            <a href="#facilities" class="exp-mini-card" onclick="scrollToSection('facilities')">
              <span class="exp-mini-icon">🏭</span>
              <span class="exp-mini-title">${isAr ? 'منشآتنا ومصانعنا' : 'Our Facilities'}</span>
              <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 4px;">${isAr ? '3 خطوط إنتاج آلية' : '3 automated lines'}</small>
            </a>
            <a href="#partners" class="exp-mini-card" onclick="scrollToSection('partners')">
              <span class="exp-mini-icon">🤝</span>
              <span class="exp-mini-title">${isAr ? 'شراكاتنا الدولية' : 'Partnership'}</span>
              <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 4px;">${isAr ? 'توكيلات أدوية ومستلزمات' : 'Global pharma brands'}</small>
            </a>
            <a href="#why-choose-us" class="exp-mini-card" onclick="scrollToSection('why-choose-us')">
              <span class="exp-mini-icon">👥</span>
              <span class="exp-mini-title">${isAr ? 'التركيز على العميل' : 'Customer Focus'}</span>
              <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 4px;">${isAr ? 'أكثر من 1000 عميل' : 'Over 1000 clients'}</small>
            </a>
            <a href="#activities" class="exp-mini-card" onclick="scrollToSection('activities')">
              <span class="exp-mini-icon">⚙️</span>
              <span class="exp-mini-title">${isAr ? 'أنشطتنا وخدماتنا' : 'Our Activities'}</span>
              <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 4px;">${isAr ? 'إنتاج وتوريد شامل' : 'Supply & manufacture'}</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 3. Category Visual Carousel / Cards (Using real home-carousel1 to 5 images)
function renderCategoryCarousel() {
  const isAr = State.lang === 'ar';
  const categoriesVisual = [
    {
      slug: 'sterilizers-antiseptics',
      title_en: 'Medical & Surgical Sterilizers',
      title_ar: 'المطهرات والمعقمات الجراحية',
      img: '/wp-content/uploads/2024/07/home-carousel1-1-jpg-jpg.webp'
    },
    {
      slug: 'ointments-creams-gels',
      title_en: 'Ointments, Creams and Gels',
      title_ar: 'المراهم والكريمات والجل',
      img: '/wp-content/uploads/2024/07/home-carousel2-2-jpg.webp'
    },
    {
      slug: 'medical-drops',
      title_en: 'Drops Section (Nasal & Ear)',
      title_ar: 'قطرات الأنف والأذن الطبية',
      img: '/wp-content/uploads/2024/07/home-carousel3-3-jpg.webp'
    },
    {
      slug: 'medicated-shampoos',
      title_en: 'Medicated Shampoos',
      title_ar: 'الشامبوهات العلاجية والتطهيرية',
      img: '/wp-content/uploads/2024/07/home-carousel4-4-jpg.webp'
    },
    {
      slug: 'medical-liquids',
      title_en: 'Medical Liquids & Sprays',
      title_ar: 'السوائل والغسولات والبخاخات الطبية',
      img: '/wp-content/uploads/2024/07/home-carousel5-jpg.webp'
    }
  ];

  return `
    <section class="category-visual-section">
      <div class="container">
        <!-- Ornament -->
        <div class="umco-ornament-divider">
          <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="UMCO Ornament" class="umco-ornament-img" />
        </div>
        <div style="text-align: center;">
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
            ${isAr ? 'الصناعات الدوائية والطبية' : 'Pharmaceutical Industries'}
          </span>
          <h2 style="font-size: 2.1rem; font-weight: 900; color: #FFFFFF; margin-top: 6px;">
            ${isAr ? 'أقسام منتجاتنا الدوائية المعتمدة' : 'Our Product Lines & Categories'}
          </h2>
          <p style="color: #94A3B8; max-width: 650px; margin: 8px auto 0 auto; font-size: 0.95rem;">
            ${isAr ? 'استكشف أقسام منتجاتنا وتشكيلتنا المتكاملة المصنعة وفق أحدث مواصفات دستور الأدوية العالمي' : 'Explore our business and comprehensive pharmaceutical formulations engineered for healthcare facilities'}
          </p>
        </div>

        <div class="cat-visual-grid">
          ${categoriesVisual.map(cat => `
            <div class="cat-visual-card" onclick="filterCategoryAndScroll('${cat.slug}')" title="${isAr ? cat.title_ar : cat.title_en}">
              <img src="${cat.img}" alt="${cat.title_en}" class="cat-visual-img" />
              <div class="cat-visual-caption">
                <div class="cat-visual-title">${isAr ? cat.title_ar : cat.title_en}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 4. Medical Appliances Showcase Section (24 items with real images)
function renderMedicalAppliancesSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="medical-appliances" class="appliances-section">
      <div class="container">
        <!-- Ornament -->
        <div class="umco-ornament-divider">
          <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="UMCO Ornament" class="umco-ornament-img" />
        </div>
        <div style="text-align: center;">
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
            ${isAr ? 'المستلزمات والأجهزة الطبية والمستهلكات الجراحية' : 'Medical Appliances & Surgical Supplies'}
          </span>
          <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
            ${isAr ? 'كتالوج المستلزمات الطبية والجراحية' : 'Medical Appliances Products'}
          </h2>
          <p style="color: var(--text-secondary); max-width: 720px; margin: 8px auto 0 auto; font-size: 0.95rem;">
            ${isAr ? 
              'نوفر للمشافي والمراكز الطبية في عموم الجمهورية حزمة متكاملة من أجود المستلزمات الطبية المستوردة والمصنعة طبقاً للمواصفات الدولية المعتمدة.' : 
              'UMCO supplies high-demand medical devices, surgical disposables, catheters, and hospital equipment sourced from prestigious certified global manufacturers.'
            }
          </p>
        </div>

        <div class="appliances-grid">
          ${MEDICAL_APPLIANCES.map(app => `
            <div class="appliance-card">
              <div class="appliance-img-wrap">
                <img src="${app.image}" alt="${app.name_en}" class="appliance-img" />
              </div>
              <div class="appliance-body">
                <div class="appliance-title">${isAr ? app.name_ar : app.name_en}</div>
                <div style="margin-bottom: 6px;">
                  <span class="spec-chip" style="font-size: 0.72rem;">${app.spec}</span>
                </div>
                <div class="appliance-desc">${isAr ? app.desc_ar : app.desc_en}</div>
                <button class="btn btn-outline-red btn-sm" style="width: 100%; margin-top: auto;" onclick="addToQuoteMedicalAppliance('${app.name_en.replace(/'/g, "\\'")}', '${app.name_ar.replace(/'/g, "\\'")}', '${app.spec}')">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  <span>${isAr ? 'إضافة لعرض الأسعار' : 'Add to Quote'}</span>
                </button>
              </div>
            </div>
          `).join('')}
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

        <!-- Interactive Branches & Logistics Leaflet Map -->
        <div class="branches-map-card" style="margin-bottom: 2rem;">
          <div class="branches-map-header">
            <div class="branches-map-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <div style="font-weight: 800;">${isAr ? 'خريطة فروع وشبكة التوزيع المعتمدة لشركة يمكو' : 'Interactive YUMCO Nationwide Logistics Map'}</div>
                <div class="branches-map-subtitle">${isAr ? 'انقر على أي محافظة للاستعراض والتواصل المباشر والوصول' : 'Select any branch to inspect geographic location & contact details'}</div>
              </div>
            </div>
            <div class="branches-map-controls">
              <select class="branches-map-select" onchange="window.focusBranchMap(this.value)">
                <option value="">${isAr ? '-- اختر الفرع للتكبير على الخريطة --' : '-- Jump to Branch on Map --'}</option>
                ${State.branches.map(b => `
                  <option value="${b.id}">${isAr ? b.city_ar : b.city_en} ${b.is_headquarters ? (isAr ? '(المقر الرئيسي)' : '(HQ)') : ''}</option>
                `).join('')}
              </select>
            </div>
          </div>
          <div class="branches-map-container" id="branches-map-container">
            <div id="branches-leaflet-map"></div>
          </div>
        </div>

        <div class="branches-grid">
          ${State.branches.map(b => `
            <div class="branch-card ${b.is_headquarters ? 'is-hq' : ''}" id="branch-card-${b.id}">
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
                <div style="margin-top: 10px; display: flex; gap: 8px;">
                  <button type="button" class="btn btn-outline btn-sm" style="flex: 1;" onclick="window.focusBranchMap(${b.id})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>${isAr ? 'عرض بالخريطة' : 'Show on Map'}</span>
                  </button>
                  <a href="tel:${b.phone_primary.replace(/\s+/g, '')}" class="btn btn-primary btn-sm" style="flex: 1;">
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

// Helper for adding medical appliance to RFQ Cart
window.addToQuoteMedicalAppliance = function(nameEn, nameAr, spec) {
  const isAr = State.lang === 'ar';
  const item = {
    id: 'appliance-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    trade_name_en: nameEn,
    trade_name_ar: nameAr,
    dosage_form_en: spec || 'Appliance',
    dosage_form_ar: spec || 'مستلزم طبي',
    quantity: 100
  };
  State.rfqCart.push(item);
  renderNavbar();
  showToast(isAr ? `تمت إضافة ${nameAr} إلى سلة عرض الأسعار` : `Added ${nameEn} to RFQ Cart`, 'success');
};

// Helper for Certificate Lightbox
window.openCertLightbox = function(src, title) {
  const modal = document.getElementById('cert-lightbox-modal');
  const img = document.getElementById('cert-lightbox-img');
  const caption = document.getElementById('cert-lightbox-caption');
  if (modal && img) {
    img.src = src;
    if (caption) caption.textContent = title || '';
    modal.classList.add('open');
  }
};

window.closeCertLightbox = function() {
  const modal = document.getElementById('cert-lightbox-modal');
  if (modal) modal.classList.remove('open');
};

// Helper for Products List PDF Modal
window.openProductsListModal = function() {
  const modal = document.getElementById('products-list-modal');
  if (modal) modal.classList.add('open');
};

window.closeProductsListModal = function() {
  const modal = document.getElementById('products-list-modal');
  if (modal) modal.classList.remove('open');
};

// Helper for Contact Us Form Submission
window.handleContactUsSubmit = async function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const isAr = State.lang === 'ar';

  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || '',
    message: formData.get('message')
  };

  try {
    const res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      showToast(isAr ? 'تم استلام رسالتك بنجاح، وسيتواصل معك فريقنا قريباً.' : 'Message received successfully. Our team will contact you soon.', 'success');
      form.reset();
    } else {
      showToast(data.message || (isAr ? 'تعذر إرسال الرسالة' : 'Failed to send message'), 'error');
    }
  } catch (err) {
    showToast(isAr ? 'تم حفظ رسالتك وسيتواصل معك فريقنا.' : 'Message recorded.', 'success');
    form.reset();
  }
};

// 5. Partners Section (with our-partners-new.avif and 12 real partner logos)
function renderPartnersSection() {
  const isAr = State.lang === 'ar';
  const pharmaPartners = [
    '/wp-content/uploads/2024/05/pharma-partner1-jpg.webp',
    '/wp-content/uploads/2024/05/pharma-partner2-jpg.webp',
    '/wp-content/uploads/2024/05/pharma-partner6-jpg.webp',
    '/wp-content/uploads/2024/05/pharma-partner7-jpg.webp',
    '/wp-content/uploads/2024/05/pharma-partner8-jpg.webp',
    '/wp-content/uploads/2024/05/pharma-partner44-jpg.webp'
  ];

  const medPartners = [
    '/wp-content/uploads/2024/05/med-partner1-jpg.webp',
    '/wp-content/uploads/2024/05/med-partner2-jpg.webp',
    '/wp-content/uploads/2024/05/med-partner3-jpg.webp',
    '/wp-content/uploads/2024/05/med-partner5-jpg.webp',
    '/wp-content/uploads/2024/05/med-partner6-jpg.webp',
    '/wp-content/uploads/2024/05/med-partner-4-jpg.webp'
  ];

  return `
    <section id="partners" class="partners-section">
      <div class="container">
        <!-- Ornament -->
        <div class="umco-ornament-divider">
          <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="UMCO Ornament" class="umco-ornament-img" />
        </div>
        <div style="text-align: center;">
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
            ${isAr ? 'الصناعات الدوائية والطبية' : 'Pharmaceutical Industries'}
          </span>
          <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
            <span style="color: var(--umco-red);">${isAr ? 'شركاؤنا الدوليون' : 'Our Prestigious'}</span> ${isAr ? 'والمحليون المعتمدون' : 'Partners'}
          </h2>
          <p style="color: var(--text-secondary); max-width: 720px; margin: 8px auto 0 auto; font-size: 0.95rem;">
            ${isAr ? 
              'بنت شركة يمكو شراكات وثيقة وموثوقة مع كبرى المصانع والشركات العالمية المرموقة، مما مكننا من استيراد وتوطين أجود الأصناف الدوائية والمستلزمات الطبية عالية الطلب.' : 
              'UMCO has established strong partnerships with renowned international manufacturers, allowing us to import high-demand medical products and equipment.'
            }
          </p>
        </div>

        <div class="partners-layout">
          <!-- Left: Big Partners Visual Graphic -->
          <div>
            <img src="/wp-content/uploads/2026/07/our-partners-new.avif" alt="Our Partners UMCO" class="partners-banner-img" />
          </div>

          <!-- Right: Two Groups of Partner Logos -->
          <div>
            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                ${isAr ? 'شركاء المستحضرات الصيدلانية (Pharmaceuticals Partners)' : 'Pharmaceuticals Partners'}
              </h3>
              <div class="partners-logos-grid">
                ${pharmaPartners.map(p => `
                  <div class="partner-logo-box">
                    <img src="${p}" alt="Pharma Partner Logo" class="partner-logo-img" />
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                ${isAr ? 'شركاء المستلزمات والتجهيزات الطبية (Medical Appliances Partners)' : 'Medical Appliances Partners'}
              </h3>
              <div class="partners-logos-grid">
                ${medPartners.map(p => `
                  <div class="partner-logo-box">
                    <img src="${p}" alt="Medical Partner Logo" class="partner-logo-img" />
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 6. Complete About Us Section (Introduction, Facilities, Plan, Certificates Lightbox, Leadership Team)
function renderAboutFullSection() {
  const isAr = State.lang === 'ar';
  return `
    <section id="about" class="section" style="background: #FFFFFF; border-top: 1px solid var(--border-color);">
      <div class="container">
        <!-- 1. Introduction -->
        <div id="about-intro" style="margin-bottom: 50px;">
          <div class="umco-ornament-divider">
            <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="" class="umco-ornament-img" />
          </div>
          <div style="text-align: center; margin-bottom: 30px;">
            <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
              ${isAr ? 'الصناعات الدوائية والطبية' : 'Pharmaceutical Industries'}
            </span>
            <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
              ${isAr ? 'نبذة عن شركة يمكو للصناعات الدوائية' : 'Introduction to UMCO Pharmaceuticals'}
            </h2>
          </div>

          <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center;">
            <div style="line-height: 1.85; color: var(--text-secondary); font-size: 0.98rem;">
              <p style="margin-bottom: 16px;">
                ${isAr ? 
                  'تعد <strong style="color:var(--primary-navy);">شركة يمكو للصناعات الدوائية</strong> من كبرى الشركات الرائدة والموثوقة في الجمهورية اليمنية، وهي إحدى شركات <strong style="color:var(--umco-red);">مجموعة يمكو للصناعات الطبية والتجارية</strong>، المكرسة لتطوير خدمات الرعاية الصحية وتوفير المنتجات الدوائية البشرية وفق أحدث المعايير الدولية.' :
                  'UMCO Pharmaceuticals is a leading and trusted medical company and industry in Yemen, subsidiary of UMCO for Medical & Trading Industries, dedicated to improving healthcare services and human medical products in the Republic of Yemen.'
                }
              </p>
              <p style="margin-bottom: 16px;">
                ${isAr ? 
                  'يمتد تاريخنا لأكثر من <span style="color:var(--umco-red); font-weight:800;">20 عاماً منذ تأسيسنا عام 2004 في صنعاء</span>، حيث أصبحت يمكو اسماً مرموقاً في الصناعة الدوائية يحظى بثقة الأطباء والصيادلة والمستشفيات، نظراً لالتزامنا التام بالجودة والتميز العلاجي.' :
                  'With a history spanning <span style="color:var(--umco-red); font-weight:800;">over 20 years since our establishment in 2004 in Sana’a, Yemen</span>, we have become a renowned name in the industry, known for our commitment to excellence and customer satisfaction.'
                }
              </p>
              <p style="margin-bottom: 16px;">
                ${isAr ? 
                  'لخدمة عملائنا في كافة أرجاء اليمن، قمنا بإنشاء فروع استراتيجية رئيسية في <strong style="color:var(--primary-navy);">المكلا وعدن والحديدة وتعز وإب ومأرب وذمار وصعدة</strong>. كما يدعم التزامنا بالتسليم الفوري أسطول توزيع متكامل يضم <span style="color:var(--umco-red); font-weight:800;">أكثر من 20 شاحنة ومركبة نقل مجهزة</span> تضمن وصول الأدوية بأمان حتى لأبعد القرى والمناطق الريفية.' :
                  'To better serve our clients across Yemen, we have established distribution branches in Sana’a, Mukalla, Aden, Taiz, Ibb, Hodeidah, Mareb, Saada, and Dhamar. Our prompt delivery is powered by a fleet of more than 20 specialized distribution vehicles delivering supplies even to remote rural areas.'
                }
              </p>
            </div>
            <div>
              <img src="/wp-content/uploads/2026/07/home-image3.avif" alt="UMCO Company Profile" style="width: 100%; border-radius: var(--radius-xl); box-shadow: 0 16px 36px rgba(0,0,0,0.12);" />
            </div>
          </div>
        </div>

        <!-- 2. Vision, Mission, Facilities, Expansion Plan, Activities -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 50px;">
          <!-- Vision & Mission -->
          <div id="vision-mission" style="background: var(--bg-card-subtle); padding: 28px; border-radius: var(--radius-lg); border-top: 4px solid var(--umco-red);">
            <div style="font-size: 2rem; margin-bottom: 10px;">🎯</div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">
              ${isAr ? 'الرؤية والرسالة المؤسسية' : 'Vision & Mission'}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
              ${isAr ? 
                '<strong>رسالتنا:</strong> تقديم مستحضرات طبية ودوائية عالية الجودة تسهم بفاعلية في سلامة وصحة المرضى والكوادر الطبية، متجاوزين أعلى المعايير الدستورية العالمية.<br/><br/><strong>رؤيتنا:</strong> الريادة في تحسين الرعاية الصحية في اليمن عبر التصنيع المحلي المؤتمت وتوطين التكنولوجيا الصيدلانية الحديثة.' :
                '<strong>Our Mission:</strong> To provide high-quality medical products that contribute to the well-being of patients and healthcare professionals, exceeding international standards.<br/><br/><strong>Our Vision:</strong> To improve healthcare services in Yemen through advanced localized pharmaceutical industries.'
              }
            </p>
          </div>

          <!-- Facilities -->
          <div id="facilities" style="background: var(--bg-card-subtle); padding: 28px; border-radius: var(--radius-lg); border-top: 4px solid #0284C7;">
            <div style="font-size: 2rem; margin-bottom: 10px;">🏭</div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">
              ${isAr ? 'منشآتنا ومصانعنا المتطورة' : 'Our Facilities'}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
              ${isAr ? 
                'تضم منشآت يمكو <strong style="color:var(--primary-navy);">ثلاثة خطوط إنتاج آلية بالكامل</strong> ومختبر رقابة جودة وأبحاث متطوراً مجهزاً بأحدث الأجهزة التحليلية، يشرف عليه كادر من خيرة الصيادلة والكيميائيين ذوي الخبرة العالية لإجراء الفحوصات الفيزيائية والكيميائية والميكروبيولوجية الدقيقة.' :
                'UMCO boasts state-of-the-art facilities with three full auto production lines and a well-equipped laboratory staffed by highly educated specialists for rigorous QA/QC testing according to international pharmacopeia.'
              }
            </p>
          </div>

          <!-- Expansion Plan -->
          <div id="plan" style="background: var(--bg-card-subtle); padding: 28px; border-radius: var(--radius-lg); border-top: 4px solid #10B981;">
            <div style="font-size: 2rem; margin-bottom: 10px;">🚀</div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">
              ${isAr ? 'خطتنا وتوسعاتنا المستقبلية' : 'Our Plan & Expansion'}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
              ${isAr ? 
                'كجزء من التزامنا الدائم بتلبية الاحتياجات المتنامية لقطاع الرعاية الصحية، تقوم يمكو حالياً بإنشاء <strong style="color:var(--primary-navy);">مصنع دوائي متكامل جديد</strong> يشمل خطوط إنتاج للشراب والأقراص والكبسولات، ليتكامل مع خطوطنا الحالية للمستحضرات السائلة والمراهم والكريمات.' :
                'As part of our commitment to healthcare security, we are currently constructing a new pharmaceutical factory featuring advanced production lines for syrups and oral solid tablets, expanding our existing topical and sterile capabilities.'
              }
            </p>
          </div>

          <!-- Business Activities -->
          <div id="activities" style="background: var(--bg-card-subtle); padding: 28px; border-radius: var(--radius-lg); border-top: 4px solid #F59E0B;">
            <div style="font-size: 2rem; margin-bottom: 10px;">📊</div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">
              ${isAr ? 'الأنشطة التجارية والتوريد' : 'Business Activities'}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7;">
              ${isAr ? 
                'يتجاوز حجم المبيعات السنوية لشركة يمكو <strong style="color:var(--primary-navy);">$25 مليون دولار</strong>، مما يعكس الثقة العميقة لعملائنا في القطاعين العام والخاص، بما في ذلك وكالات الأمم المتحدة والمنظمات الدولية والمشافي الكبرى (مستشفى الثورة، الجمهوري، أزال، الألماني الحديث، جامعة العلوم).' :
                'Our annual sales turnover exceeds $25 Million, reflecting the trust of our clients including UN agencies, INGOs, and leading public and private hospitals (Al-Thawra, Republican Hospital, Azal, Modern German Hospital).'
              }
            </p>
          </div>
        </div>

        <!-- 3. Why Choose Us (6 Core Commitments) -->
        <div id="why-choose-us" style="background: linear-gradient(135deg, #0A192F 0%, #1E293B 100%); border-radius: var(--radius-xl); padding: 40px; color: #FFFFFF; margin-bottom: 50px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <span style="font-size: 0.8rem; font-weight: 800; color: #FCA5A5; letter-spacing: 1px; text-transform: uppercase;">
              ${isAr ? 'التزامات المعايير الأخلاقية والمهنية الصارمة' : 'Ethical & Professional Standards'}
            </span>
            <h2 style="font-size: 2rem; font-weight: 900; color: #FFFFFF; margin-top: 6px;">
              ${isAr ? 'لماذا تختار يمكو؟ (الالتزامات الستة)' : 'Why Choose UMCO? (Our 6 Commitments)'}
            </h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
            <div style="display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-md);">
              <span style="color: #34D399; font-size: 1.25rem;">✔</span>
              <div>
                <strong>${isAr ? 'بيئة عمل آمنة وصحية ومطهرة' : 'Working conditions are safe and hygienic'}</strong>
                <p style="font-size: 0.82rem; color: #CBD5E1; margin-top: 4px;">${isAr ? 'تطبيق كامل لمعايير السلامة المهنية وممارسات التصنيع الجيد GMP.' : 'Strict adherence to cGMP and occupational safety.'}</p>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-md);">
              <span style="color: #34D399; font-size: 1.25rem;">✔</span>
              <div>
                <strong>${isAr ? 'حظر تشغيل الأطفال حظراً قاطعاً' : 'Child Labour shall not be used'}</strong>
                <p style="font-size: 0.82rem; color: #CBD5E1; margin-top: 4px;">${isAr ? 'التزام تام بالقوانين الوطنية والاتفاقيات الدولية لحقوق الطفل.' : 'Zero tolerance policy for underage employment.'}</p>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-md);">
              <span style="color: #34D399; font-size: 1.25rem;">✔</span>
              <div>
                <strong>${isAr ? 'ساعات عمل منصفة وغير مرهقة' : 'Working hours are not excessive'}</strong>
                <p style="font-size: 0.82rem; color: #CBD5E1; margin-top: 4px;">${isAr ? 'مراعاة التوازن بين العمل والحياة لجميع كوادر الشركة.' : 'Compliance with statutory labor hours and rest cycles.'}</p>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-md);">
              <span style="color: #34D399; font-size: 1.25rem;">✔</span>
              <div>
                <strong>${isAr ? 'تكافؤ الفرص وعدم التمييز' : 'No discrimination is practiced'}</strong>
                <p style="font-size: 0.82rem; color: #CBD5E1; margin-top: 4px;">${isAr ? 'العدالة في التوظيف والترقية والتقدير المهني.' : 'Equal opportunity and fair treatment for all employees.'}</p>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-md);">
              <span style="color: #34D399; font-size: 1.25rem;">✔</span>
              <div>
                <strong>${isAr ? 'تأمين وظيفي وتوظيف منتظم' : 'Regular employment is provided'}</strong>
                <p style="font-size: 0.82rem; color: #CBD5E1; margin-top: 4px;">${isAr ? 'عقود رسمية ومزايا وظيفية مستدامة لكافة الكوادر.' : 'Long-term contracts and comprehensive social benefits.'}</p>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start; background: rgba(255,255,255,0.06); padding: 16px 20px; border-radius: var(--radius-md);">
              <span style="color: #34D399; font-size: 1.25rem;">✔</span>
              <div>
                <strong>${isAr ? 'احترام وكرامة إنسانية كاملة' : 'No harsh or inhumane treatment is allowed'}</strong>
                <p style="font-size: 0.82rem; color: #CBD5E1; margin-top: 4px;">${isAr ? 'بيئة تسودها الثقة المتبادلة والكرامة والأخلاق المهنية السامية.' : 'Workplace culture anchored in dignity, respect, and trust.'}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Our Certificates Lightbox Gallery -->
        <div id="certificates" style="margin-bottom: 50px;">
          <div class="umco-ornament-divider">
            <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="" class="umco-ornament-img" />
          </div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
              ${isAr ? 'التراخيص والاعتمادات الرسمية' : 'Official Registrations & Licenses'}
            </span>
            <h2 style="font-size: 2.1rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
              ${isAr ? 'شهاداتنا وتراخيصنا المعتمدة' : 'Our Official Certificates'}
            </h2>
            <p style="color: var(--text-secondary); max-width: 680px; margin: 8px auto 0 auto; font-size: 0.95rem;">
              ${isAr ? 'انقر على أي شهادة لمعاينتها بالحجم الكامل والتحقق من مصادقتها الرسمية' : 'Click on any certificate to view high-resolution license details'}
            </p>
          </div>

          <div class="certs-gallery-grid">
            <!-- Cert 1 -->
            <div class="cert-card" onclick="openCertLightbox('/wp-content/uploads/2024/05/cert1-jpg.webp', '${isAr ? 'ترخيص وزارة الصحة العامة والسكان' : 'Ministry of Public Health License'}')">
              <img src="/wp-content/uploads/2024/05/cert1-jpg.webp" alt="License 1" class="cert-thumb" />
              <div class="cert-caption">
                <strong>${isAr ? 'ترخيص وزارة الصحة العامة والسكان' : 'Ministry of Public Health'}</strong>
                <small>${isAr ? 'ترخيص مزاولة نشاط التصنيع الدوائي البشري' : 'Pharmaceutical Manufacturing License'}</small>
              </div>
            </div>

            <!-- Cert 2 -->
            <div class="cert-card" onclick="openCertLightbox('/wp-content/uploads/2024/05/cert2-jpg.webp', '${isAr ? 'شهادة الهيئة العليا للأدوية والمستلزمات الطبية' : 'Supreme Board of Drugs Certificate'}')">
              <img src="/wp-content/uploads/2024/05/cert2-jpg.webp" alt="License 2" class="cert-thumb" />
              <div class="cert-caption">
                <strong>${isAr ? 'الهيئة العليا للأدوية والمستلزمات الطبية' : 'Supreme Board of Drugs'}</strong>
                <small>${isAr ? 'تسجيل واعتماد المصنع والخطوط الإنتاجية' : 'Facility & Line Registration'}</small>
              </div>
            </div>

            <!-- Cert 3 -->
            <div class="cert-card" onclick="openCertLightbox('/wp-content/uploads/2024/05/cert3-jpg.webp', '${isAr ? 'ترخيص وزارة الصناعة والتجارة' : 'Ministry of Industry & Trade'}')">
              <img src="/wp-content/uploads/2024/05/cert3-jpg.webp" alt="License 3" class="cert-thumb" />
              <div class="cert-caption">
                <strong>${isAr ? 'وزارة الصناعة والتجارة' : 'Ministry of Industry & Trade'}</strong>
                <small>${isAr ? 'سجل المنشأة الصناعية ومطابقة المواصفات' : 'Industrial Registry & Compliance'}</small>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Leadership Team -->
        <div id="leadership" class="leadership-section" style="padding-top: 20px;">
          <div class="umco-ornament-divider">
            <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="" class="umco-ornament-img" />
          </div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
              ${isAr ? 'القيادة التنفيذية والإشراف الصيدلاني' : 'Executive Management'}
            </span>
            <h2 style="font-size: 2.1rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
              ${isAr ? 'فريق قيادة شركة يمكو' : 'Our Leadership Team'}
            </h2>
          </div>

          <div class="leadership-layout">
            <div>
              <img src="/wp-content/uploads/2024/05/our-team-new.avif" alt="UMCO Leadership Team" class="leadership-img" />
            </div>
            <div style="line-height: 1.85; color: var(--text-secondary); font-size: 0.98rem;">
              <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--primary-navy); margin-bottom: 4px;">
                ${isAr ? 'الأستاذ أسامة عبد الله إسحاق' : 'Mr. Osamah Abdullah Eshaq'}
              </h3>
              <div style="color: var(--umco-red); font-weight: 700; margin-bottom: 16px; font-size: 0.92rem;">
                ${isAr ? 'المدير التنفيذي - شركة يمكو للصناعات الدوائية' : 'Executive Manager - UMCO Pharmaceuticals'}
              </div>
              <p style="margin-bottom: 16px;">
                ${isAr ? 
                  'يحظى الأستاذ أسامة عبد الله إسحاق بخبرة واسعة ومتميزة في قطاع الرعاية الصحية والصناعات الصيدلانية، ويقود الشركة برؤية طموحة نحو ترسيخ معايير الجودة العالمية، وتوسيع قاعدة الإنتاج والتوزيع لخدمة المنظومة الصحية اليمنية بكفاءة واقتدار.' :
                  'We are privileged to have Mr. Osamah Abdullah Eshaq serving as the Executive Manager. With his extensive experience and expertise in the healthcare sector, Mr. Osamah Abdullah Eshaq plays a pivotal role in guiding our company toward achieving its goals and upholding our commitment to delivering exceptional medical products.'
                }
              </p>
              <blockquote style="border-right: 4px solid var(--umco-red); padding: 14px 20px; background: var(--bg-card-subtle); border-radius: var(--radius-md); font-style: italic; color: var(--primary-navy); margin-top: 14px;">
                ${isAr ? 
                  '«إن هدفنا الأسمى في يمكو يتجاوز مجرد الإنتاج الدوائي إلى بناء منظومة وطنية للأمن الدوائي تضمن توفير أرقى معايير الشفاء والسلامة لكل مريض يمني.»' :
                  '“Our highest objective at UMCO goes beyond manufacturing to safeguarding national pharmaceutical security, ensuring the highest efficacy and safety for every patient.”'
                }
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 7. Contact Us Section (Branches Phone Directory & Direct Inquiry Form)
function renderContactUsSection() {
  const isAr = State.lang === 'ar';
  const branchContacts = [
    { city: isAr ? 'صنعاء (المركز الرئيسي)' : 'Sana’a (Headquarters)', phone: '+967 773335372' },
    { city: isAr ? 'تعز' : 'Taiz', phone: '+967 73336315' },
    { city: isAr ? 'إب' : 'Ibb', phone: '+967 773336315' },
    { city: isAr ? 'الحديدة' : 'Hodeidah', phone: '+967 773378314' },
    { city: isAr ? 'عدن' : 'Aden', phone: '+967 773339362' },
    { city: isAr ? 'مأرب' : 'Mareb', phone: '+967 773339362' },
    { city: isAr ? 'حضرموت (المكلا)' : 'Hadhramout (Mukalla)', phone: '+967 7777585205' },
    { city: isAr ? 'صعدة' : 'Saada', phone: '+967 773378314' },
    { city: isAr ? 'ذمار' : 'Dhamar', phone: '+967 773336315' }
  ];

  return `
    <section id="contact-us" class="section" style="background: #F8FAFC; border-top: 1px solid var(--border-color);">
      <div class="container">
        <!-- Ornament -->
        <div class="umco-ornament-divider">
          <img src="/wp-content/uploads/2024/07/umco-icon3.png" alt="" class="umco-ornament-img" />
        </div>
        <div style="text-align: center; margin-bottom: 36px;">
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--umco-red); letter-spacing: 1px; text-transform: uppercase;">
            ${isAr ? 'خدمة العملاء والمشافي' : 'Customer & Hospital Support'}
          </span>
          <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--primary-navy); margin-top: 6px;">
            ${isAr ? 'تواصل معنا واطلب عروض الأسعار' : 'Contact Us & Request a Quote'}
          </h2>
          <p style="color: var(--text-secondary); max-width: 650px; margin: 8px auto 0 auto; font-size: 0.95rem;">
            ${isAr ? 'فريقنا الطبي والتجاري مستعد على مدار الساعة للإجابة عن استفساراتكم وتلبية طلبيات المشافي والمراكز الطبية' : 'Our medical and sales specialists are ready to assist with quotations and hospital supply agreements'}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: flex-start;">
          <!-- Left: Address & Branches Phone Directory -->
          <div style="background: #FFFFFF; border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 32px; box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--umco-red);">📍</span>
              <span>${isAr ? 'بيانات الاتصال الرئيسية' : 'Primary Contact Info'}</span>
            </h3>

            <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; font-size: 0.92rem; color: var(--text-secondary);">
              <div style="display: flex; gap: 10px;">
                <span style="font-weight: 700; color: var(--primary-navy); min-width: 90px;">${isAr ? 'العنوان:' : 'Address:'}</span>
                <span>Haddah, Street No.4, Building No. 64, next to Kamran Co., Sana’a - Yemen</span>
              </div>
              <div style="display: flex; gap: 10px;">
                <span style="font-weight: 700; color: var(--primary-navy); min-width: 90px;">${isAr ? 'الهاتف:' : 'Telephone:'}</span>
                <span dir="ltr">+967 01 414035 / 414025 / 414015</span>
              </div>
              <div style="display: flex; gap: 10px;">
                <span style="font-weight: 700; color: var(--primary-navy); min-width: 90px;">${isAr ? 'الفاكس:' : 'Fax:'}</span>
                <span dir="ltr">+967 01 411992</span>
              </div>
              <div style="display: flex; gap: 10px;">
                <span style="font-weight: 700; color: var(--primary-navy); min-width: 90px;">${isAr ? 'الإيميل:' : 'Email:'}</span>
                <span>info@umcopharma.com / umco.medical@gmail.com</span>
              </div>
            </div>

            <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 14px; border-top: 1px solid var(--border-color); padding-top: 16px;">
              ${isAr ? 'أرقام هواتف فروع التوزيع والتسويق:' : 'Marketing & Distributing Branches Directory:'}
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.88rem;">
              ${branchContacts.map(b => `
                <div style="background: var(--bg-card-subtle); padding: 8px 12px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
                  <strong style="color: var(--primary-navy);">${b.city}</strong>
                  <a href="tel:${b.phone.replace(/\s+/g, '')}" dir="ltr" style="color: var(--umco-red); font-weight: 700; text-decoration: none;">${b.phone}</a>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right: Instant Inquiry / Contact Form -->
          <div style="background: #FFFFFF; border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 32px; box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">
              ${isAr ? 'أرسل رسالة مباشرة أو استفساراً' : 'Send Direct Inquiry / Message'}
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px;">
              ${isAr ? 'سيقوم مسؤول المبيعات أو الشؤون الطبية بالرد عليكم خلال أقل من ساعتين.' : 'Our sales and medical affairs specialists will reply promptly.'}
            </p>

            <form onsubmit="handleContactUsSubmit(event)">
              <div class="form-group" style="margin-bottom: 14px;">
                <label class="form-label">${isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                <input type="text" name="name" required class="form-control" placeholder="${isAr ? 'د. فلان الفلاني' : 'Dr. John Doe'}" />
              </div>
              <div class="form-group" style="margin-bottom: 14px;">
                <label class="form-label">${isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                <input type="email" name="email" required class="form-control" placeholder="doctor@hospital.org" />
              </div>
              <div class="form-group" style="margin-bottom: 14px;">
                <label class="form-label">${isAr ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'}</label>
                <input type="tel" name="phone" class="form-control" placeholder="+967 77..." />
              </div>
              <div class="form-group" style="margin-bottom: 18px;">
                <label class="form-label">${isAr ? 'نص الرسالة أو طلب الاستفسار *' : 'Message / Inquiry Details *'}</label>
                <textarea name="message" required class="form-control" rows="4" placeholder="${isAr ? 'اكتب استفسارك أو قائمة الأصناف المطلوبة للمشفى...' : 'Enter your inquiry or request for products...'}"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${isAr ? 'إرسال الرسالة الآن' : 'Send Message Now'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- 10. ENTERPRISE PORTAL VIEW (HR, TASKS, MARKETING, NOTIFICATIONS, IT CUSTOMIZER) ---
function renderPortalView() {
  if (!State.user) return '';
  const isAr = State.lang === 'ar';
  const role = State.user.role;
  const isAdminOrIT = role === 'super_admin' || role === 'it_admin';
  const isHR = isAdminOrIT || role === 'hr_manager';
  const isMarketing = isAdminOrIT || role === 'marketing';

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

          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            ${isAdminOrIT ? `
              <button class="btn btn-outline btn-sm" onclick="switchPortalTab('branding')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <span>${t('tab_branding')}</span>
              </button>
              <button class="btn btn-outline btn-sm" onclick="openBranchCreateModal()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/><line x1="12" y1="7" x2="12" y2="13"/><line x1="9" y1="10" x2="15" y2="10"/></svg>
                <span>${t('btn_add_branch')}</span>
              </button>
            ` : ''}

            ${isMarketing ? `
              <button class="btn btn-primary btn-sm" onclick="openModal('create-announcement-modal')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <span>${t('btn_add_announcement')}</span>
              </button>
              <button class="btn btn-outline btn-sm" onclick="openModal('create-product-modal')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span>${t('btn_add_product')}</span>
              </button>
            ` : ''}

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

          ${isAdminOrIT ? `
            <button class="portal-tab-item ${State.portalTab === 'branding' ? 'active' : ''}" onclick="switchPortalTab('branding')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 0 0 0-20"/><circle cx="12" cy="12" r="4"/></svg>
              <span>${t('tab_branding')}</span>
            </button>
            <button class="portal-tab-item ${State.portalTab === 'branches_mgmt' ? 'active' : ''}" onclick="switchPortalTab('branches_mgmt')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${t('tab_branches_mgmt')} (${State.branches.length})</span>
            </button>
          ` : ''}
          
          ${isMarketing ? `
            <button class="portal-tab-item ${State.portalTab === 'inquiries' ? 'active' : ''}" onclick="switchPortalTab('inquiries')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>${t('tab_inquiries')} (${State.inquiries.length})</span>
            </button>
            <button class="portal-tab-item ${State.portalTab === 'campaigns' ? 'active' : ''}" onclick="switchPortalTab('campaigns')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>${t('tab_campaigns')} (${State.announcements.length})</span>
            </button>
            <button class="portal-tab-item ${State.portalTab === 'products_mgmt' ? 'active' : ''}" onclick="switchPortalTab('products_mgmt')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
              <span>${t('tab_products_mgmt')} (${State.products.length})</span>
            </button>
          ` : ''}

          ${(isHR || isMarketing) ? `
            <button class="portal-tab-item ${State.portalTab === 'quotes' ? 'active' : ''}" onclick="switchPortalTab('quotes')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>${t('tab_rfq_review')} (${State.quotes.length})</span>
            </button>
          ` : ''}

          ${isHR ? `
            <button class="portal-tab-item ${State.portalTab === 'employees' ? 'active' : ''}" onclick="switchPortalTab('employees')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>${t('tab_employees')} (${State.employees.length})</span>
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
          ${State.portalTab === 'branding' ? renderBrandingTab() : ''}
          ${State.portalTab === 'branches_mgmt' ? renderBranchesMgmtTab() : ''}
          ${State.portalTab === 'inquiries' ? renderInquiriesTab() : ''}
          ${State.portalTab === 'campaigns' ? renderCampaignsTab() : ''}
          ${State.portalTab === 'products_mgmt' ? renderProductsMgmtTab() : ''}
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

// Marketing Inquiries Tab
function renderInquiriesTab() {
  const isAr = State.lang === 'ar';
  const inquiries = State.inquiries || [];
  const pendingCount = inquiries.filter(i => i.status === 'pending').length;
  const repliedCount = inquiries.filter(i => i.status === 'replied').length;

  return `
    <div>
      <div class="stats-cards-grid">
        <div class="stat-card">
          <div class="stat-card-icon stat-icon-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${inquiries.length}</span>
            <span class="stat-card-label">${isAr ? 'إجمالي الاستفسارات' : 'Total Inquiries'}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-icon stat-icon-amber">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${pendingCount}</span>
            <span class="stat-card-label">${isAr ? 'استفسارات بانتظار الرد' : 'Pending Response'}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-card-icon stat-icon-emerald">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div class="stat-card-info">
            <span class="stat-card-value">${repliedCount}</span>
            <span class="stat-card-label">${isAr ? 'تم الرد وتقديم المشورة' : 'Replied'}</span>
          </div>
        </div>
      </div>

      <div class="data-table-card">
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>${isAr ? 'العميل / المستفسر' : 'Customer'}</th>
                <th>${isAr ? 'الصفة' : 'Role'}</th>
                <th>${isAr ? 'رقم الهاتف' : 'Phone'}</th>
                <th>${isAr ? 'التصنيف' : 'Category'}</th>
                <th>${isAr ? 'الرسالة / الاستفسار' : 'Inquiry Message'}</th>
                <th>${isAr ? 'حالة الرد' : 'Status'}</th>
                <th>${isAr ? 'رد مسؤول التسويق' : 'Marketing Reply'}</th>
                <th>${isAr ? 'إجراء' : 'Action'}</th>
              </tr>
            </thead>
            <tbody>
              ${inquiries.length === 0 ? `
                <tr>
                  <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-muted);">
                    ${isAr ? 'لا توجد استفسارات واردة حالياً' : 'No customer inquiries found'}
                  </td>
                </tr>
              ` : inquiries.map(iq => `
                <tr>
                  <td>
                    <strong style="color: var(--primary-navy);">${iq.customer_name}</strong>
                    ${iq.email ? `<div style="font-size: 0.78rem; color: var(--text-muted);">${iq.email}</div>` : ''}
                  </td>
                  <td><span class="spec-chip">${iq.customer_role}</span></td>
                  <td><a href="tel:${iq.phone}" style="color: var(--umco-red); font-weight: 700; direction: ltr; display: inline-block;">${iq.phone}</a></td>
                  <td><span class="spec-chip">${iq.category}</span></td>
                  <td style="max-width: 260px; font-size: 0.88rem; line-height: 1.5;">${iq.message}</td>
                  <td>
                    <span class="status-badge ${iq.status === 'replied' ? 'status-active' : 'kanban-badge-todo'}">
                      ${iq.status === 'replied' ? (isAr ? 'تم الرد' : 'Replied') : (isAr ? 'قيد الانتظار' : 'Pending')}
                    </span>
                  </td>
                  <td style="max-width: 260px; font-size: 0.85rem; color: var(--accent-emerald);">
                    ${iq.reply_ar || iq.reply_en || '<em style="color: var(--text-muted);">' + (isAr ? 'لم يتم الرد بعد' : 'Not replied yet') + '</em>'}
                  </td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="openInquiryReplyModal(${iq.id})">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      <span>${isAr ? 'رد' : 'Reply'}</span>
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

// Marketing Announcements & Campaigns Tab
function renderCampaignsTab() {
  const isAr = State.lang === 'ar';
  const announcements = State.announcements || [];

  return `
    <div>
      <div class="table-header-toolbar" style="background: #fff; border-radius: var(--radius-lg); margin-bottom: 24px; border: 1px solid var(--border-color); padding: 20px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy);">${isAr ? 'إدارة ونشر الحملات والإعلانات الطبية' : 'Medical Campaigns & Announcements Hub'}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${isAr ? 'نشر وتحديث الحملات التوعوية، التدشينات الدوائية، وإعلانات المستشفيات على واجهة الموقع.' : 'Publish announcements, training events, and promotional releases.'}</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openModal('create-announcement-modal')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>${t('btn_add_announcement')}</span>
        </button>
      </div>

      <div class="announcements-grid">
        ${announcements.map(a => `
          <div class="announcement-card">
            <div class="announcement-img-wrap">
              <img src="${a.image_url || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800'}" alt="${a.title_en}" class="announcement-img" />
              <span class="announcement-badge">${isAr ? (a.target_audience || 'المجتمع الطبي') : (a.target_audience || 'Medical')}</span>
            </div>
            <div class="announcement-body">
              <span style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">📅 ${new Date(a.created_at).toLocaleDateString(isAr ? 'ar-YE' : 'en-US')}</span>
              <h3 class="announcement-title">${isAr ? a.title_ar : a.title_en}</h3>
              <p class="announcement-content">${isAr ? a.content_ar : a.content_en}</p>
              <div style="margin-top: auto; display: flex; gap: 8px;">
                <button class="btn btn-outline-red btn-sm" style="width: 100%;" onclick="deleteAnnouncement(${a.id})">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  <span>${isAr ? 'حذف الحملة' : 'Delete'}</span>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Marketing Products Management Tab
function renderProductsMgmtTab() {
  const isAr = State.lang === 'ar';
  const products = State.products || [];

  return `
    <div>
      <div class="table-header-toolbar" style="background: #fff; border-radius: var(--radius-lg); margin-bottom: 24px; border: 1px solid var(--border-color); padding: 20px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy);">${isAr ? 'إدارة كتالوج المستحضرات الصيدلانية' : 'Product Formulary Management'}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${isAr ? 'إضافة وتحديث المنتجات الدوائية، التركيبات، والجرعات على الكتالوج العام.' : 'Manage medicines, active APIs, and monographs published on the portal.'}</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openModal('create-product-modal')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>${t('btn_add_product')}</span>
        </button>
      </div>

      <div class="data-table-card">
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>${isAr ? 'كود الصنف' : 'SKU'}</th>
                <th>${isAr ? 'الاسم التجاري' : 'Trade Name'}</th>
                <th>${isAr ? 'المادة الفعالة' : 'Scientific Name'}</th>
                <th>${isAr ? 'الشكل والتركيز' : 'Dosage & Strength'}</th>
                <th>${isAr ? 'القسم' : 'Category'}</th>
                <th>${isAr ? 'العبوة' : 'Packaging'}</th>
                <th>${isAr ? 'إجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              ${products.map(p => `
                <tr>
                  <td><strong style="color: var(--primary-navy);">${p.sku}</strong></td>
                  <td>
                    <strong style="color: var(--primary-crimson);">${isAr ? p.trade_name_ar : p.trade_name_en}</strong>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">${isAr ? p.trade_name_en : p.trade_name_ar}</div>
                  </td>
                  <td>${p.scientific_name || '-'}</td>
                  <td>
                    <span class="spec-chip">${isAr ? p.dosage_form_ar : p.dosage_form_en}</span>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">${p.concentration || ''}</div>
                  </td>
                  <td>${isAr ? p.category_name_ar : p.category_name_en}</td>
                  <td>${p.package_size || '-'}</td>
                  <td>
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-outline btn-sm" onclick="openProductQuickView(${p.id})" title="${t('btn_quick_view')}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      </button>
                      <button class="btn btn-outline-red btn-sm" onclick="deleteProduct(${p.id})" title="Delete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
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

// HR Employee Directory Tab (كل موظف يدخله الـ HR)
function renderEmployeesTab() {
  const isAr = State.lang === 'ar';
  return `
    <div>
      <div class="table-header-toolbar" style="background: #fff; border-radius: var(--radius-lg); margin-bottom: 24px; border: 1px solid var(--border-color);">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy);">${isAr ? 'سجل كوادر وموظفي شركة يمكو الدوائية' : 'YUMCO Employee Personnel Records'}</h3>
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
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-outline btn-sm" onclick="assignTaskToEmployee(${emp.user_id}, '${emp.name_ar}')">
                        ${isAr ? 'إسناد مهمة' : 'Assign Task'}
                      </button>
                      <button class="btn btn-outline-red btn-sm" onclick="deleteEmployeeHandler(${emp.id})" title="${isAr ? 'حذف الموظف' : 'Delete Employee'}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
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
              <div class="logo-badge">YM</div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 1.3rem; font-weight: 800; color: #fff;">${isAr ? 'يمكو للصناعات الدوائية' : 'YUMCO PHARMACEUTICALS'}</span>
                <span style="font-size: 0.8rem; color: #F87171;">${isAr ? 'شركة يمكو للصناعات الطبية والدوائية' : 'Medical & Pharma Industries'}</span>
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
              <li><a href="#campaigns" class="footer-link">${t('nav_campaigns')}</a></li>
              <li><a href="#products" class="footer-link">${t('nav_products')}</a></li>
              <li><a href="#clinical" class="footer-link">${t('nav_clinical')}</a></li>
              <li><a href="#manufacturing" class="footer-link">${t('nav_manufacturing')}</a></li>
              <li><a href="#branches" class="footer-link">${t('nav_branches')}</a></li>
              <li><a href="#rfq" class="footer-link">${t('nav_rfq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">${isAr ? 'المنتجات الرئيسية' : 'Key Formulations'}</h4>
            <ul class="footer-links-list">
              <li><a href="#products" class="footer-link">Femicare Povidone Iodine</a></li>
              <li><a href="#products" class="footer-link">Yumco Cort-N Ointment</a></li>
              <li><a href="#products" class="footer-link">Yumco Thrin Cream 5%</a></li>
              <li><a href="#products" class="footer-link">Yumco Scrub Surgical</a></li>
              <li><a href="#products" class="footer-link">Yumco Burn Gel</a></li>
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
            © 2026 ${isAr ? 'شركة يمكو للصناعات الدوائية والطبية. كافة الحقوق محفوظة.' : 'YUMCO Pharmaceuticals & Medical Industries. All rights reserved.'}
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
              - <strong>IT Director:</strong> it@umcopharma.com | it123<br/>
              - <strong>Super Admin:</strong> admin@umcopharma.com | admin123<br/>
              - <strong>Marketing:</strong> marketing@umcopharma.com | marketing123<br/>
              - <strong>HR Manager:</strong> hr@umcopharma.com | hr123<br/>
              - <strong>Engineer:</strong> tariq.saleh@umcopharma.com | emp123
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('login-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${t('btn_login')}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Create Announcement Modal (Marketing / Admin) -->
    <div id="create-announcement-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 640px;">
        <div class="modal-header">
          <h3 class="modal-title">${t('btn_add_announcement')}</h3>
          <button class="btn btn-icon-only" onclick="closeModal('create-announcement-modal')">✕</button>
        </div>
        <form onsubmit="submitCreateAnnouncement(event)">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">${isAr ? 'عنوان الإعلان / الحملة بالعربية *' : 'Campaign Title (Arabic) *'}</label>
              <input type="text" name="title_ar" required class="form-control" placeholder="حملة التوعية بالمطهرات الجراحية..." />
            </div>
            <div class="form-group">
              <label class="form-label">${isAr ? 'عنوان الحملة بالإنجليزية *' : 'Campaign Title (English) *'}</label>
              <input type="text" name="title_en" required class="form-control" placeholder="Hospital Infection Control Campaign..." />
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'نوع الحملة' : 'Campaign Type'}</label>
                <select name="campaign_type" class="form-control">
                  <option value="medical_campaign">${isAr ? 'حملة طبية توعوية' : 'Medical Campaign'}</option>
                  <option value="product_launch">${isAr ? 'تدشين مستحضر جديد' : 'Product Launch'}</option>
                  <option value="conference">${isAr ? 'مؤتمر / ورشة عمل' : 'Conference / Workshop'}</option>
                  <option value="general_announcement">${isAr ? 'إعلان عام' : 'General Announcement'}</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'الجمهور المستهدف' : 'Target Audience'}</label>
                <input type="text" name="target_audience" class="form-control" placeholder="${isAr ? 'المشافي، الصيادلة، الأطباء' : 'Hospitals, Doctors, Pharmacists'}" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط صورة البانر (URL)' : 'Banner Image URL'}</label>
              <input type="url" name="image_url" class="form-control" value="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'نص وتفاصيل الإعلان بالعربية *' : 'Content (Arabic) *'}</label>
              <textarea name="content_ar" rows="3" required class="form-control" placeholder="اكتب تفاصيل الحملة الطبية وأهدافها هنا..."></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'نص وتفاصيل الإعلان بالإنجليزية' : 'Content (English)'}</label>
              <textarea name="content_en" rows="2" class="form-control"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('create-announcement-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${isAr ? 'نشر الإعلان فوراً' : 'Publish Announcement'}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Create Product Modal (Marketing / Admin) -->
    <div id="create-product-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 680px;">
        <div class="modal-header">
          <h3 class="modal-title">${t('btn_add_product')}</h3>
          <button class="btn btn-icon-only" onclick="closeModal('create-product-modal')">✕</button>
        </div>
        <form onsubmit="submitCreateProduct(event)">
          <div class="modal-body">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الاسم التجاري بالعربية *' : 'Trade Name (AR) *'}</label>
                <input type="text" name="trade_name_ar" required class="form-control" placeholder="يمكو سكراب غسول" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'الاسم التجاري بالإنجليزية *' : 'Trade Name (EN) *'}</label>
                <input type="text" name="trade_name_en" required class="form-control" placeholder="Yumco Scrub Surgical" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'المادة العلمية الفعالة (API) *' : 'Scientific Name *'}</label>
                <input type="text" name="scientific_name" required class="form-control" placeholder="Chlorhexidine Gluconate 4%" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'التصنيف الصيدلاني *' : 'Category *'}</label>
                <select name="category_id" required class="form-control">
                  ${State.categories.map(c => `<option value="${c.id}">${isAr ? c.name_ar : c.name_en}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الشكل الصيدلاني *' : 'Dosage Form *'}</label>
                <input type="text" name="dosage_form_ar" required class="form-control" placeholder="محلول جراحي رغوي" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'الشكل بالإنجليزية' : 'Dosage Form (EN)'}</label>
                <input type="text" name="dosage_form_en" class="form-control" placeholder="Surgical Foaming Solution" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'التركيز' : 'Strength'}</label>
                <input type="text" name="concentration" class="form-control" placeholder="4% w/v" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'حجم العبوة' : 'Package Size'}</label>
                <input type="text" name="package_size" class="form-control" placeholder="عبوة 500 مل بمضخة" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط صورة المستحضر (URL)' : 'Product Image URL'}</label>
              <input type="url" name="image_url" class="form-control" value="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'دواعي الاستعمال المعتمدة' : 'Clinical Indications'}</label>
              <textarea name="indications_ar" rows="2" class="form-control" placeholder="تطهير الأيدي والجلد قبل العمليات الجراحية..."></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'طريقة الاستخدام المقررة' : 'Usage Instructions'}</label>
              <textarea name="usage_instructions_ar" rows="2" class="form-control" placeholder="يفرك الجلد لمدة دقيقتين ثم يغسل بالماء المعقم..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('create-product-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${isAr ? 'حفظ وإدراج في الكتالوج' : 'Add to Formulary'}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Inquiry Reply Modal (Marketing / Admin) -->
    <div id="inquiry-reply-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 550px;" id="inquiry-reply-content">
        <!-- Rendered dynamically -->
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

    <!-- Create / Edit Branch Modal (Admin & IT Director) -->
    <div id="create-branch-modal" class="modal-backdrop">
      <div class="modal-container" style="max-width: 680px;">
        <div class="modal-header">
          <h3 class="modal-title" id="branch-modal-title">${isAr ? 'إضافة / تعديل فرع لشركة يمكو' : 'Add / Edit YUMCO Branch'}</h3>
          <button class="btn btn-icon-only" onclick="closeModal('create-branch-modal')">✕</button>
        </div>
        <form id="branch-modal-form" onsubmit="submitBranchForm(event)">
          <input type="hidden" name="branch_id" id="branch-form-id" value="" />
          <div class="modal-body">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم المدينة بالعربية *' : 'City (Arabic) *'}</label>
                <input type="text" name="city_ar" id="branch-city-ar" required class="form-control" placeholder="صنعاء / عدن / تعز..." />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'اسم المدينة بالإنجليزية *' : 'City (English) *'}</label>
                <input type="text" name="city_en" id="branch-city-en" required class="form-control" placeholder="Sana'a / Aden / Taiz..." />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'العنوان بالعربية *' : 'Address (Arabic) *'}</label>
                <input type="text" name="address_ar" id="branch-address-ar" required class="form-control" placeholder="الشارع العام، بجوار..." />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'العنوان بالإنجليزية' : 'Address (English)'}</label>
                <input type="text" name="address_en" id="branch-address-en" class="form-control" placeholder="Main St., Beside..." />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الهاتف الأساسي *' : 'Primary Phone *'}</label>
                <input type="text" name="phone_primary" id="branch-phone-primary" required class="form-control" placeholder="+967 1 234567" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'هاتف ثانوي' : 'Secondary Phone'}</label>
                <input type="text" name="phone_secondary" id="branch-phone-secondary" class="form-control" placeholder="+967 777 123456" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'المدير المسؤول بالعربية' : 'Manager Name (Arabic)'}</label>
                <input type="text" name="manager_name_ar" id="branch-manager-ar" class="form-control" placeholder="د. أحمد الحمادي..." />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'المدير المسؤول بالإنجليزية' : 'Manager Name (English)'}</label>
                <input type="text" name="manager_name_en" id="branch-manager-en" class="form-control" placeholder="Dr. Ahmed Al-Hammadi" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'خط العرض (Latitude GPS)' : 'Latitude (GPS)'}</label>
                <input type="number" step="0.000001" name="latitude" id="branch-lat" class="form-control" placeholder="15.3694" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'خط الطول (Longitude GPS)' : 'Longitude (GPS)'}</label>
                <input type="number" step="0.000001" name="longitude" id="branch-lng" class="form-control" placeholder="44.1910" />
              </div>
            </div>

            <div class="form-grid-2" style="align-items: center; background: #f8fafc; padding: 12px; border-radius: var(--radius-md);">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.9rem;">
                <input type="checkbox" name="is_headquarters" id="branch-is-hq" value="1" />
                <strong>${isAr ? 'هل هذا الفرع هو المقر الرئيسي العام (HQ)؟' : 'Is this Main Headquarters (HQ)?'}</strong>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.9rem;">
                <input type="checkbox" name="is_active" id="branch-is-active" value="1" checked />
                <span>${isAr ? 'الفرع نشط ومفعل حالياً' : 'Branch is currently active'}</span>
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="closeModal('create-branch-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
            <button type="submit" class="btn btn-primary">${isAr ? 'حفظ بيانات الفرع' : 'Save Branch'}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Certificate Lightbox Modal -->
    <div id="cert-lightbox-modal" class="lightbox-modal" onclick="if(event.target === this) closeCertLightbox();">
      <div class="lightbox-content">
        <button type="button" class="lightbox-close" onclick="closeCertLightbox()" title="Close">✕</button>
        <img id="cert-lightbox-img" src="" alt="Certificate" class="lightbox-img" />
        <div id="cert-lightbox-caption" style="color: #FFFFFF; margin-top: 14px; font-weight: 700; font-size: 1.05rem; text-align: center; text-shadow: 0 2px 4px rgba(0,0,0,0.8);"></div>
      </div>
    </div>

    <!-- Official Products List PDF Viewer Modal -->
    <div id="products-list-modal" class="modal-backdrop" onclick="if(event.target === this) closeProductsListModal();">
      <div class="modal-container" style="max-width: 950px; width: 95%; height: 90vh; display: flex; flex-direction: column;">
        <div class="modal-header" style="background: var(--umco-navy); color: #fff; padding: 16px 24px; border-bottom: 2px solid var(--umco-red);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.4rem;">📄</span>
            <div>
              <h3 class="modal-title" style="color: #fff; margin: 0; font-size: 1.15rem;">${isAr ? 'دليل وقائمة منتجات شركة يمكو الدوائية الرسمية' : 'YUMCO Official Products & Pharmaceuticals List'}</h3>
              <small style="color: rgba(255,255,255,0.7); font-size: 0.8rem;">UMCO Pharmaceuticals Official Catalog (PDF)</small>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <a href="/wp-content/uploads/2025/05/Products-List.pdf" download="YUMCO-Products-List.pdf" class="btn btn-sm" style="background: var(--umco-red); color: #fff; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">
              ⬇ ${isAr ? 'تحميل PDF' : 'Download PDF'}
            </a>
            <button class="btn btn-icon-only" style="color: #fff;" onclick="closeProductsListModal()">✕</button>
          </div>
        </div>
        <div class="modal-body" style="padding: 0; flex: 1; background: #525659; overflow: hidden; display: flex;">
          <iframe src="/wp-content/uploads/2025/05/Products-List.pdf#toolbar=1" style="width: 100%; height: 100%; border: none;" title="Products List PDF"></iframe>
        </div>
        <div class="modal-footer" style="padding: 12px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: #64748b;">${isAr ? 'يحتوي الملف على كافة الأصناف الدوائية والمستلزمات الطبية المسجلة رسمياً' : 'Official pharmaceutical items & registered medical appliances catalog'}</span>
          <button type="button" class="btn btn-outline" onclick="closeProductsListModal()">${isAr ? 'إغلاق' : 'Close'}</button>
        </div>
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
        <h3 class="modal-title">${isAr ? 'الكتالوج الدوائي المعتمد - شركة يمكو للصناعات الدوائية' : 'YUMCO Pharmaceuticals - Official Product Monograph Catalog'}</h3>
      </div>
      <button class="btn btn-icon-only" onclick="closeModal('catalog-print-modal')">✕</button>
    </div>

    <div class="modal-body printable-catalog-sheet">
      <div class="catalog-print-header">
        <div class="catalog-print-logo-area">
          <div class="logo-badge" style="width: 44px; height: 44px; font-size: 1.2rem;">YM</div>
          <div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #0A1E3F;">${isAr ? 'شركة يمكو للصناعات الدوائية والطبية' : 'YUMCO Pharmaceuticals & Medical Industries Co.'}</div>
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
          ${isAr ? 'وثيقة رسمية صادرة آلياً عن منصة يمكو للعمليات الدوائية' : 'Official Document Generated via YUMCO Pharma Platform'}
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

// Floating Inquiry & Customer Engagement Handlers
function toggleInquiryWidget() {
  State.inquiryWidgetOpen = !State.inquiryWidgetOpen;
  const panel = document.getElementById('floating-inquiry-panel');
  if (panel) {
    if (State.inquiryWidgetOpen) panel.classList.add('open');
    else panel.classList.remove('open');
  } else {
    renderApp();
  }
}

async function submitInquiry(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const res = await API.post('/inquiries', data);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    e.target.reset();
    State.inquiryWidgetOpen = false;
    renderApp();
  } else {
    showToast('Failed to submit inquiry', 'error');
  }
}

function openInquiryReplyModal(inquiryId) {
  const iq = State.inquiries.find(item => item.id === inquiryId);
  if (!iq) return;
  const isAr = State.lang === 'ar';
  const container = document.getElementById('inquiry-reply-content');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${isAr ? 'الرد الطبي / التسويقي على الاستفسار' : 'Reply to Medical Inquiry'}</h3>
      <button class="btn btn-icon-only" onclick="closeModal('inquiry-reply-modal')">✕</button>
    </div>
    <form onsubmit="submitInquiryReply(event, ${iq.id})">
      <div class="modal-body">
        <div style="background: var(--bg-card-subtle); padding: 16px; border-radius: var(--radius-md); margin-bottom: 16px;">
          <div style="font-size: 0.9rem; margin-bottom: 4px;"><strong>${isAr ? 'العميل:' : 'Customer:'}</strong> ${iq.customer_name} (${iq.customer_role})</div>
          <div style="font-size: 0.9rem; margin-bottom: 6px;"><strong>${isAr ? 'الهاتف:' : 'Phone:'}</strong> ${iq.phone}</div>
          <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.5;"><strong>${isAr ? 'الاستفسار:' : 'Inquiry:'}</strong> ${iq.message}</div>
        </div>

        <div class="form-group">
          <label class="form-label">${isAr ? 'نص الرد والتوجيه الصيدلاني (بالعربية) *' : 'Reply Content (Arabic) *'}</label>
          <textarea name="reply_ar" rows="4" required class="form-control" placeholder="${isAr ? 'اكتب ردك الطبي المفصل هنا لتزويد العميل به...' : 'Type clinical or commercial reply...'}">${iq.reply_ar || ''}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label">${isAr ? 'نص الرد بالإنجليزية' : 'Reply Content (English)'}</label>
          <textarea name="reply_en" rows="2" class="form-control" placeholder="Optional English translation...">${iq.reply_en || ''}</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline" onclick="closeModal('inquiry-reply-modal')">${isAr ? 'إلغاء' : 'Cancel'}</button>
        <button type="submit" class="btn btn-primary">${isAr ? 'إرسال الرد واعتماده' : 'Submit Reply'}</button>
      </div>
    </form>
  `;

  openModal('inquiry-reply-modal');
}

async function submitInquiryReply(e, inquiryId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const res = await API.put(`/inquiries/${inquiryId}/reply`, data, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    closeModal('inquiry-reply-modal');
    await loadPortalData();
    renderApp();
  } else {
    showToast('Failed to submit reply', 'error');
  }
}

// Marketing Announcements Handlers
async function submitCreateAnnouncement(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const res = await API.post('/announcements', data, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    closeModal('create-announcement-modal');
    await loadAnnouncementsData();
    await loadPortalData();
    renderApp();
  } else {
    showToast('Failed to create announcement', 'error');
  }
}

async function deleteAnnouncement(id) {
  if (!confirm(State.lang === 'ar' ? 'هل أنت متأكد من حذف هذا الإعلان / الحملة؟' : 'Are you sure you want to delete this campaign?')) return;
  const res = await API.delete(`/announcements/${id}`, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    await loadAnnouncementsData();
    await loadPortalData();
    renderApp();
  } else {
    showToast('Failed to delete announcement', 'error');
  }
}

// Marketing Product Management Handlers
async function submitCreateProduct(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  data.category_id = parseInt(data.category_id, 10);

  const res = await API.post('/products', data, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    closeModal('create-product-modal');
    await loadCatalogData();
    renderApp();
  } else {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'error');
  }
}

async function deleteProduct(id) {
  if (!confirm(State.lang === 'ar' ? 'هل أنت متأكد من حذف هذا المستحضر الدوائي من الكتالوج؟' : 'Are you sure you want to remove this product?')) return;
  const res = await API.delete(`/products/${id}`, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    await loadCatalogData();
    renderApp();
  } else {
    showToast('Failed to delete product', 'error');
  }
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
    it_admin: isAr ? 'مهندس الموقع ومدير تقنية المعلومات' : 'IT Director & Systems Engineer',
    marketing: isAr ? 'مسؤول التسويق والإعلام الدوائي وخدمة العملاء' : 'Marketing & Medical Media Specialist',
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

// =====================================================================
// BRANDING & VISUAL IDENTITY TAB RENDERER (ADMIN & IT DIRECTOR)
// =====================================================================
function renderBrandingTab() {
  const isAr = State.lang === 'ar';
  const s = State.settings || {};

  return `
    <div>
      <div class="table-header-toolbar" style="background: #fff; border-radius: var(--radius-lg); margin-bottom: 24px; border: 1px solid var(--border-color); padding: 20px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy);">${isAr ? 'لوحة تحكم مهندس المنظومة ومدير IT بالهوية والمظهر' : 'IT & Admin Visual Identity & Site Customizer'}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${isAr ? 'التحكم المباشر في ألوان الموقع، الشعار، حجمه، نوع الخط وتحميله، أحجام العناوين، وإدارة الروابط.' : 'Live control over site colors, logo size, custom fonts, typography scale, and links.'}</p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button type="button" class="btn btn-outline" onclick="resetBrandingSettings()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            <span>${t('btn_reset_settings')}</span>
          </button>
          <button type="button" class="btn btn-primary" onclick="saveBrandingSettings()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            <span>${t('btn_save_settings')}</span>
          </button>
        </div>
      </div>

      <form id="branding-settings-form" onsubmit="event.preventDefault(); saveBrandingSettings();">
        <div class="customizer-grid">
          
          <!-- Card 1: Colors & Palette -->
          <div class="customizer-card">
            <div class="customizer-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 0 0 0-20"/><circle cx="12" cy="12" r="4"/></svg>
              <span>${isAr ? 'ألوان المنصة والسمة البصرية' : 'Brand Colors & Palette'}</span>
            </div>

            <div class="color-picker-row">
              <span class="color-picker-label">${isAr ? 'اللون الرئيسي للمنصة (Primary):' : 'Primary Brand Color:'}</span>
              <div class="color-picker-control">
                <input type="color" id="input-primary-color" name="primary_color" value="${s.primary_color || '#0284c7'}" class="color-input-field" oninput="updateLiveColor('primary', this.value)" />
                <input type="text" id="hex-primary-color" class="color-hex-text" value="${s.primary_color || '#0284c7'}" onchange="document.getElementById('input-primary-color').value = this.value; updateLiveColor('primary', this.value);" />
              </div>
            </div>

            <div class="color-picker-row">
              <span class="color-picker-label">${isAr ? 'لون التحويم (Hover State):' : 'Hover State Color:'}</span>
              <div class="color-picker-control">
                <input type="color" id="input-primary-hover" name="primary_hover" value="${s.primary_hover || '#0369a1'}" class="color-input-field" oninput="updateLiveColor('hover', this.value)" />
                <input type="text" id="hex-primary-hover" class="color-hex-text" value="${s.primary_hover || '#0369a1'}" onchange="document.getElementById('input-primary-hover').value = this.value; updateLiveColor('hover', this.value);" />
              </div>
            </div>

            <div class="color-picker-row">
              <span class="color-picker-label">${isAr ? 'لون التمييز (Accent Color):' : 'Accent Accent Color:'}</span>
              <div class="color-picker-control">
                <input type="color" id="input-accent-color" name="accent_color" value="${s.accent_color || '#10b981'}" class="color-input-field" oninput="updateLiveColor('accent', this.value)" />
                <input type="text" id="hex-accent-color" class="color-hex-text" value="${s.accent_color || '#10b981'}" onchange="document.getElementById('input-accent-color').value = this.value; updateLiveColor('accent', this.value);" />
              </div>
            </div>

            <div style="background: #f8fafc; padding: 12px; border-radius: var(--radius-md); font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              ${isAr ? 'يتم تطبيق الألوان فوراً بشكل حي ومباشر على كافة عناصر المنصة دون الحاجة لإعادة تحميل الصفحة.' : 'Colors reactively update across the entire interface without page reloads.'}
            </div>
          </div>

          <!-- Card 2: Typography & Font Loader -->
          <div class="customizer-card">
            <div class="customizer-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
              <span>${isAr ? 'الخطوط وأحجام النصوص (Typography)' : 'Typography & Scaling'}</span>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'الخط العربي المعتمد:' : 'Arabic Font Family:'}</label>
              <select name="font_family_ar" id="select-font-ar" class="form-control" onchange="updateLiveFont('ar', this.value)">
                ${['Cairo', 'Tajawal', 'Almarai', 'Readex Pro', 'IBM Plex Sans Arabic'].map(f => `
                  <option value="${f}" ${s.font_family_ar === f ? 'selected' : ''}>${f}</option>
                `).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'الخط الإنجليزي المعتمد:' : 'English Font Family:'}</label>
              <select name="font_family_en" id="select-font-en" class="form-control" onchange="updateLiveFont('en', this.value)">
                ${['Outfit', 'Inter', 'Plus Jakarta Sans', 'Roboto'].map(f => `
                  <option value="${f}" ${s.font_family_en === f ? 'selected' : ''}>${f}</option>
                `).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط خط خارجي من Google Fonts (اختياري):' : 'Custom Google Font URL (Optional):'}</label>
              <input type="url" name="custom_font_url" id="input-custom-font" class="form-control" placeholder="https://fonts.googleapis.com/css2?family=..." value="${s.custom_font_url || ''}" onchange="updateLiveCustomFont(this.value)" />
            </div>

            <div class="form-group">
              <label class="form-label" style="display: flex; justify-content: space-between;">
                <span>${isAr ? 'حجم الخط الأساسي:' : 'Base Font Size:'}</span>
                <span id="font-size-val" style="font-weight: 700; color: var(--primary-navy);">${s.font_size_base || 16}px</span>
              </label>
              <input type="range" name="font_size_base" min="14" max="18" step="0.5" value="${s.font_size_base || 16}" class="form-control" oninput="document.getElementById('font-size-val').textContent = this.value + 'px'; document.documentElement.style.fontSize = this.value + 'px';" />
            </div>

            <div class="font-preview-box" id="font-preview-box">
              <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 4px;">
                شركة يمكو للصناعات الدوائية - جودة دوائية تفوق التوقعات
              </div>
              <div style="font-size: 0.85rem; color: #64748b;">
                The standard chunk of modern enterprise typography for YUMCO Pharmaceuticals.
              </div>
            </div>
          </div>

          <!-- Card 3: Logo & Brand Identity -->
          <div class="customizer-card">
            <div class="customizer-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>${isAr ? 'الشعار والهوية والاسم' : 'Logo & Branding'}</span>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">${isAr ? 'أيقونة الشعار المختصرة:' : 'Badge Text:'}</label>
                <input type="text" name="logo_badge_text" id="input-logo-badge" class="form-control" maxlength="4" value="${s.logo_badge_text || 'YM'}" oninput="updateLiveLogo()" />
              </div>
              <div class="form-group">
                <label class="form-label" style="display: flex; justify-content: space-between;">
                  <span>${isAr ? 'حجم الشعار:' : 'Logo Size:'}</span>
                  <span id="logo-size-val" style="font-weight: 700; color: var(--primary-navy);">${s.logo_size || 42}px</span>
                </label>
                <input type="range" name="logo_size" min="32" max="64" step="2" value="${s.logo_size || 42}" class="form-control" oninput="document.getElementById('logo-size-val').textContent = this.value + 'px'; updateLiveLogo();" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط صورة الشعار (PNG/SVG اختياري):' : 'Logo Image URL (Optional):'}</label>
              <input type="url" name="logo_image_url" id="input-logo-url" class="form-control" placeholder="https://.../logo.png" value="${s.logo_image_url || ''}" oninput="updateLiveLogo()" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'اسم الشركة بالعربية:' : 'Company Name (AR):'}</label>
              <input type="text" name="company_name_ar" id="input-company-ar" class="form-control" value="${s.company_name_ar || 'يمكو للصناعات الدوائية'}" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'اسم الشركة بالإنجليزية:' : 'Company Name (EN):'}</label>
              <input type="text" name="company_name_en" id="input-company-en" class="form-control" value="${s.company_name_en || 'YUMCO Pharmaceuticals'}" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'السطر الفرعي للشعار:' : 'Logo Subtitle:'}</label>
              <input type="text" name="company_sub_ar" id="input-company-sub-ar" class="form-control" value="${s.company_sub_ar || 'المصنع الحديث للأدوية والمستلزمات الطبية'}" />
            </div>

            <!-- Live Logo Preview Box -->
            <div class="logo-preview-box">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div id="live-logo-preview" class="logo-badge" style="width: ${s.logo_size || 42}px; height: ${s.logo_size || 42}px;">
                  ${s.logo_image_url ? `<img src="${s.logo_image_url}" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;">` : (s.logo_badge_text || 'YM')}
                </div>
                <div>
                  <div id="live-name-preview" style="font-weight: 800; font-size: 1.05rem; color: var(--primary-navy);">
                    ${isAr ? (s.company_name_ar || 'يمكو للصناعات الدوائية') : (s.company_name_en || 'YUMCO Pharmaceuticals')}
                  </div>
                  <div id="live-sub-preview" style="font-size: 0.75rem; color: #64748b;">
                    ${s.company_sub_ar || 'المصنع الحديث للأدوية والمستلزمات الطبية'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Header & Social Links -->
          <div class="customizer-card">
            <div class="customizer-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              <span>${isAr ? 'إدارة الروابط وشبكات التواصل' : 'Navigation & Social Links'}</span>
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رقم هاتف الدعم / واتساب:' : 'WhatsApp Support Number:'}</label>
              <input type="text" name="social_whatsapp" id="input-social-whatsapp" class="form-control" value="${s.social_links?.whatsapp || '+967777123456'}" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط صفحة فيسبوك:' : 'Facebook Page URL:'}</label>
              <input type="url" name="social_facebook" id="input-social-facebook" class="form-control" value="${s.social_links?.facebook || 'https://facebook.com/yumcopharma'}" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط صفحة لينكدإن:' : 'LinkedIn Page URL:'}</label>
              <input type="url" name="social_linkedin" id="input-social-linkedin" class="form-control" value="${s.social_links?.linkedin || 'https://linkedin.com/company/yumcopharma'}" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'رابط قناة تليجرام الطبية:' : 'Telegram Channel URL:'}</label>
              <input type="url" name="social_telegram" id="input-social-telegram" class="form-control" value="${s.social_links?.telegram || 'https://t.me/yumcopharma'}" />
            </div>

            <div class="form-group">
              <label class="form-label">${isAr ? 'البريد الإلكتروني الرسمي:' : 'Official Contact Email:'}</label>
              <input type="email" name="contact_email" id="input-contact-email" class="form-control" value="${s.contact_email || 'info@umcopharma.com'}" />
            </div>
          </div>

        </div>

        <!-- Sticky Actions Bar -->
        <div class="customizer-actions-bar">
          <div>
            <strong>${isAr ? 'تطبيق وحفظ إعدادات الهوية للموقع كاملاً' : 'Apply & Save Visual Identity Changes'}</strong>
            <div style="font-size: 0.8rem; opacity: 0.85;">${isAr ? 'يتم حفظ القيم في قاعدة البيانات وتفعيلها فوراً لجميع زوار المنصة.' : 'Settings persist in database and apply across the entire portal instantly.'}</div>
          </div>
          <div style="display: flex; gap: 10px;">
            <button type="button" class="btn btn-outline" style="border-color: rgba(255,255,255,0.4); color: #fff;" onclick="resetBrandingSettings()">
              ${t('btn_reset_settings')}
            </button>
            <button type="submit" class="btn btn-primary" style="box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
              ${t('btn_save_settings')}
            </button>
          </div>
        </div>
      </form>
    </div>
  `;
}

// =====================================================================
// BRANCHES NETWORK MANAGEMENT TAB (ADMIN & IT DIRECTOR)
// =====================================================================
function renderBranchesMgmtTab() {
  const isAr = State.lang === 'ar';
  const branches = State.branches || [];

  return `
    <div>
      <div class="table-header-toolbar" style="background: #fff; border-radius: var(--radius-lg); margin-bottom: 24px; border: 1px solid var(--border-color); padding: 20px;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy);">${isAr ? 'إدارة شبكة فروع يمكو المعتمدة في اليمن' : 'YUMCO Verified Regional Branches'}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${isAr ? 'إضافة فروع جديدة، تعديل بيانات التواصل والمدراء، وتحديد إحداثيات الخريطة (GPS).' : 'Manage branch records, addresses, managers, phone numbers, and GPS coordinates.'}</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openBranchCreateModal()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/><line x1="12" y1="7" x2="12" y2="13"/><line x1="9" y1="10" x2="15" y2="10"/></svg>
          <span>${t('btn_add_branch')}</span>
        </button>
      </div>

      <div class="data-table-card">
        <div class="table-responsive">
          <table class="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>${isAr ? 'المدينة / المحافظة' : 'City / Governorate'}</th>
                <th>${isAr ? 'التصنيف' : 'Type'}</th>
                <th>${isAr ? 'العنوان الميداني' : 'Address'}</th>
                <th>${isAr ? 'رقم الهاتف المعتمد' : 'Primary Phone'}</th>
                <th>${isAr ? 'المدير المسؤول' : 'Manager'}</th>
                <th>${isAr ? 'الإحداثيات (GPS)' : 'Coordinates'}</th>
                <th>${isAr ? 'الكادر' : 'Staff'}</th>
                <th>${isAr ? 'الحالة' : 'Status'}</th>
                <th>${isAr ? 'إجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              ${branches.map(b => `
                <tr>
                  <td><strong>${b.id}</strong></td>
                  <td>
                    <strong style="color: var(--primary-navy); font-size: 0.95rem;">${isAr ? b.city_ar : b.city_en}</strong>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">${isAr ? b.city_en : b.city_ar}</div>
                  </td>
                  <td>
                    ${b.is_headquarters 
                      ? `<span class="badge" style="background: #FDE8EC; color: #C8102E; font-weight: 700;">${isAr ? 'مقر رئيسي' : 'Headquarters'}</span>` 
                      : `<span class="badge" style="background: #E0F2FE; color: #0284C7;">${isAr ? 'فرع إقليمي' : 'Regional'}</span>`}
                  </td>
                  <td><span style="font-size: 0.85rem;">${isAr ? b.address_ar : b.address_en}</span></td>
                  <td>
                    <a href="tel:${b.phone_primary.replace(/\\s+/g, '')}" style="color: var(--primary-navy); font-weight: 700; text-decoration: none;">
                      ${b.phone_primary}
                    </a>
                  </td>
                  <td>${isAr ? (b.manager_name_ar || '-') : (b.manager_name_en || '-')}</td>
                  <td>
                    ${(b.latitude && b.longitude) 
                      ? `<span class="spec-chip" title="Lat: ${b.latitude}, Lng: ${b.longitude}" style="cursor: pointer;" onclick="window.focusBranchMap(${b.id})">📍 ${parseFloat(b.latitude).toFixed(2)}, ${parseFloat(b.longitude).toFixed(2)}</span>` 
                      : '<span style="color: #94a3b8;">غير محدد</span>'}
                  </td>
                  <td><span style="font-weight: 700; color: var(--accent-emerald);">${b.staff_count || 0}</span></td>
                  <td>
                    <span class="status-badge ${b.is_active ? 'status-completed' : 'status-cancelled'}">
                      ${b.is_active ? (isAr ? 'نشط' : 'Active') : (isAr ? 'معطل' : 'Inactive')}
                    </span>
                  </td>
                  <td>
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-outline btn-sm" onclick="openBranchEditModal(${b.id})" title="${isAr ? 'تعديل الفرع' : 'Edit Branch'}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
                      <button class="btn btn-outline-red btn-sm" onclick="deleteBranchHandler(${b.id})" title="${isAr ? 'حذف الفرع' : 'Delete Branch'}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
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

// =====================================================================
// LEAFLET MAP INITIALIZER & BRANCH FOCUS LOGIC
// =====================================================================
function initBranchesMap() {
  const mapEl = document.getElementById('branches-leaflet-map');
  if (!mapEl) return;
  if (typeof L === 'undefined') {
    setTimeout(initBranchesMap, 150);
    return;
  }

  if (State.branchesMap) {
    try {
      State.branchesMap.remove();
    } catch (e) {
      console.warn('Map cleanup error:', e);
    }
    State.branchesMap = null;
  }

  State.branchMarkers = {};

  const map = L.map('branches-leaflet-map', {
    center: [15.3694, 44.1910],
    zoom: 6.2,
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const isAr = State.lang === 'ar';
  const bounds = [];

  State.branches.forEach(b => {
    if (b.latitude && b.longitude) {
      const lat = parseFloat(b.latitude);
      const lng = parseFloat(b.longitude);
      const latLng = [lat, lng];
      bounds.push(latLng);

      const pinIcon = L.divIcon({
        className: 'custom-yumco-pin',
        html: `
          <div class="yumco-map-pin ${b.is_headquarters ? 'hq-pin' : ''}">
            <span>${b.is_headquarters ? 'HQ' : 'YM'}</span>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -32]
      });

      const cityName = isAr ? b.city_ar : b.city_en;
      const address = isAr ? b.address_ar : b.address_en;
      const manager = isAr ? b.manager_name_ar : b.manager_name_en;

      const popupContent = `
        <div class="map-popup-header">
          <span class="map-popup-city">${cityName}</span>
          ${b.is_headquarters ? `<span class="map-popup-hq">${isAr ? 'المقر الرئيسي' : 'Headquarters'}</span>` : ''}
        </div>
        <div class="map-popup-body">
          <div class="map-popup-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${address}</span>
          </div>
          ${manager ? `
            <div class="map-popup-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>${isAr ? 'المسؤول:' : 'Manager:'} <strong>${manager}</strong></span>
            </div>
          ` : ''}
          <a href="tel:${b.phone_primary.replace(/\\s+/g, '')}" class="map-popup-phone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${b.phone_primary}</span>
          </a>
        </div>
      `;

      const marker = L.marker(latLng, { icon: pinIcon })
        .addTo(map)
        .bindPopup(popupContent, { className: 'yumco-map-popup' });

      State.branchMarkers[b.id] = marker;
    }
  });

  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [35, 35], maxZoom: 8 });
  }

  State.branchesMap = map;
}

window.focusBranchMap = function(branchId) {
  if (!branchId) return;
  const b = State.branches.find(item => item.id == branchId);
  if (!b || !b.latitude || !b.longitude) return;

  const mapCard = document.querySelector('.branches-map-card');
  if (mapCard) {
    mapCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (State.branchesMap) {
    const lat = parseFloat(b.latitude);
    const lng = parseFloat(b.longitude);
    State.branchesMap.flyTo([lat, lng], 13, { duration: 1.2 });
    const marker = State.branchMarkers[branchId];
    if (marker) {
      setTimeout(() => marker.openPopup(), 1200);
    }
  }
};

// =====================================================================
// BRANCH CRUD MODAL HANDLERS
// =====================================================================
function openBranchCreateModal() {
  const form = document.getElementById('branch-modal-form');
  if (form) form.reset();
  const idEl = document.getElementById('branch-form-id');
  if (idEl) idEl.value = '';
  const titleEl = document.getElementById('branch-modal-title');
  if (titleEl) titleEl.textContent = State.lang === 'ar' ? 'إضافة فرع جديد لشركة يمكو' : 'Add New YUMCO Branch';
  const activeEl = document.getElementById('branch-is-active');
  if (activeEl) activeEl.checked = true;
  const hqEl = document.getElementById('branch-is-hq');
  if (hqEl) hqEl.checked = false;
  openModal('create-branch-modal');
}

function openBranchEditModal(branchId) {
  const b = State.branches.find(item => item.id == branchId);
  if (!b) return;

  const titleEl = document.getElementById('branch-modal-title');
  if (titleEl) titleEl.textContent = State.lang === 'ar' ? `تعديل بيانات فرع (${b.city_ar})` : `Edit Branch (${b.city_en})`;

  document.getElementById('branch-form-id').value = b.id;
  document.getElementById('branch-city-ar').value = b.city_ar || '';
  document.getElementById('branch-city-en').value = b.city_en || '';
  document.getElementById('branch-address-ar').value = b.address_ar || '';
  document.getElementById('branch-address-en').value = b.address_en || '';
  document.getElementById('branch-phone-primary').value = b.phone_primary || '';
  document.getElementById('branch-phone-secondary').value = b.phone_secondary || '';
  document.getElementById('branch-manager-ar').value = b.manager_name_ar || '';
  document.getElementById('branch-manager-en').value = b.manager_name_en || '';
  document.getElementById('branch-lat').value = b.latitude || '';
  document.getElementById('branch-lng').value = b.longitude || '';
  document.getElementById('branch-is-hq').checked = !!b.is_headquarters;
  document.getElementById('branch-is-active').checked = b.is_active !== 0;

  openModal('create-branch-modal');
}

async function submitBranchForm(e) {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  const branchId = data.branch_id;

  data.is_headquarters = form.querySelector('#branch-is-hq').checked ? 1 : 0;
  data.is_active = form.querySelector('#branch-is-active').checked ? 1 : 0;

  let res;
  if (branchId) {
    res = await API.put(`/branches/${branchId}`, data, true);
  } else {
    res = await API.post('/branches', data, true);
  }

  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    closeModal('create-branch-modal');
    await loadBranchesData();
    if (State.view === 'portal') {
      await loadPortalData();
    }
    renderApp();
  } else {
    showToast(State.lang === 'ar' ? (res.message_ar || 'فشل في حفظ بيانات الفرع') : (res.message_en || 'Failed to save branch'), 'error');
  }
}

async function deleteBranchHandler(branchId) {
  if (!confirm(State.lang === 'ar' ? 'هل أنت متأكد من رغبتك في حذف أو إلغاء تفعيل هذا الفرع؟' : 'Are you sure you want to delete or deactivate this branch?')) return;
  const res = await API.delete(`/branches/${branchId}`, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    await loadBranchesData();
    if (State.view === 'portal') {
      await loadPortalData();
    }
    renderApp();
  } else {
    showToast('Failed to delete branch', 'error');
  }
}

async function deleteEmployeeHandler(empId) {
  if (!confirm(State.lang === 'ar' ? 'هل أنت متأكد من حذف سجل الموظف وحسابه؟' : 'Are you sure you want to delete this employee?')) return;
  const res = await API.delete(`/employees/${empId}`, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    await loadPortalData();
    renderApp();
  } else {
    showToast('Failed to delete employee', 'error');
  }
}

// =====================================================================
// LIVE BRANDING & IDENTITY REACTIVE HANDLERS
// =====================================================================
function updateLiveColor(type, val) {
  const root = document.documentElement;
  if (type === 'primary') {
    root.style.setProperty('--umco-red', val);
    root.style.setProperty('--primary-color', val);
    const hexInput = document.getElementById('hex-primary-color');
    if (hexInput) hexInput.value = val;
  } else if (type === 'hover') {
    root.style.setProperty('--umco-red-hover', val);
    const hexInput = document.getElementById('hex-primary-hover');
    if (hexInput) hexInput.value = val;
  } else if (type === 'accent') {
    root.style.setProperty('--accent-teal', val);
    root.style.setProperty('--accent-color', val);
    const hexInput = document.getElementById('hex-accent-color');
    if (hexInput) hexInput.value = val;
  }
}

function updateLiveFont(lang, font) {
  const root = document.documentElement;
  if (lang === 'ar') {
    root.style.setProperty('--font-ar', `'${font}', sans-serif`);
  } else {
    root.style.setProperty('--font-en', `'${font}', sans-serif`);
  }
  const preview = document.getElementById('font-preview-box');
  if (preview) {
    preview.style.fontFamily = `'${font}', sans-serif`;
  }
}

function updateLiveCustomFont(url) {
  if (!url) return;
  let fontEl = document.getElementById('custom-dynamic-font');
  if (!fontEl) {
    fontEl = document.createElement('link');
    fontEl.id = 'custom-dynamic-font';
    fontEl.rel = 'stylesheet';
    document.head.appendChild(fontEl);
  }
  fontEl.href = url;
}

function updateLiveLogo() {
  const badgeText = document.getElementById('input-logo-badge')?.value || 'YM';
  const logoUrl = document.getElementById('input-logo-url')?.value;
  const size = document.getElementById('input-logo-badge')?.form?.querySelector('input[name="logo_size"]')?.value || '42';

  const preview = document.getElementById('live-logo-preview');
  if (preview) {
    preview.style.width = `${size}px`;
    preview.style.height = `${size}px`;
    if (logoUrl) {
      preview.innerHTML = `<img src="${logoUrl}" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else {
      preview.textContent = badgeText;
    }
  }

  const namePreview = document.getElementById('live-name-preview');
  const subPreview = document.getElementById('live-sub-preview');
  const nameVal = document.getElementById('input-company-ar')?.value;
  const subVal = document.getElementById('input-company-sub-ar')?.value;
  if (namePreview && nameVal) namePreview.textContent = nameVal;
  if (subPreview && subVal) subPreview.textContent = subVal;
}

async function saveBrandingSettings() {
  const form = document.getElementById('branding-settings-form');
  if (!form) return;
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());

  const payload = {
    primary_color: data.primary_color,
    primary_hover: data.primary_hover,
    accent_color: data.accent_color,
    font_family_ar: data.font_family_ar,
    font_family_en: data.font_family_en,
    custom_font_url: data.custom_font_url,
    font_size_base: data.font_size_base,
    logo_badge_text: data.logo_badge_text,
    logo_image_url: data.logo_image_url,
    logo_size: data.logo_size,
    company_name_ar: data.company_name_ar,
    company_name_en: data.company_name_en,
    company_sub_ar: data.company_sub_ar,
    contact_email: data.contact_email,
    social_links: {
      whatsapp: data.social_whatsapp,
      facebook: data.social_facebook,
      linkedin: data.social_linkedin,
      telegram: data.social_telegram
    }
  };

  const res = await API.put('/settings', payload, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    await loadSettingsData();
    renderApp();
  } else {
    showToast('Failed to save settings', 'error');
  }
}

async function resetBrandingSettings() {
  if (!confirm(State.lang === 'ar' ? 'هل تريد استعادة الضبط الافتراضي لهوية وألوان يمكو؟' : 'Reset branding to original defaults?')) return;
  const res = await API.post('/settings/reset', {}, true);
  if (res.success) {
    showToast(State.lang === 'ar' ? res.message_ar : res.message_en, 'success');
    await loadSettingsData();
    renderApp();
  } else {
    showToast('Failed to reset settings', 'error');
  }
}

