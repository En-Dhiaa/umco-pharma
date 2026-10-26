-- =====================================================================
-- UMCO Pharmaceuticals - Enterprise Database Schema
-- Multi-Role Auth, HR Directory, Employee Tasks, Notifications,
-- Product Catalog, Branches Network, B2B Quotes, Pharmacovigilance
-- =====================================================================

-- 1. Users Table (Core Auth & Profile)
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name_ar TEXT NOT NULL,
    name_en TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('super_admin', 'hr_manager', 'branch_manager', 'employee', 'medical_rep', 'marketing')),
    phone TEXT,
    avatar_url TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Branches Network (9 Verified Branches across Yemen)
CREATE TABLE IF NOT EXISTS branches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city_ar TEXT NOT NULL,
    city_en TEXT NOT NULL,
    is_headquarters INTEGER DEFAULT 0,
    address_ar TEXT NOT NULL,
    address_en TEXT NOT NULL,
    phone_primary TEXT NOT NULL,
    phone_secondary TEXT,
    fax TEXT,
    email TEXT NOT NULL DEFAULT 'info@umcopharma.com',
    manager_name_ar TEXT,
    manager_name_en TEXT,
    latitude REAL,
    longitude REAL,
    display_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Employees Directory (HR Managed Profiles)
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    employee_code TEXT UNIQUE NOT NULL,
    job_title_ar TEXT NOT NULL,
    job_title_en TEXT NOT NULL,
    department_ar TEXT NOT NULL,
    department_en TEXT NOT NULL,
    branch_id INTEGER REFERENCES branches(id) ON DELETE SET NULL,
    hire_date DATE NOT NULL,
    salary_grade TEXT,
    status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active', 'on_leave', 'suspended', 'terminated')),
    national_id TEXT,
    education_ar TEXT,
    education_en TEXT,
    emergency_contact TEXT,
    notes TEXT,
    created_by_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Employee Tasks Table (HR & Manager Task Management)
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_ar TEXT NOT NULL,
    title_en TEXT NOT NULL,
    description_ar TEXT,
    description_en TEXT,
    assigned_to_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_by_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category TEXT NOT NULL CHECK(category IN ('production', 'quality_assurance', 'regulatory', 'sales_distribution', 'hr_admin', 'maintenance', 'medical_affairs')),
    priority TEXT NOT NULL DEFAULT 'medium' CHECK(priority IN ('low', 'medium', 'high', 'urgent')),
    status TEXT NOT NULL DEFAULT 'todo' CHECK(status IN ('todo', 'in_progress', 'in_review', 'completed', 'cancelled')),
    progress_percent INTEGER DEFAULT 0 CHECK(progress_percent >= 0 AND progress_percent <= 100),
    due_date DATE,
    completed_at DATETIME,
    estimated_hours REAL,
    actual_hours REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. Task Comments & Audit Logs
CREATE TABLE IF NOT EXISTS task_comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    comment TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 6. Notifications System
CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipient_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    sender_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    type TEXT NOT NULL CHECK(type IN ('task_assigned', 'task_status_changed', 'task_comment', 'task_due_soon', 'rfq_alert', 'pv_alert', 'hr_notice')),
    title_ar TEXT NOT NULL,
    title_en TEXT NOT NULL,
    message_ar TEXT NOT NULL,
    message_en TEXT NOT NULL,
    link_url TEXT,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 7. Product Categories (Bilingual Hierarchy)
CREATE TABLE IF NOT EXISTS product_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name_ar TEXT NOT NULL,
    name_en TEXT NOT NULL,
    description_ar TEXT,
    description_en TEXT,
    icon TEXT,
    display_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1
);

-- 8. Products Catalog (Pharmaceutical & Medical Appliances)
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL REFERENCES product_categories(id) ON DELETE CASCADE,
    slug TEXT UNIQUE NOT NULL,
    sku TEXT UNIQUE,
    trade_name_ar TEXT NOT NULL,
    trade_name_en TEXT NOT NULL,
    scientific_name TEXT,
    dosage_form_ar TEXT NOT NULL,
    dosage_form_en TEXT NOT NULL,
    concentration TEXT,
    package_size TEXT,
    indications_ar TEXT,
    indications_en TEXT,
    usage_instructions_ar TEXT,
    usage_instructions_en TEXT,
    storage_conditions_ar TEXT,
    storage_conditions_en TEXT,
    image_url TEXT,
    datasheet_url TEXT,
    is_featured INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 9. B2B Quote Requests (RFQ System)
CREATE TABLE IF NOT EXISTS quote_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quote_number TEXT UNIQUE NOT NULL,
    company_or_pharmacy TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    governorate TEXT NOT NULL,
    inquiry_type TEXT NOT NULL,
    items_json TEXT NOT NULL,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new', 'under_review', 'quoted', 'accepted', 'rejected')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 10. Pharmacovigilance & Adverse Drug Reaction Reports (PV Hub)
CREATE TABLE IF NOT EXISTS pharmacovigilance_reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    report_reference TEXT UNIQUE NOT NULL,
    reporter_name TEXT NOT NULL,
    reporter_role TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    patient_initials TEXT,
    patient_age INTEGER,
    patient_gender TEXT,
    product_name TEXT NOT NULL,
    batch_number TEXT,
    adverse_reaction TEXT NOT NULL,
    severity TEXT NOT NULL DEFAULT 'mild' CHECK(severity IN ('mild', 'moderate', 'severe', 'critical')),
    action_taken TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'investigating', 'resolved', 'closed')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 11. Medical Announcements, Advertisements & Campaigns (Marketing Hub)
CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_ar TEXT NOT NULL,
    title_en TEXT NOT NULL,
    content_ar TEXT NOT NULL,
    content_en TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'campaign' CHECK(category IN ('campaign', 'launch', 'awareness', 'tender', 'news')),
    badge_ar TEXT,
    badge_en TEXT,
    image_url TEXT,
    link_url TEXT,
    is_active INTEGER DEFAULT 1,
    author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 12. Interactive Customer & Doctor Inquiries (Marketing & Medical Team Support)
CREATE TABLE IF NOT EXISTS customer_inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    inquiry_number TEXT UNIQUE NOT NULL,
    client_name TEXT NOT NULL,
    client_contact TEXT NOT NULL,
    client_type TEXT NOT NULL DEFAULT 'pharmacist' CHECK(client_type IN ('doctor', 'pharmacist', 'patient', 'distributor', 'hospital')),
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK(status IN ('new', 'replied', 'closed')),
    reply_message TEXT,
    replied_by_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    replied_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indices for Fast Queries
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_employees_code ON employees(employee_code);
CREATE INDEX IF NOT EXISTS idx_employees_status ON employees(status);
CREATE INDEX IF NOT EXISTS idx_employees_dept ON employees(department_en);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned_to ON tasks(assigned_to_user_id);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_notifications_recipient ON notifications(recipient_user_id, is_read);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_announcements_cat ON announcements(category, is_active);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON customer_inquiries(status);

