import { UserEntity } from './../entities/user.entity.js';

export interface TenantUserEntity extends UserEntity {
  roles: string[];
}
