import { AdminRole } from '../../tenancy/enums/admin-role.enum';
import { JwtPayloadType } from '../enums/jwt-payload.enum';

export interface JwtPayload {
  sub: string;
  email: string;
  roles: AdminRole[];
  tenantId?: string;
  type: JwtPayloadType;
}
