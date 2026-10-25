require('dotenv').config();
const path = require('path');

module.exports = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'umco_pharma_jwt_ultra_secret_key_2026',
  jwtExpiresIn: '7d',
  dbPath: path.resolve(__dirname, '../../data/umco.db'),
  roles: {
    SUPER_ADMIN: 'super_admin',
    HR_MANAGER: 'hr_manager',
    BRANCH_MANAGER: 'branch_manager',
    EMPLOYEE: 'employee',
    MEDICAL_REP: 'medical_rep'
  },
  taskStatuses: {
    TODO: 'todo',
    IN_PROGRESS: 'in_progress',
    IN_REVIEW: 'in_review',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
  },
  taskPriorities: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    URGENT: 'urgent'
  }
};
