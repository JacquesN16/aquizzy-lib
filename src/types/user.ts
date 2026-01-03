import { UserRole } from '../enums/user'

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  phoneNumber?: string;
  profilePhotoUrl?: string;
  country?: string;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Backend-only User interface with role
 * Used internally by backend, never sent to frontend
 */
export interface UserWithRole extends User {
  role: UserRole;
}
