import { UserEntity } from './user.entity';

export interface TenantUserEntity extends UserEntity {
  roles: string[];
}
