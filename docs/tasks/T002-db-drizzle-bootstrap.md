# T002 - Database and Drizzle Bootstrap

## Objective

Set up PostgreSQL connectivity, Drizzle schema organization, and migration workflow as the persistence base.

## Depends On

- T001

## User Story Coverage

- Supports all stories requiring persistence (A-I).

## Scope

- Install/configure Drizzle ORM and migration tooling.
- Add DB client, schema index, and migration scripts.
- Define initial base tables for auth/profile/workout/diet/template domains.

## Implementation Details

1. Add dependencies:
   - `drizzle-orm`
   - `drizzle-kit`
   - Postgres driver (`postgres` recommended)
2. Create DB setup:
   - `lib/db/client.ts`
   - `lib/db/schema/*.ts` split by domain
   - `lib/db/schema/index.ts`
3. Configure `drizzle.config.ts`:
   - schema glob
   - migrations output dir
   - DB URL env variable
4. Add package scripts:
   - `db:generate`
   - `db:migrate`
   - `db:studio` (optional)
5. Create initial migration and run locally.

## Data Model Minimum (Initial)

- `users` (if not fully managed by auth adapter)
- `user_profiles`
- `exercises`, `exercise_contents`
- `workout_plans`, `workout_plan_exercises`
- `template_publications`
- `workout_sessions`, `workout_session_exercises`, `workout_sets`
- `meal_entries`, `dish_catalog`

## Deliverables

- Working Drizzle config + generated migration files.
- Database client utility used by server actions/handlers.

## Definition of Done

- Migration runs successfully on local PostgreSQL.
- Tables are queryable from app runtime.
- Schema is split into maintainable domain modules.

## Risks and Notes

- Keep schema additive and forward-compatible.
- Enforce FK constraints and index frequently queried fields.
