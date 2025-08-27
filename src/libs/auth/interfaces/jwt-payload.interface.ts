import { AdminRole } from '../../tenancy/enums/admin-role.enum.js';
import { JwtPayloadType } from '../enums/jwt-payload.enum.js';

export interface JwtPayload {
  sub: string;
  email: string;
  roles: AdminRole[];
  tenantId?: string;
  type: JwtPayloadType;
}
