import { UserEntity } from './user.entity.js';

export interface TenantUserEntity extends UserEntity {
  roles: string[];
}
