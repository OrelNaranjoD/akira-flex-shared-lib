export interface AdminUserEntity {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  roles: string[];
}
