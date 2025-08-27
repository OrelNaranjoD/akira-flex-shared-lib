import { UserEntity } from '../entities/user.entity.js';

export interface UserWithRolesDto extends UserEntity {
  roles: string[];
}
