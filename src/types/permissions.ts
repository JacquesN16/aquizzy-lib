import { UserRole } from '../enums/user'

/**
 * Feature permissions computed by backend based on user role
 * This object is sent to frontend instead of raw roles
 */
export interface UserPermissions {
  // Quiz Management
  canCreateQuiz: boolean
  canEditQuiz: boolean
  canPublishQuiz: boolean
  canDeleteQuiz: boolean
  canViewAllQuizzes: boolean

  // Quiz Taking
  canTakeQuiz: boolean

  // Results
  canViewOwnResults: boolean
  canViewAllResults: boolean

  // User Management (for future admin features)
  canManageUsers: boolean
}

/**
 * Default permissions for each role
 */
export const ROLE_PERMISSIONS: Record<string, UserPermissions> = {
  STUDENT: {
    canCreateQuiz: false,
    canEditQuiz: false,
    canPublishQuiz: false,
    canDeleteQuiz: false,
    canViewAllQuizzes: false,
    canTakeQuiz: true,
    canViewOwnResults: true,
    canViewAllResults: false,
    canManageUsers: false,
  },
  TEACHER: {
    canCreateQuiz: true,
    canEditQuiz: true,
    canPublishQuiz: true,
    canDeleteQuiz: true,
    canViewAllQuizzes: true,
    canTakeQuiz: true,
    canViewOwnResults: true,
    canViewAllResults: true,
    canManageUsers: false,
  },
  ADMIN: {
    canCreateQuiz: true,
    canEditQuiz: true,
    canPublishQuiz: true,
    canDeleteQuiz: true,
    canViewAllQuizzes: true,
    canTakeQuiz: true,
    canViewOwnResults: true,
    canViewAllResults: true,
    canManageUsers: true,
  },
}
