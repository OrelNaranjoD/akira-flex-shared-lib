# Akira Flex Shared Library (AFS)

This library provides shared contracts, types, DTOs, and enums for multi-tenancy, authentication,
and user management in the Akira Flex platform.

## Folder Structure

- `tenancy/`
  - **interfaces/**: Base contracts for tenancies, modules, and platform users (e.g.,
    `admin-user.interface.ts`, `tenant.interface.ts`).
  - **entities/**: Entity interfaces for persistence (e.g., `tenant.entity.ts`,
    `admin-user.entity.ts`, `tenant-module.entity.ts`, `module-feature.entity.ts`).
  - **dtos/**: Data Transfer Objects for tenant and module operations (e.g., `create-tenant.dto.ts`,
    `tenant-response.dto.ts`).
  - **enums/**: Enumerations for roles, billing cycles, permissions, etc. (`admin-role.enum.ts`,
    `billing-cycle.enum.ts`, `permission-type.enum.ts`).
  - **types/**: Auxiliary types for multi-tenant context and token options
    (`tenant-context.type.ts`, `token-options.type.ts`).
  - **index.ts**: Barrel file exporting all tenancy domain contracts and entities.

- `auth/`
  - **interfaces/**: Contracts for payloads and authentication (`jwt-payload.interface.ts`).
  - **dtos/**: DTOs for login and authentication responses (`login-request.dto.ts`,
    `login-response.dto.ts`, `register.dto.ts`, `token-response.dto.ts`).
  - **index.ts**: Barrel file exporting all auth domain contracts.

- `users/`
  - **interfaces/**: Base contracts for users and audit (`user.interface.ts`,
    `platform-user.interface.ts`, `tenant-user.interface.ts`, `user-audit-entry.interface.ts`).
  - **entities/**: Entity interfaces for persistence (e.g., `user.entity.ts`,
    `platform-user.entity.ts`, `tenant-user.entity.ts`).
  - **dtos/**: Enriched DTOs for views (`user-with-roles.dto.ts`).
  - **enums/**: User status and roles enumerations (`user-status.enum.ts`, `user-roles.enum.ts`).
  - **constants/**: Role permissions (`role-permissions.const.ts`).
  - **index.ts**: Barrel file exporting all users domain contracts and entities.

- `index.ts`: Barrel file exporting all global contracts from the library.

## Folder Diagram

```text
libs/
  tenancy/
    interfaces/
    entities/
    dtos/
    enums/
    types/
    index.ts
  auth/
    interfaces/
    dtos/
    index.ts
  users/
    interfaces/
    entities/
    dtos/
    enums/
    constants/
    index.ts
  index.ts
```

## Usage

Import contracts directly from `@orelnaranjod/flex-shared-lib` in API, UI, or other services:

```typescript
import { User, UserWithRolesDto, AdminRole, PermissionType } from '@orelnaranjod/flex-shared-lib';
```
