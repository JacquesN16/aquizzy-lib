import { ShareAccessType, SharePermission } from '../enums/share'

export interface IShareRecipient {
  id: string
  shareLinkId: string
  email: string
}

export interface IShareLink {
  id: string
  resourceId: string
  token: string
  accessType: ShareAccessType
  permission: SharePermission
  expiresAt?: Date
  isActive: boolean
  createdAt: Date
  recipients?: IShareRecipient[]
}

export interface CreateShareLinkDto {
  resourceId: string
  accessType: ShareAccessType
  permission: SharePermission
  expiresAt?: Date
  emails?: string[]
}

export interface UpdateShareLinkDto {
  permission?: SharePermission
  expiresAt?: Date
  isActive?: boolean
}

export interface AddRecipientsDto {
  emails: string[]
}

export interface ValidateShareAccessDto {
  token: string
  userEmail?: string
}

export interface ShareAccessResponse {
  allowed: boolean
  permission?: SharePermission
  resourceId?: string
}
