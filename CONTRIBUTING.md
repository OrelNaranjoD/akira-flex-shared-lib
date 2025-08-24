# 🧭 Workflow and Release Guide

This guide explains how to collaborate on the repository in an organized way, without creating
branches per task, using semantic commits in English, and controlling releases from the `main`
branch.

## 🔧 Branch structure

- **develop**: shared working branch. All day-to-day work and task integration happens here.
- **main**: protected branch. Only updated by merge from `develop` and used to publish official
  releases.

## 🔁 Operational flow

### 1. Daily work on develop

- The whole team works directly on the `develop` branch.
- Each commit must follow the semantic commit convention in English and include the task identifier
  (e.g. `AFS-101`).
- Valid examples:
  - `feat(AFS-101): add user DTO`
  - `fix(AFS-102): validate email format`
  - `refactor(AFS-103): simplify response handler`
- Do not create branches per task. Tracking is done in the Kanban board and reflected in commits.

### 2. Publishing a new release

- When a stable release is ready:
  - Perform a manual merge from `develop` into `main` (via PR).
  - Run the `Publish` workflow (it can be triggered automatically on `push` to `main` or manually
    via `workflow_dispatch`).
  - Select the release type:
    - `patch`: for minor fixes or internal adjustments
    - `minor`: for new features that maintain compatibility
    - `major`: for breaking changes

### 3. Error handling and rollback

- If a published release has problems:
  - Fix the issue in `develop`.
  - Merge the fix from `develop` into `main`.
  - Re-run the `Publish` workflow with an appropriate release type (you can bump minor/major to
    force a new release if necessary).

- The `main` branch must be protected and require review before merging.
- Keep branches synchronized: after each release ensure `develop` includes the changes from `main`.
- Run `npm run changelog` before publishing to review accumulated changes.

---

```sh
# Switch to develop
git checkout develop

# Update develop with remote changes
git pull origin develop

# Stage changes and create a semantic commit
git add .
git commit -m "feat(AFS-101): add user DTO"

# Push changes to develop
git push origin develop

# Merge develop into main to publish (create PR and merge)
git checkout main
git pull origin main
git merge develop

# Push changes to main (this triggers the Publish workflow)
git push origin main

# Sync develop with main after release if necessary
git checkout develop
git pull origin main

# View commit history
git log --oneline --decorate --graph --all
```
