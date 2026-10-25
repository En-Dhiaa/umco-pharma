const bcrypt = require('bcryptjs');
const { get, run, query } = require('./db');

const seedDatabase = async () => {
  console.log('--- Starting UMCO Database Seeding ---');

  // Check if users already exist
  const existingUsers = query('SELECT COUNT(*) as count FROM users');
  if (existingUsers[0].count > 0) {
    console.log('Database already contains users. Skipping initial seed.');
    return;
  }

  const saltRounds = 10;
  const adminPass = await bcrypt.hash('admin123', saltRounds);
  const hrPass = await bcrypt.hash('hr123', saltRounds);
  const empPass = await bcrypt.hash('emp123', saltRounds);

  // 1. Insert 9 Verified Branches
  console.log('Seeding 9 Yemen Branches...');
  const branches = [
    {
      city_ar: 'صنعاء (المقر الرئيسي)',
      city_en: 'Sana\'a (HQ)',
      is_hq: 1,
      address_ar: 'حدة، شارع رقم 4، مبنى رقم 64، جوار شركة كمران',
      address_en: 'Hadda St, Street 4, Bldg 64, Beside Kamaran Co, Sana\'a',
      phone: '+967 1 414035',
      phone_sec: '+967 773 335 372',
      fax: '+967 1 411992',
      email: 'info@umcopharma.com',
      manager_ar: 'د. عبدالله إسحاق',
      manager_en: 'Dr. Abdullah Ishaq',
      lat: 15.3188,
      lng: 44.1910,
      order: 1
    },
    {
      city_ar: 'عدن',
      city_en: 'Aden',
      is_hq: 0,
      address_ar: 'المنصورة، الشارع العام التجاري، عدن',
      address_en: 'Al-Mansoura Commercial Street, Aden',
      phone: '+967 773 339 362',
      phone_sec: '+967 2 345678',
      fax: null,
      email: 'aden@umcopharma.com',
      manager_ar: 'أ. ياسر ردمان',
      manager_en: 'Yasser Radman',
      lat: 12.8275,
      lng: 45.0287,
      order: 2
    },
    {
      city_ar: 'تعز',
      city_en: 'Taiz',
      is_hq: 0,
      address_ar: 'حي الحوبان، الشارع الدائري، تعز',
      address_en: 'Al-Hawban District, Ring Road, Taiz',
      phone: '+967 773 336 315',
      phone_sec: null,
      fax: null,
      email: 'taiz@umcopharma.com',
      manager_ar: 'أ. أحمد ناصر',
      manager_en: 'Ahmed Nasser',
      lat: 13.5789,
      lng: 44.0219,
      order: 3
    },
    {
      city_ar: 'إب',
      city_en: 'Ibb',
      is_hq: 0,
      address_ar: 'شارع تعز العام، جوار مستشفى النور، إب',
      address_en: 'Taiz General St, Near Al-Noor Hospital, Ibb',
      phone: '+967 773 336 315',
      phone_sec: null,
      fax: null,
      email: 'ibb@umcopharma.com',
      manager_ar: 'م. مروان اليافعي',
      manager_en: 'Marwan Al-Yafei',
      lat: 13.9759,
      lng: 44.1844,
      order: 4
    },
    {
      city_ar: 'الحديدة',
      city_en: 'Al-Hodeidah',
      is_hq: 0,
      address_ar: 'شارع صنعاء، تقاطع الكورنيش، الحديدة',
      address_en: 'Sana\'a St, Corniche Intersection, Al-Hodeidah',
      phone: '+967 773 378 314',
      phone_sec: null,
      fax: null,
      email: 'hodeidah@umcopharma.com',
      manager_ar: 'أ. عادل التهامي',
      manager_en: 'Adel Al-Tohami',
      lat: 14.7978,
      lng: 42.9545,
      order: 5
    },
    {
      city_ar: 'حضرموت (المكلا)',
      city_en: 'Hadramout (Mukalla)',
      is_hq: 0,
      address_ar: 'المكلا، حي باجعمان التجاري، حضرموت',
      address_en: 'Mukalla, Bajeaman Business District, Hadramout',
      phone: '+967 777 758 520',
      phone_sec: null,
      fax: null,
      email: 'hadramout@umcopharma.com',
      manager_ar: 'د. عوض باوزير',
      manager_en: 'Dr. Awadh Bawazir',
      lat: 14.5425,
      lng: 49.1242,
      order: 6
    },
    {
      city_ar: 'مأرب',
      city_en: 'Marib',
      is_hq: 0,
      address_ar: 'شارع صرواح، المجمع الحكومي، مأرب',
      address_en: 'Sirwah Street, Governmental Complex, Marib',
      phone: '+967 773 339 362',
      phone_sec: null,
      fax: null,
      email: 'marib@umcopharma.com',
      manager_ar: 'أ. صالح المرادي',
      manager_en: 'Saleh Al-Muradi',
      lat: 15.4542,
      lng: 45.3269,
      order: 7
    },
    {
      city_ar: 'ذمار',
      city_en: 'Dhamar',
      is_hq: 0,
      address_ar: 'شارع رداع العام، جوار المستشفى التعليمي، ذمار',
      address_en: 'Radaa St, Near Educational Hospital, Dhamar',
      phone: '+967 773 336 315',
      phone_sec: null,
      fax: null,
      email: 'dhamar@umcopharma.com',
      manager_ar: 'أ. طه الحرازي',
      manager_en: 'Taha Al-Harazi',
      lat: 14.5428,
      lng: 44.4051,
      order: 8
    },
    {
      city_ar: 'صعدة',
      city_en: 'Sa\'ada',
      is_hq: 0,
      address_ar: 'شارع الجمهورية، المجمع الصحي، صعدة',
      address_en: 'Al-Jumhouriyah St, Health Complex, Sa\'ada',
      phone: '+967 773 378 314',
      phone_sec: null,
      fax: null,
      email: 'saada@umcopharma.com',
      manager_ar: 'د. يحيى الصعدي',
      manager_en: 'Dr. Yahya Al-Saadi',
      lat: 16.9402,
      lng: 43.7639,
      order: 9
    }
  ];

  for (const b of branches) {
    run(`
      INSERT INTO branches (city_ar, city_en, is_headquarters, address_ar, address_en, phone_primary, phone_secondary, fax, email, manager_name_ar, manager_name_en, latitude, longitude, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [b.city_ar, b.city_en, b.is_hq, b.address_ar, b.address_en, b.phone, b.phone_sec, b.fax, b.email, b.manager_ar, b.manager_en, b.lat, b.lng, b.order]);
  }

  // 2. Insert Core Users
  console.log('Seeding Core Users & HR...');
  const users = [
    {
      name_ar: 'د. عبدالله إسحاق',
      name_en: 'Dr. Abdullah Ishaq',
      email: 'admin@umcopharma.com',
      password: adminPass,
      role: 'super_admin',
      phone: '+967 776 666 676'
    },
    {
      name_ar: 'أ. فاطمة الشامي',
      name_en: 'Fatima Al-Shami',
      email: 'hr@umcopharma.com',
      password: hrPass,
      role: 'hr_manager',
      phone: '+967 775 123 456'
    },
    {
      name_ar: 'م. طارق صالح',
      name_en: 'Eng. Tariq Saleh',
      email: 'tariq.saleh@umcopharma.com',
      password: empPass,
      role: 'employee',
      phone: '+967 771 223 344'
    },
    {
      name_ar: 'د. سميرة قحطان',
      name_en: 'Dr. Samira Qahtan',
      email: 'samira.qahtan@umcopharma.com',
      password: empPass,
      role: 'employee',
      phone: '+967 772 334 455'
    },
    {
      name_ar: 'أ. ياسر ردمان',
      name_en: 'Yasser Radman',
      email: 'yasser.radman@umcopharma.com',
      password: empPass,
      role: 'branch_manager',
      phone: '+967 773 339 362'
    },
    {
      name_ar: 'د. ريم المتوكل',
      name_en: 'Dr. Reem Al-Mutawakel',
      email: 'reem.almutawakel@umcopharma.com',
      password: empPass,
      role: 'employee',
      phone: '+967 774 556 677'
    },
    {
      name_ar: 'أ. أحمد ناصر',
      name_en: 'Ahmed Nasser',
      email: 'ahmed.nasser@umcopharma.com',
      password: empPass,
      role: 'medical_rep',
      phone: '+967 773 336 315'
    }
  ];

  const userIds = {};
  for (const u of users) {
    const res = run(`
      INSERT INTO users (name_ar, name_en, email, password_hash, role, phone)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [u.name_ar, u.name_en, u.email, u.password, u.role, u.phone]);
    userIds[u.email] = res.lastInsertRowid;
  }

  // 3. Insert HR Managed Employee Profiles
  console.log('Seeding HR Employee Profiles...');
  const hrId = userIds['hr@umcopharma.com'];
  const employees = [
    {
      user_id: userIds['tariq.saleh@umcopharma.com'],
      code: 'EMP-1001',
      title_ar: 'مهندس أول إنتاج وتصنيع دوائي',
      title_en: 'Senior Pharma Production Engineer',
      dept_ar: 'الإنتاج والتصنيع الدوائي',
      dept_en: 'Production & Manufacturing',
      branch_id: 1,
      hire_date: '2021-03-15',
      grade: 'Grade-A1',
      status: 'active',
      edu_ar: 'بكالوريوس هندسة كيميائية وصيدلانية',
      edu_en: 'B.Sc. Chemical & Pharmaceutical Engineering',
      notes: 'مسؤول خط إنتاج المراهم والكريمات المؤتمت'
    },
    {
      user_id: userIds['samira.qahtan@umcopharma.com'],
      code: 'EMP-1002',
      title_ar: 'أخصائية توكيد وضبط الجودة (QC/QA)',
      title_en: 'Quality Assurance & Control Specialist',
      dept_ar: 'ضبط وتأكيد الجودة',
      dept_en: 'Quality Control & QA',
      branch_id: 1,
      hire_date: '2020-07-01',
      grade: 'Grade-A2',
      status: 'active',
      edu_ar: 'ماجستير مراقبة الجودة الصيدلانية',
      edu_en: 'M.Sc. Pharmaceutical Quality Control',
      notes: 'مشرفة التحاليل الميكروبيولوجية واختبارات الثبات'
    },
    {
      user_id: userIds['yasser.radman@umcopharma.com'],
      code: 'EMP-1003',
      title_ar: 'مدير فرع عدن وسلاسل التوزيع الجنوبية',
      title_en: 'Aden Branch & Distribution Manager',
      dept_ar: 'سلاسل الإمداد والتوزيع',
      dept_en: 'Supply Chain & Distribution',
      branch_id: 2,
      hire_date: '2019-11-10',
      grade: 'Grade-M1',
      status: 'active',
      edu_ar: 'بكالوريوس إدارة أعمال وتسويق دوائي',
      edu_en: 'B.Sc. Business Administration & Pharma Marketing',
      notes: 'إدارة شبكة المستشفيات والمراكز الطبية في عدن ولحج'
    },
    {
      user_id: userIds['reem.almutawakel@umcopharma.com'],
      code: 'EMP-1004',
      title_ar: 'مسؤولة الشؤون التنظيمية والتيقظ الدوائي (QPPV)',
      title_en: 'Regulatory Affairs & Pharmacovigilance Officer',
      dept_ar: 'الشؤون التنظيمية والتيقظ الدوائي',
      dept_en: 'Regulatory Affairs & Pharmacovigilance',
      branch_id: 1,
      hire_date: '2022-01-20',
      grade: 'Grade-A2',
      status: 'active',
      edu_ar: 'دكتور صيدلة (Pharm.D)',
      edu_en: 'Doctor of Pharmacy (Pharm.D)',
      notes: 'ضابط الاتصال الرسمي مع الهيئة العليا للأدوية والمستلزمات الطبية'
    },
    {
      user_id: userIds['ahmed.nasser@umcopharma.com'],
      code: 'EMP-1005',
      title_ar: 'أخصائي دعاية طبية ومبيعات فرع تعز',
      title_en: 'Medical Representative - Taiz Branch',
      dept_ar: 'المبيعات والتسويق الطبي',
      dept_en: 'Sales & Medical Marketing',
      branch_id: 3,
      hire_date: '2023-05-15',
      grade: 'Grade-B1',
      status: 'active',
      edu_ar: 'بكالوريوس صيدلة عامة',
      edu_en: 'B.Sc. General Pharmacy',
      notes: 'تغطية عيادات الجراحة والجلدية والمشافي المركزية بتعز'
    }
  ];

  for (const emp of employees) {
    run(`
      INSERT INTO employees (user_id, employee_code, job_title_ar, job_title_en, department_ar, department_en, branch_id, hire_date, salary_grade, status, education_ar, education_en, notes, created_by_user_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [emp.user_id, emp.code, emp.title_ar, emp.title_en, emp.dept_ar, emp.dept_en, emp.branch_id, emp.hire_date, emp.grade, emp.status, emp.edu_ar, emp.edu_en, emp.notes, hrId]);
  }

  // 4. Insert Product Categories
  console.log('Seeding Product Categories...');
  const categories = [
    {
      slug: 'sterilizers-antiseptics',
      name_ar: 'المعقمات والمطهرات الطبية والجراحية',
      name_en: 'Medical & Surgical Sterilizers',
      desc_ar: 'محاليل ومعقمات بوفيدون يودين ومطهرات جراحية متوافقة مع معايير التعقيم العالمية للمستشفيات',
      desc_en: 'Povidone Iodine solutions, surgical scrubs, and hospital-grade antiseptics',
      icon: 'sparkles',
      order: 1
    },
    {
      slug: 'ointments-creams-gels',
      name_ar: 'المراهم والكريمات والجل',
      name_en: 'Ointments, Creams & Gels',
      desc_ar: 'مستحضرات جلدية وعلاجية عالية النقاء مصنعة على أحدث خطوط الإنتاج المؤتمتة',
      desc_en: 'Topical dermatology creams, soothing gels, and therapeutic ointments',
      icon: 'shield-check',
      order: 2
    },
    {
      slug: 'medical-drops',
      name_ar: 'القطرات الطبية العينية والأذنية',
      name_en: 'Ophthalmic & Otic Drops',
      desc_ar: 'قطرات عينية وأذنية معقمة ومطابقة لمعايير دستور الأدوية الدولي BP/USP',
      desc_en: 'Sterile eye and ear formulations manufactured under aseptic cleanroom conditions',
      icon: 'eye',
      order: 3
    },
    {
      slug: 'medicated-shampoos',
      name_ar: 'الشامبو الطبي والعلاجي',
      name_en: 'Medicated Shampoos',
      desc_ar: 'شامبوهات مضادة للقشرة والفطريات الجلدية بتركيبات طبية مثبتة علمياً',
      desc_en: 'Therapeutic antifungal and anti-dandruff formulations',
      icon: 'droplets',
      order: 4
    },
    {
      slug: 'medical-liquids',
      name_ar: 'السوائل والمحاليل الطبية',
      name_en: 'Medical Liquids & Douches',
      desc_ar: 'محاليل تطهير وغسول طبي وسوائل موضعية مطهرة بتركيزات دقيقة',
      desc_en: 'Medical douches, hydrogen peroxide, antiseptic liquids, and oral washes',
      icon: 'flask-conical',
      order: 5
    },
    {
      slug: 'medical-appliances',
      name_ar: 'المستلزمات والأجهزة الطبية',
      name_en: 'Medical Appliances & Supplies',
      desc_ar: 'مستلزمات جراحية ومستهلكات طبية معقمة ذات استخدام واحد موثوقة للمشافي والمراكز',
      desc_en: 'Single-use sterile syringes, IV sets, gauze, and medical supplies',
      icon: 'stethoscope',
      order: 6
    }
  ];

  const catIds = {};
  for (const cat of categories) {
    const res = run(`
      INSERT INTO product_categories (slug, name_ar, name_en, description_ar, description_en, icon, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [cat.slug, cat.name_ar, cat.name_en, cat.desc_ar, cat.desc_en, cat.icon, cat.order]);
    catIds[cat.slug] = res.lastInsertRowid;
  }

  // 5. Insert Products (Cleansed and Accurate from Rebuild Plan)
  console.log('Seeding Pharmaceutical Products Catalog...');
  const products = [
    {
      cat: 'sterilizers-antiseptics',
      slug: 'femicare-povidone-iodine-10',
      sku: 'UMCO-FEM-01',
      name_ar: 'فيميكير بوفيدون يودين 10%',
      name_en: 'Femicare Povidone Iodine 10%',
      scientific: 'Povidone Iodine 10% w/v',
      dosage_ar: 'محلول مطهر وغسول موضعي',
      dosage_en: 'Antiseptic Solution / Douche',
      concentration: '10% w/v',
      package: '200 ml Bottle with Applicator',
      ind_ar: 'محلول مطهر واسع الطيف للوقاية وعلاج الالتهابات والتعقيم قبل وبعد العمليات النسائية والجراحية.',
      ind_en: 'Broad-spectrum antimicrobial antiseptic for clinical gynecology, surgical prep, and wound irrigation.',
      usage_ar: 'يستخدم مخففاً أو غير مخفف حسب إرشادات الطبيب المختص مع الشطف بماء دافئ.',
      usage_en: 'Dilute with clean water as directed by physician, or apply topically for surgical prep.',
      storage_ar: 'يحفظ في درجة حرارة أقل من 30° مئوية بعيداً عن الضوء المباشر.',
      storage_en: 'Store below 30°C in a dry place protected from direct sunlight.',
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
      featured: 1
    },
    {
      cat: 'sterilizers-antiseptics',
      slug: 'vagiclean-antiseptic-solution',
      sku: 'UMCO-VAG-02',
      name_ar: 'فاجي كلين محلول مطهر',
      name_en: 'Vagiclean Antiseptic Solution',
      scientific: 'Chlorhexidine Digluconate + Cetrimide',
      dosage_ar: 'محلول مطهر مركّز',
      dosage_en: 'Concentrated Antiseptic Solution',
      concentration: '0.05% + 0.5% w/v',
      package: '250 ml Bottle',
      ind_ar: 'تطهير الجروح، الحروق الطفيفة، وغسيل الأنسجة في العيادات والعمليات الصغرى.',
      ind_en: 'General antisepsis of wounds, skin disinfection, and obstetric/gynecological hygiene.',
      usage_ar: 'يخفف بالماء المعقم بنسبة 1:10 قبل الاستخدام.',
      usage_en: 'Dilute 1:10 with sterile water prior to clinical application.',
      storage_ar: 'يحفظ تحت 25° مئوية.',
      storage_en: 'Store below 25°C.',
      img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&auto=format&fit=crop&q=80',
      featured: 1
    },
    {
      cat: 'sterilizers-antiseptics',
      slug: 'umco-scrub-surgical-scrub',
      sku: 'UMCO-SCR-03',
      name_ar: 'أمكو سكراب غسول جراحي',
      name_en: 'Umco Scrub Surgical Scrub',
      scientific: 'Chlorhexidine Gluconate 4% w/v with Emollients',
      dosage_ar: 'غسول رغوي جراحي معقم',
      dosage_en: 'Surgical Antimicrobial Hand Scrub',
      concentration: '4% w/v',
      package: '500 ml Dispenser Bottle / 5 Liters Jerrycan',
      ind_ar: 'تعقيم أيدي الجراحين والكوادر الطبية قبل العمليات الجراحية، وغسيل الجلد قبل التداخلات الطبية.',
      ind_en: 'Preoperative surgical hand scrubbing and healthcare personnel antiseptic handwashing.',
      usage_ar: 'يفرك لمدة 3 إلى 5 دقائق على الأيدي والأذرع ثم يشطف جيداً بالماء المعقم.',
      usage_en: 'Wet hands and forearms, scrub vigorously for 3-5 minutes, rinse thoroughly.',
      storage_ar: 'يحفظ في درجة حرارة الغرفة (15-30° مئوية).',
      storage_en: 'Store at 15-30°C.',
      img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop&q=80',
      featured: 1
    },
    {
      cat: 'ointments-creams-gels',
      slug: 'umco-cort-n-ointment',
      sku: 'UMCO-CRT-04',
      name_ar: 'أمكو كورت-إن مرهم علاجي',
      name_en: 'Umco Cort-N Ointment',
      scientific: 'Hydrocortisone Acetate 1% + Neomycin Sulfate 0.5%',
      dosage_ar: 'مرهم جلدي موضعي',
      dosage_en: 'Topical Dermatological Ointment',
      concentration: '10 mg/g + 5 mg/g',
      package: '30g Aluminum Tube',
      ind_ar: 'علاج التهابات الجلد التحسسية المصحوبة بعدوى بكتيرية ثانوية كالإكزيما والتهاب الجلد التماسي.',
      ind_en: 'Inflammatory dermatoses responsive to corticosteroids with secondary bacterial infection.',
      usage_ar: 'يدهن طبقة رقيقة على المنطقة المصابة مرتين إلى 3 مرات يومياً.',
      usage_en: 'Apply a thin film to the affected skin area 2-3 times daily.',
      storage_ar: 'يحفظ في درجة حرارة أقل من 25° مئوية.',
      storage_en: 'Store below 25°C.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
      featured: 1
    },
    {
      cat: 'ointments-creams-gels',
      slug: 'umco-thrin-cream',
      sku: 'UMCO-THN-05',
      name_ar: 'أمكو ثرين كريم مضاد للجرب',
      name_en: 'Umco Thrin Cream 5%',
      scientific: 'Permethrin 5% w/w',
      dosage_ar: 'كريم جلدي علاجي',
      dosage_en: 'Therapeutic Scabicidal Cream',
      concentration: '50 mg/g',
      package: '30g / 60g Tube',
      ind_ar: 'العلاج الجذري الفعال لداء الجرب وحكة الجلد الناتجة عن العث لدى البالغين والأطفال.',
      ind_en: 'Treatment of scabies (Sarcoptes scabiei) infestation in adults and children.',
      usage_ar: 'يدهن على كامل الجسم من الرقبة حتى أخمص القدمين ويترك لمدة 8 إلى 14 ساعة قبل الاستحمام.',
      usage_en: 'Thoroughly massage into the skin from the neck to the soles of the feet, leave 8-14 hours then wash off.',
      storage_ar: 'يحفظ بعيداً عن الحرارة المباشرة (أقل من 25° م).',
      storage_en: 'Store below 25°C.',
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
      featured: 1
    },
    {
      cat: 'ointments-creams-gels',
      slug: 'umco-burn-gel',
      sku: 'UMCO-BRN-06',
      name_ar: 'أمكو بيرن جل مهدئ للحروق',
      name_en: 'Umco Burn Soothing Gel',
      scientific: 'Beta-Sitosterol + Aloe Vera Extract + Vitamin E',
      dosage_ar: 'جل عشبي مهدئ ومعالج',
      dosage_en: 'Moisturizing & Regenerative Burn Gel',
      concentration: '0.25% Herbal Complex',
      package: '40g Tube',
      ind_ar: 'تلطيف وتسريع شفاء الحروق من الدرجتين الأولى والثانية، حروق الشمس، والتقرحات السطحية.',
      ind_en: 'Symptomatic relief and tissue regeneration for 1st and 2nd degree burns, sunburns, and superficial wounds.',
      usage_ar: 'يوضع طبقة بسمك 1 ملم كل 4 إلى 6 ساعات على موضع الحرق.',
      usage_en: 'Apply a 1mm thin layer over the burn area every 4-6 hours.',
      storage_ar: 'يحفظ في مكان بارد وجاف.',
      storage_en: 'Keep in a cool dry place.',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
      featured: 1
    },
    {
      cat: 'medicated-shampoos',
      slug: 'umco-ketoconazole-shampoo',
      sku: 'UMCO-KTC-07',
      name_ar: 'أمكو كيتوكونازول شامبو طبي 2%',
      name_en: 'Umco Ketoconazole Medicated Shampoo 2%',
      scientific: 'Ketoconazole 2% w/v',
      dosage_ar: 'شامبو علاجي مضاد للفطريات',
      dosage_en: 'Antifungal Medicated Shampoo',
      concentration: '20 mg/ml',
      package: '120 ml Bottle',
      ind_ar: 'علاج القشرة الشديدة، التهاب الجلد الدهني (Seborrheic Dermatitis)، والتينيا المبرقشة.',
      ind_en: 'Treatment and prophylaxis of pityriasis versicolor, seborrhoeic dermatitis, and severe dandruff.',
      usage_ar: 'يدلك على فروة الرأس المبللة ويترك لمدة 3-5 دقائق قبل الشطف، مرتين أسبوعياً لمدة 4 أسابيع.',
      usage_en: 'Wash hair, leave on scalp for 3-5 minutes before rinsing. Use twice weekly for 2-4 weeks.',
      storage_ar: 'يحفظ أقل من 25° مئوية.',
      storage_en: 'Store below 25°C.',
      img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=80',
      featured: 0
    },
    {
      cat: 'medical-drops',
      slug: 'umco-tears-lubricant-drops',
      sku: 'UMCO-TRS-08',
      name_ar: 'أمكو تيرز قطرة مرطبة للعين',
      name_en: 'Umco Tears Lubricant Eye Drops',
      scientific: 'Sodium Hyaluronate 0.2% + HPMC',
      dosage_ar: 'قطرة عينية معقمة خالية من المواد الحافظة القاسية',
      dosage_en: 'Sterile Ophthalmic Lubricating Drops',
      concentration: '0.2% w/v',
      package: '10 ml Dropper Bottle',
      ind_ar: 'علاج جفاف وإجهاد العين الناتج عن شاشات الأجهزة، الغبار، والظروف البيئية الجافة.',
      ind_en: 'Relief of eye dryness, burning, and ocular fatigue caused by screen use and dry climates.',
      usage_ar: '1-2 نقطة في كل عين 3 إلى 4 مرات يومياً أو عند الحاجة.',
      usage_en: 'Instill 1-2 drops into affected eye(s) 3-4 times daily or as needed.',
      storage_ar: 'تحفظ العبوة محكمة الإغلاق تحت 25° م وتستخدم خلال 30 يوماً من الفتح.',
      storage_en: 'Store below 25°C. Discard 30 days after opening.',
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
      featured: 0
    },
    {
      cat: 'medical-appliances',
      slug: 'umco-sterile-syringes-5ml',
      sku: 'UMCO-SYR-09',
      name_ar: 'سرنجات أمكو الطبية المعقمة 5 مل',
      name_en: 'Umco Sterile 3-Part Syringes 5ml',
      scientific: 'Medical Grade Polypropylene + Rubber Gasket',
      dosage_ar: 'مستلزم طبي معقم استخدام فردي',
      dosage_en: 'Sterile Single-Use Syringe with Needle',
      concentration: '5 ml / 22G Needle',
      package: 'Box of 100 Individual Blister Packs',
      ind_ar: 'حقن الأدوية الوريدية والعضلية وسحب العينات الطبية وفق أعلى اشتراطات الأمان ومنع التسرب.',
      ind_en: 'Precise intramuscular and intravenous medication administration and medical fluid sampling.',
      usage_ar: 'معقمة بالغاز E.O. للاستخدام الفردي لمرة واحدة فقط.',
      usage_en: 'E.O. Gas Sterilized. Single use only. Non-toxic, non-pyrogenic.',
      storage_ar: 'يحفظ في مكان جاف ونظيف بعيداً عن الرطوبة.',
      storage_en: 'Store in dry sanitary conditions.',
      img: 'https://images.unsplash.com/photo-1583912267670-6575ad4736f8?w=800&auto=format&fit=crop&q=80',
      featured: 1
    }
  ];

  for (const p of products) {
    run(`
      INSERT INTO products (category_id, slug, sku, trade_name_ar, trade_name_en, scientific_name, dosage_form_ar, dosage_form_en, concentration, package_size, indications_ar, indications_en, usage_instructions_ar, usage_instructions_en, storage_conditions_ar, storage_conditions_en, image_url, is_featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [catIds[p.cat], p.slug, p.sku, p.name_ar, p.name_en, p.scientific, p.dosage_ar, p.dosage_en, p.concentration, p.package, p.ind_ar, p.ind_en, p.usage_ar, p.usage_en, p.storage_ar, p.storage_en, p.img, p.featured]);
  }

  // 6. Insert Employee Tasks (Assigned by HR / Admin to Employees)
  console.log('Seeding Employee Tasks & Workflows...');
  const tasks = [
    {
      title_ar: 'معايرة خط تعبئة المراهم الآلي رقم 1 والتأكد من أوزان العبوات',
      title_en: 'Calibration of Automated Ointment Filling Line 1 & Weight Verification',
      desc_ar: 'إجراء الفحص الدوري الدوري لمكبس التعبئة الآلي لمرهم أمكو كورت-إن والتأكد من عدم وجود تفاوت في وزن العبوة 30 جم وفق متطلبات GMP.',
      desc_en: 'Perform scheduled calibration on the automated tube filler for Umco Cort-N ointment, ensuring exact 30g tolerances per GMP protocols.',
      assigned_to: userIds['tariq.saleh@umcopharma.com'],
      created_by: hrId,
      category: 'production',
      priority: 'urgent',
      status: 'in_progress',
      progress: 65,
      due_date: '2026-10-28',
      est_hours: 8,
      act_hours: 5
    },
    {
      title_ar: 'فحص العقامة الميكروبيولوجية لدفعة فيميكير (Batch 2026-F12)',
      title_en: 'Microbiological Sterility Testing for Femicare Batch 2026-F12',
      desc_ar: 'أخذ عينات عشوائية من خط المعقمات وإجراء زرع ميكروبي لمدة 72 ساعة لتوثيق شهادة التحليل المخبري (Certificate of Analysis).',
      desc_en: 'Conduct random batch sampling from sterilizer line and incubate microbiological cultures for 72 hours for COA release.',
      assigned_to: userIds['samira.qahtan@umcopharma.com'],
      created_by: hrId,
      category: 'quality_assurance',
      priority: 'high',
      status: 'in_review',
      progress: 90,
      due_date: '2026-10-29',
      est_hours: 12,
      act_hours: 11
    },
    {
      title_ar: 'مراجعة وتوريد طلبيات مشافي عدن المركزية لشهر أكتوبر',
      title_en: 'Aden Central Hospitals October Medical Supplies Fulfillment Review',
      desc_ar: 'متابعة تسليم مناقصة المستلزمات والمعقمات لمستشفى الجمهورية وهيئة مستشفى الصداقة بعدن واستلام إشعارات الاستلام الرسمية.',
      desc_en: 'Verify dispatch and delivery of tenders for antiseptics and syringes to Al-Jumhouriyah & Al-Sadaqah Hospitals in Aden.',
      assigned_to: userIds['yasser.radman@umcopharma.com'],
      created_by: hrId,
      category: 'sales_distribution',
      priority: 'high',
      status: 'completed',
      progress: 100,
      due_date: '2026-10-24',
      est_hours: 16,
      act_hours: 14
    },
    {
      title_ar: 'إعداد ملف تجديد تسجيل مستحضرات البوفيدون يودين لدى الهيئة العليا للأدوية',
      title_en: 'Prepare Povidone Iodine Re-Registration Dossier for Supreme Board of Drugs',
      desc_ar: 'تحديث النشرات العلمية ودراسات الثبات المتسارعة لمستحضرات فيميكير ورفع الملف التحديثي للهيئة بصنعاء.',
      desc_en: 'Compile updated CTD stability dossiers and leaflets for Femicare portfolio submission to SBDMA Sana\'a.',
      assigned_to: userIds['reem.almutawakel@umcopharma.com'],
      created_by: hrId,
      category: 'regulatory',
      priority: 'urgent',
      status: 'in_progress',
      progress: 40,
      due_date: '2026-11-05',
      est_hours: 24,
      act_hours: 10
    },
    {
      title_ar: 'تنظيم زيارات علمية لعيادات الجلدية والمشافي الجراحية في تعز',
      title_en: 'Medical Detailing Visits to Dermatology & Surgical Centers in Taiz',
      desc_ar: 'التعريف بمنتجات أمكو ثرين كريم وأمكو سكراب وتوزيع العينات الطبية والنشرات التوضيحية على الأطباء الاستشاريين.',
      desc_en: 'Detail Umco Thrin & Umco Scrub to dermatologists and surgeons, distributing medical brochures and physician samples.',
      assigned_to: userIds['ahmed.nasser@umcopharma.com'],
      created_by: hrId,
      category: 'medical_affairs',
      priority: 'medium',
      status: 'todo',
      progress: 10,
      due_date: '2026-11-02',
      est_hours: 20,
      act_hours: 2
    }
  ];

  for (const t of tasks) {
    const res = run(`
      INSERT INTO tasks (title_ar, title_en, description_ar, description_en, assigned_to_user_id, created_by_user_id, category, priority, status, progress_percent, due_date, estimated_hours, actual_hours)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [t.title_ar, t.title_en, t.desc_ar, t.desc_en, t.assigned_to, t.created_by, t.category, t.priority, t.status, t.progress, t.due_date, t.est_hours, t.act_hours]);

    // Add initial task comment
    run(`
      INSERT INTO task_comments (task_id, user_id, comment)
      VALUES (?, ?, ?)
    `, [res.lastInsertRowid, hrId, 'تم تعيين المهمة من إدارة الموارد البشرية وتحديد موعد الإنجاز المستهدف.']);
  }

  // 7. Insert Notifications
  console.log('Seeding Notifications...');
  const notifs = [
    {
      to: userIds['tariq.saleh@umcopharma.com'],
      from: hrId,
      type: 'task_assigned',
      title_ar: 'مهمة جديدة: معايرة خط تعبئة المراهم 1',
      title_en: 'New Task: Calibration of Ointment Line 1',
      msg_ar: 'قامت إدارة الموارد البشرية بإسناد مهمة معايرة دورية عاجلة لك.',
      msg_en: 'HR management assigned an urgent periodic calibration task to you.',
      url: '/tasks'
    },
    {
      to: userIds['samira.qahtan@umcopharma.com'],
      from: hrId,
      type: 'task_assigned',
      title_ar: 'مهمة فحص العقامة لدفعة فيميكير',
      title_en: 'Sterility Testing Task for Femicare Batch',
      msg_ar: 'يرجى مراجعة نتائج التحضين وإرفاق شهادة الإفراج للمستودعات.',
      msg_en: 'Please review incubation outcomes and attach the QC release report.',
      url: '/tasks'
    },
    {
      to: hrId,
      from: userIds['yasser.radman@umcopharma.com'],
      type: 'task_status_changed',
      title_ar: 'اكتملت مهمة توريدات مشافي عدن',
      title_en: 'Aden Hospitals Supply Task Completed',
      msg_ar: 'قام أ. ياسر ردمان بإنهاء المهمة بنسبة 100% وإرفاق سندات الاستلام.',
      msg_en: 'Yasser Radman marked the task as 100% complete with delivery receipts.',
      url: '/tasks'
    },
    {
      to: hrId,
      from: null,
      type: 'rfq_alert',
      title_ar: 'طلب عرض سعر جديد (RFQ) من مستشفى الثورة العام',
      title_en: 'New RFQ Received from Al-Thawra General Hospital',
      msg_ar: 'طلب تسعير لكميات من المعقمات الجراحية والمحاليل الطبية.',
      msg_en: 'Bulk quote request for surgical antiseptics and medical solutions.',
      url: '/quotes'
    }
  ];

  for (const n of notifs) {
    run(`
      INSERT INTO notifications (recipient_user_id, sender_user_id, type, title_ar, title_en, message_ar, message_en, link_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [n.to, n.from, n.type, n.title_ar, n.title_en, n.msg_ar, n.msg_en, n.url]);
  }

  // 8. Insert Sample RFQ & PV Report
  console.log('Seeding Sample RFQ & PV Report...');
  run(`
    INSERT INTO quote_requests (quote_number, company_or_pharmacy, contact_person, phone, email, governorate, inquiry_type, items_json, notes, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    'RFQ-2026-001',
    'مستشفى الثورة العام النموذجي - صنعاء',
    'د. منصور القباطي (مدير المشتريات والمستلزمات)',
    '+967 771 999 888',
    'procurement@al-thawra-hospital.ye',
    'صنعاء',
    'Tender',
    JSON.stringify([
      { product_id: 1, name: 'فيميكير بوفيدون يودين 10%', quantity: 500 },
      { product_id: 3, name: 'أمكو سكراب غسول جراحي 500 مل', quantity: 300 },
      { product_id: 9, name: 'سرنجات أمكو الطبية 5 مل', quantity: 2000 }
    ]),
    'يرجى تزويدنا بعرض سعر رسمي معتمد شامل التوصيل المباشر لمخازن الهيئة الطبية.',
    'under_review'
  ]);

  run(`
    INSERT INTO pharmacovigilance_reports (report_reference, reporter_name, reporter_role, phone, email, patient_initials, patient_age, patient_gender, product_name, batch_number, adverse_reaction, severity, action_taken, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    'PV-2026-1001',
    'د. نجلاء الهمداني',
    'Pharmacist (صيدلانية مجتمعية)',
    '+967 772 111 222',
    'dr.najla@pharmacy-plus.ye',
    'م. ع. ح',
    34,
    'Female',
    'Umco Cort-N Ointment',
    'B26-049',
    'احمرار خفيف موضعي وحكة طفيفة بعد التطبيق الأول ثم زالت بعد غسل المنطقة.',
    'mild',
    'تم إيقاف الاستخدام ومتابعة الحالة مع الطبيب المعالج والتحقق من رقم الدفعة المصنعية.',
    'investigating'
  ]);

  console.log('--- UMCO Database Seeding Completed Successfully! ---');
};

seedDatabase().catch((err) => {
  console.error('Seeding Error:', err);
  process.exit(1);
});
