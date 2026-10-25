# منصة شركة أمكو للصناعات الدوائية والطبية | UMCO Pharmaceuticals Platform
> **Enterprise Bilingual Pharma Web Platform, Operations & Employee Task Management System**  
> Developed for **UMCO Pharmaceuticals** (أمكو للصناعات الدوائية والطبية) — Sana'a, Yemen.

---

## 🌟 نظرة عامة | Overview
منصة دوائية وصناعية متطورة ثنائية اللغة (عربي / إنجليزي) مصممة وفق أحدث المعايير العالمية لشركات الأدوية (GMP / ISO Standards). تجمع المنصة بين:
1. **الموقع المؤسسي والكتالوج الدوائي التفاعلي (Public Pharmaceutical Portal):**
   - استعراض الكتالوج الطبي المتكامل مع تصنيفات تفاعلية وفلاتر دقيقة.
   - منظومة خطوط الإنتاج المؤتمتة الثلاثة ومختبرات ضبط وتأكيد الجودة (QC/QA).
   - شبكة الفروع التسعة في الجمهورية اليمنية مع خرائط وبيانات تواصل مباشرة.
   - طلبات عروض الأسعار والتوريد (B2B & RFQ Quotation Builder).
   - بوابة التيقظ الدوائي والإبلاغ عن الآثار الجانبية (Pharmacovigilance Hub).

2. **بوابة إدارة العمليات والموارد البشرية والمهام (Enterprise Operations & HR Portal):**
   - **نظام صلاحيات متقدم (RBAC):** مشرف النظام (Super Admin)، مدير الموارد البشرية (HR Manager)، مسؤول الفروع (Branch Manager)، والموظف (Employee / Specialist).
   - **إدارة الموظفين عبر الـ HR (HR Employee Directory):** إضافة الموظفين وتعديل بياناتهم وتعيين الأقسام والفروع ومتابعة الأداء.
   - **نظام مهام الموظفين التفاعلي (Employee Tasks & Kanban):** توزيع المهام، تحديد الأولويات والمواعيد، لوحة كانبان تفاعلية، تتبع الإنجاز، وإرفاق التعليقات والملفات.
   - **نظام الإشعارات المباشر (Real-time Notifications Center):** تنبيهات فورية للمهام الجديدة، تحديثات الحالات، طلبات عروض الأسعار، وتنبيهات الجودة.

---

## 🚀 التقنيات المستخدمة | Tech Stack
- **الواجهة الخلفية (Backend):** Node.js / Express.js مع معمارية RESTful API محكمة وموثقة.
- **قاعدة البيانات (Database):** SQLite3 عالية الأداء مع وضع WAL ومعاملات ذرية وتغذية أولية كاملة للبيانات (Seeding).
- **الأمان والصلاحيات (Auth & Security):** JWT Tokens, bcrypt password hashing, RBAC Middleware, Rate Limiting, CORS, Input Validation.
- **الواجهة الأمامية (Frontend):** Modern Reactive UI مع نظام تصميم طبي مخصص (Deep Pharma Navy & UMCO Crimson)، دعم كامل للـ RTL/LTR، أيقونات تفاعلية، ولوحات تحكم ديناميكية.
- **إدارة المستودع (GitHub):** مستودع خاص تحت حساب [En-Dhiaa/umco-pharma](https://github.com/En-Dhiaa/umco-pharma).

---

## ⚙️ التشغيل والتشغيل التجريبي | Quick Start
```bash
# تثبيت الحزم
npm install

# تشغيل النظام في وضع التطوير
npm run dev
```

---

## 🏛️ بيانات الشركة والفروع المعتمدة
- **المقر الرئيسي:** صنعاء، حدة، شارع رقم 4، مبنى 64، جوار شركة كمران.
- **هاتف الإدارة:** `+967 1 414035` / `414025` / `414015`
- **البريد الرسمي الموحد:** `info@umcopharma.com`
- **المسؤول المخول:** د. عبدالله إسحاق (`+967 776 666 676`)
- **الفروع:** صنعاء، عدن، تعز، إب، الحديدة، حضرموت، مأرب، ذمار، صعدة.
