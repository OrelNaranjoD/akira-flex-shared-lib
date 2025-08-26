import { UserStatus } from '../enums/user-status.enum.js';

export interface User {
  id: string;
  email: string;
  fullName: string;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}
