/**
 * Profile-related DTOs and types
 */

/**
 * DTO for updating user profile information
 * All fields are optional to allow partial updates
 */
export interface UpdateProfileDto {
  email?: string;
  username?: string;
  phoneNumber?: string;
  country?: string;
}

/**
 * DTO for changing user password
 */
export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

/**
 * Response DTO for profile information
 * Excludes sensitive fields like password
 */
export interface ProfileResponseDto {
  id: string;
  email: string;
  username: string;
  phoneNumber?: string;
  profilePhotoUrl?: string;
  country?: string;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Validation rules for profile fields
 */
export const ProfileValidation = {
  username: {
    minLength: 3,
    pattern: /^[a-zA-Z0-9_]+$/,
    message: 'Username must be at least 3 characters and contain only alphanumeric characters and underscores',
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email format',
  },
  phoneNumber: {
    pattern: /^\+?[1-9]\d{1,14}$/,
    message: 'Phone number must be in international format (E.164)',
  },
  country: {
    pattern: /^[A-Z]{2}$/,
    message: 'Country must be a valid ISO 3166-1 alpha-2 code',
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
    message: 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number',
  },
} as const;
