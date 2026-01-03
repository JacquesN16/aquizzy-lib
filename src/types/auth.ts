import { UserPermissions } from './permissions'

/**
 * Response from login/signup endpoints
 * Contains user info (without role) + permissions + token
 */
export interface AuthResponse {
  user: {
    id: string
    email: string
  }
  permissions: UserPermissions
  accessToken: string
}

/**
 * Signup request with role selection
 */
export interface SignupRequest {
  email: string
  username: string
  password: string
  role: 'TEACHER' | 'STUDENT' // Only allow TEACHER or STUDENT during signup
}
