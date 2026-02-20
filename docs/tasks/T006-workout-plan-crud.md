# T006 - Workout Plan CRUD Core

## Objective

Create core workout plan management so users can build and maintain personalized routines.

## Depends On

- T002
- T003
- T005

## User Story Coverage

- US-C1, partial US-C3

## Scope

- Create/read/update/delete workout plans.
- Add/remove plan exercises.
- Persist target sets and baseline resistance/unit fields.

## Implementation Details

1. Finalize plan schema:
   - `workout_plans`
   - `workout_plan_exercises`
2. Implement user-owned CRUD endpoints/actions.
3. Build UI for:
   - plan list
   - create plan
   - edit plan metadata
   - delete with confirmation
4. Ensure ownership checks on all mutations.
5. Add optimistic updates where safe.

## Deliverables

- Complete workout plan CRUD for authenticated users.

## Definition of Done

- User can create, rename, delete plans.
- Plan contains multiple exercises and target config fields.
- Unauthorized modification attempts are blocked.

## Risks and Notes

- Keep plan structure stable to support template and session snapshoting.
