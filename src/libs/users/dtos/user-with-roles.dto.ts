import { User } from '../interfaces/user.interface.js';

export interface UserWithRolesDto extends User {
  roles: string[];
}
