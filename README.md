# @akiraflex/shared-lib

Shared utilities, DTOs and types for Akira Flex projects (NestJS / Angular).

## Usage

Install from npm (when published):

```bash
npm install @akiraflex/shared-lib
```

Or install from repository during development:

```bash
npm install /path/to/akira-flex-shared-lib
```

Import examples:

```ts
// Named export
import { DEFAULT_PAGE_SIZE } from '@akiraflex/shared-lib/lib/constants';

// Root re-exports
import { DEFAULT_PAGE_SIZE } from '@akiraflex/shared-lib';
```

## Build

This package is written in TypeScript and builds to ESM with declarations.

```bash
npm run build
```

## Commit Convention

This project follows Conventional Commits to enable automated changelog generation and semantic
versioning via semantic-release.

### ✅ Format

Each commit message must follow this structure:

```bash
<type>(AFS-XXX): short description
```

- type: describes the nature of the change
- AFS-XXX: references the related AkiraFlex story or task
- short description: concise summary of the change

## 🚀 Supported Types

| Type | Description | Release impact | | feat | New feature | Minor version bump | | fix | Bug fix
| Patch version bump | | chore | Build, tooling, or config changes | Patch version bump | | docs |
Documentation updates | Patch version bump | | refactor | Code restructuring (no behavior change) |
Patch version bump | | test | Add or update tests | Patch version bump | | style | Formatting,
linting | Patch version bump | | perf | Performance improvements | Patch version bump |

To trigger a major version bump, include BREAKING CHANGE: in the commit body.

## Notes

- This package is distributed as ESM.
- License: Proprietary — Akira Software.

## Author

Orel Naranjo
