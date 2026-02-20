# Fitness App Implementation Tasks

This backlog is derived from `docs/fitness-app-spec.md` and `docs/user-stories.md`.

## How to Use

- Tasks are ordered by dependency and business priority.
- Complete tasks top-down unless a task explicitly has no dependency.
- Mark completion by changing `[ ]` to `[x]` in the Status column.
- Each task has a dedicated implementation doc under `docs/tasks/`.
- Use components from shadcn in `@/components/ui/*` wherever available.
- If a shadcn component is missing, install it with `pnpm dlx shadcn@latest add <component-name>`.
- After completing each task, add a short summary entry in the **Task Completion Summaries** section at the bottom of this file.

## Task Board

| Status | ID   | Task                                                  | Depends On                               | Priority | Details                                                                             |
| ------ | ---- | ----------------------------------------------------- | ---------------------------------------- | -------- | ----------------------------------------------------------------------------------- |
| [x]    | T001 | Project foundation and architecture setup             | -                                        | P0       | [docs/tasks/T001-project-foundation.md](tasks/T001-project-foundation.md)           |
| [ ]    | T002 | Database and Drizzle bootstrap                        | T001                                     | P0       | [docs/tasks/T002-db-drizzle-bootstrap.md](tasks/T002-db-drizzle-bootstrap.md)       |
| [ ]    | T003 | Better Auth + Google OAuth integration                | T001, T002                               | P0       | [docs/tasks/T003-auth-google-oauth.md](tasks/T003-auth-google-oauth.md)             |
| [ ]    | T004 | User onboarding and profile capture                   | T003                                     | P0       | [docs/tasks/T004-onboarding-profile.md](tasks/T004-onboarding-profile.md)           |
| [ ]    | T005 | Exercise library schema and admin content workflows   | T002, T003                               | P0       | [docs/tasks/T005-exercise-library-admin.md](tasks/T005-exercise-library-admin.md)   |
| [ ]    | T006 | Workout plan CRUD core                                | T002, T003, T005                         | P0       | [docs/tasks/T006-workout-plan-crud.md](tasks/T006-workout-plan-crud.md)             |
| [ ]    | T007 | Exercise selector dialog/dropdown for plans           | T005, T006                               | P1       | [docs/tasks/T007-plan-exercise-selector.md](tasks/T007-plan-exercise-selector.md)   |
| [ ]    | T008 | Template directory + publish/unpublish flows          | T006                                     | P1       | [docs/tasks/T008-template-directory.md](tasks/T008-template-directory.md)           |
| [ ]    | T009 | Workout session logging engine                        | T006, T007                               | P0       | [docs/tasks/T009-workout-session-logging.md](tasks/T009-workout-session-logging.md) |
| [ ]    | T010 | MET calorie estimation module and persistence         | T004, T009                               | P1       | [docs/tasks/T010-met-calorie-engine.md](tasks/T010-met-calorie-engine.md)           |
| [ ]    | T011 | Workout history and session detail views              | T009, T010                               | P1       | [docs/tasks/T011-workout-history.md](tasks/T011-workout-history.md)                 |
| [ ]    | T012 | Diet logging and reusable dish catalog                | T002, T003, T004                         | P1       | [docs/tasks/T012-diet-dish-catalog.md](tasks/T012-diet-dish-catalog.md)             |
| [ ]    | T013 | Profile analytics (PRs + calorie rollups)             | T009, T010, T011, T012                   | P1       | [docs/tasks/T013-profile-analytics.md](tasks/T013-profile-analytics.md)             |
| [ ]    | T014 | Mobile responsiveness and accessibility pass          | T004-T013                                | P1       | [docs/tasks/T014-mobile-a11y-pass.md](tasks/T014-mobile-a11y-pass.md)               |
| [ ]    | T015 | Authorization hardening, validation, and auditability | T003-T013                                | P0       | [docs/tasks/T015-security-hardening.md](tasks/T015-security-hardening.md)           |
| [ ]    | T016 | Seed data, admin defaults, and MVP release validation | T005, T008, T011, T012, T013, T014, T015 | P0       | [docs/tasks/T016-seed-and-release.md](tasks/T016-seed-and-release.md)               |

## Milestones

- **Milestone 1 (Core platform):** T001-T004
- **Milestone 2 (Workout system):** T005-T011
- **Milestone 3 (Nutrition + analytics):** T012-T013
- **Milestone 4 (Production readiness):** T014-T016

## Completion Rule

A task can be marked done only when:

1. Its Definition of Done in the task file is satisfied.
2. Dependencies are already marked done in this board.
3. Related acceptance criteria in `docs/user-stories.md` are covered.

## Task Completion Summaries

### T001 - Project foundation and architecture setup

- Added route groups: `app/(public)` and `app/(app)` with core area placeholders (`auth/sign-in`, `onboarding`, `workouts`, `templates`, `diet`, `profile`).
- Added loading and error boundaries for both route groups.
- Added shared foundation modules: `lib/errors/app-error.ts`, `lib/constants/routes.ts`, `lib/constants/workout.ts`, `lib/validation/index.ts`, `lib/env.ts`, and `types/domain.ts`.
- Added placeholders for upcoming tasks: `lib/auth`, `lib/db`, `lib/calories`.
- Added `.env.example` with auth and database placeholders and updated `README.md` with architecture/environment notes.
