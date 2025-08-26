import { AdminRole } from '../../tenancy/enums/admin-role.enum.js';

export interface JwtPayload {
  sub: string;
  email: string;
  role: AdminRole;
}
