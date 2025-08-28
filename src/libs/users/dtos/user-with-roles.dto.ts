import { UserEntity } from '../entities/user.entity';

export interface UserWithRolesDto extends UserEntity {
  roles: string[];
}
