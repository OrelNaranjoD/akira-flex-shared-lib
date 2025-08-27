import { UserRoles } from '../enums/user-roles.enum.js';

export const RolePermissions = {
  [UserRoles.SUPER_ADMIN]: ['*'],
  [UserRoles.ADMIN]: [
    'users:read',
    'users:write',
    'tenants:read',
    'settings:read',
    'settings:write',
  ],
  [UserRoles.MANAGER]: ['users:read', 'reports:read', 'reports:write'],
  [UserRoles.USER]: ['profile:read', 'profile:write'],
  [UserRoles.AUDITOR]: ['audit:read', 'reports:read'],
  [UserRoles.FINANCE]: ['finance:read', 'finance:write', 'reports:read'],
  [UserRoles.SALES]: ['sales:read', 'sales:write', 'customers:read', 'customers:write'],
  [UserRoles.INVENTORY]: ['inventory:read', 'inventory:write', 'products:read', 'products:write'],
};
