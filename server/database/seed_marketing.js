const bcrypt = require('bcryptjs');
const { get, run, query } = require('./db');

const seedMarketingAndAnnouncements = async () => {
  console.log('--- Seeding Marketing Specialist, Announcements & Inquiries ---');

  // 1. Marketing Specialist User
  const existingMarketing = get("SELECT id FROM users WHERE email = 'marketing@umcopharma.com'");
  let marketingUserId;

  if (!existingMarketing) {
    const saltRounds = 10;
    const marketingPass = await bcrypt.hash('marketing123', saltRounds);
    const res = run(`
      INSERT INTO users (name_ar, name_en, email, password_hash, role, phone)
      VALUES (?, ?, ?, ?, 'marketing', ?)
    `, [
      'د. أسامة الحمادي',
      'Dr. Osama Al-Hammadi',
      'marketing@umcopharma.com',
      marketingPass,
      '+967 776 555 444'
    ]);
    marketingUserId = res.lastInsertRowid;
    console.log('Created Marketing User ID:', marketingUserId);

    // Also add to employees directory
    const existingEmp = get('SELECT id FROM employees WHERE user_id = ?', [marketingUserId]);
    if (!existingEmp) {
      run(`
        INSERT INTO employees (
          user_id, employee_code, job_title_ar, job_title_en,
          department_ar, department_en, branch_id, hire_date,
          salary_grade, status
        )
        VALUES (?, 'EMP-MKT-01', ?, ?, ?, ?, 1, '2026-01-15', 'Grade-A2', 'active')
      `, [
        marketingUserId,
        'مسؤول التسويق الدوائي والإعلام وخدمة العملاء',
        'Marketing & Medical Communications Specialist',
        'المبيعات والتسويق الطبي',
        'Medical Sales & Marketing'
      ]);
      console.log('Added Marketing User to Employees directory (EMP-MKT-01)');
    }
  } else {
    marketingUserId = existingMarketing.id;
    console.log('Marketing User already exists (ID:', marketingUserId, ')');
  }

  // 2. Announcements
  const announcementsCount = get('SELECT COUNT(*) as count FROM announcements');
  if (announcementsCount.count === 0) {
    console.log('Seeding initial medical announcements & campaigns...');
    const campaigns = [
      {
        title_ar: 'حملة يمكو الوطنية لمكافحة العدوى والتعقيم الجراحي بالمستشفيات',
        title_en: 'YUMCO National Hospital Infection Control & Surgical Asepsis Campaign',
        content_ar: 'برنامج دعم المشافي والمراكز الجراحية اليمنية بتوفير محاليل بوفيدون يودين 10% (فيميكير) ومحاليل غسيل الجراحة بأسعار توريد مدعومة ودورات تدريبية للكوادر الطبية والتمريضية.',
        content_en: 'Nationwide hospital support initiative providing certified Povidone Iodine 10% (Femicare) and surgical scrubs under validated clinical protocols.',
        category: 'campaign',
        badge_ar: 'مبادرة وطنية معتمدة',
        badge_en: 'National Initiative',
        image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
        link_url: '#products'
      },
      {
        title_ar: 'تدشين الخط المؤتمت الثالث لمحاليل العيون والشامبو العلاجي',
        title_en: 'Inauguration of Line 3: Aseptic Ophthalmic Solutions & Medicated Shampoos',
        content_ar: 'توسيع القدرات الإنتاجية الصيدلانية بتقنية Aseptic BFS المعقمة كلياً لتلبية الطلب المتزايد على قطرات الترطيب العيني وشامبو علاج قشرة الرأس والالتهابات الفطرية.',
        content_en: 'Expanding advanced aseptic blow-fill-seal packaging for ophthalmic lubricants and medicated anti-dandruff formulations.',
        category: 'launch',
        badge_ar: 'تدشين صناعي مؤتمت',
        badge_en: 'New Automated Line',
        image_url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80',
        link_url: '#manufacturing'
      },
      {
        title_ar: 'فتح باب التوريد والتعاقد السنوي مع الصيدليات والمراكز الصحية لعام 2026',
        title_en: 'Annual Supply Agreements & Commercial Quotations Open for 2026',
        content_ar: 'تسهيلات سداد وخصومات كميات حصرية لشبكات الصيدليات ومستودعات الأدوية مع توصيل سريع ومجاني عبر شبكة فروع يمكو التسعة المعتمدة في مختلف المحافظات.',
        content_en: 'Exclusive procurement rebates, fast-track delivery across all 9 regional branches, and tailored B2B hospital supply terms.',
        category: 'tender',
        badge_ar: 'عروض التوريد B2B',
        badge_en: 'Annual Tenders',
        image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80',
        link_url: '#rfq'
      }
    ];

    for (const c of campaigns) {
      run(`
        INSERT INTO announcements (
          title_ar, title_en, content_ar, content_en,
          category, badge_ar, badge_en, image_url, link_url,
          is_active, author_id
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?)
      `, [
        c.title_ar, c.title_en, c.content_ar, c.content_en,
        c.category, c.badge_ar, c.badge_en, c.image_url, c.link_url,
        marketingUserId
      ]);
    }
    console.log('Seeded 3 medical announcements.');
  }

  // 3. Customer Inquiries
  const inquiriesCount = get('SELECT COUNT(*) as count FROM customer_inquiries');
  if (inquiriesCount.count === 0) {
    console.log('Seeding initial customer inquiries...');
    run(`
      INSERT INTO customer_inquiries (
        inquiry_number, client_name, client_contact, client_type,
        subject, message, product_id, status, reply_message, replied_by_user_id, replied_at
      )
      VALUES (
        'INQ-2026-001',
        'د. نبيل القاضي - مدير مشتريات مستشفى الأمل',
        '+967 771 999 888',
        'hospital',
        'طلب توريد 1000 عبوة فيميكير بوفيدون يودين 10% للعمليات',
        'نرجو موافاتنا بجدول التسليم وسعر الجملة للدفعة القادمة إلى فرع تعز.',
        1,
        'replied',
        'أهلاً د. نبيل، تم تحويل الطلب لفرع تعز، والكمية متوفرة في المستودع المبرد وجاهزة للشحن الفوري بخصم المشافي المعتمد.',
        ?,
        CURRENT_TIMESTAMP
      )
    `, [marketingUserId]);

    run(`
      INSERT INTO customer_inquiries (
        inquiry_number, client_name, client_contact, client_type,
        subject, message, product_id, status
      )
      VALUES (
        'INQ-2026-002',
        'صيدلية السعادة - د. ريم الحكيمي',
        '+967 775 444 333',
        'pharmacist',
        'استفسار عن توفر مرهم يمكو كورت-إن وكريم يمكو ثرين في فرع إب',
        'هل تتوفر عبوات كريم يمكو ثرين 30 جم حالياً للشحن إلى مدينة إب؟',
        4,
        'new'
      )
    `);
    console.log('Seeded 2 customer inquiries.');
  }

  console.log('--- Marketing Seeding Complete ---');
};

seedMarketingAndAnnouncements().catch(console.error);
