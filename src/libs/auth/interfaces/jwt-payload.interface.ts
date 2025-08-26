import { AdminRole } from '../../tenancy/enums/admin-role.enum.ts';

export interface JwtPayload {
  sub: string;
  email: string;
  role: AdminRole;
}
