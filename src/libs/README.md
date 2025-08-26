# Akira Flex Shared Library (AFS)

This library provides shared contracts, types, DTOs, and enums for multi-tenancy, authentication,
and user management in the Akira Flex platform.

## Folder Structure

- `tenancy/`
  - **interfaces/**: Base contracts for tenancies, modules, and platform users (e.g.,
    `admin-user.interface.ts`, `tenant.interface.ts`).
  - **dtos/**: Data Transfer Objects for tenant and module operations (e.g.,
    `create-tenant.dto.ts`).
  - **enums/**: Enumerations for roles, billing cycles, permissions, etc. (`admin-role.enum.ts`,
    `billing-cycle.enum.ts`, `permission-type.enum.ts`).
  - **types/**: Auxiliary types for multi-tenant context and token options
    (`tenant-context.type.ts`, `token-options.type.ts`).
  - **index.ts**: Exports all tenancy domain contracts.

- `auth/`
  - **interfaces/**: Contracts for payloads and authentication (`jwt-payload.interface.ts`).
  - **dtos/**: DTOs for login and authentication responses (`login-request.dto.ts`,
    `login-response.dto.ts`).
  - **index.ts**: Exports all auth domain contracts.

- `users/`
  - **interfaces/**: Base contracts for users and audit (`user.interface.ts`,
    `user-audit-entry.interface.ts`).
  - **dtos/**: Enriched DTOs for views (`user-with-roles.dto.ts`).
  - **enums/**: User status enumerations (`user-status.enum.ts`).
  - **index.ts**: Exports all users domain contracts.

- `index.ts`: Exports all global contracts from the library.

## Folder Diagram

```text
libs/
  tenancy/
    interfaces/
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
    dtos/
    enums/
    index.ts
  index.ts
```

## Usage

Import contracts directly from `@orelnaranjod/flex-shared-lib` in API, UI, or other services:

```typescript
import { User, UserWithRolesDto, AdminRole, PermissionType } from '@orelnaranjod/flex-shared-lib';
```
