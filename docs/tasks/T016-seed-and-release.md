# T016 - Seed Data, Admin Defaults, and MVP Release Validation

## Objective

Prepare the app for real usage by seeding baseline data, default templates, and running final release checks.

## Depends On

- T005
- T008
- T011
- T012
- T013
- T014
- T015

## User Story Coverage

- Enables production readiness for stories across all epics.

## Scope

- Seed core exercise library and educational content.
- Seed admin default workout templates.
- Execute MVP acceptance and regression validation.

## Implementation Details

1. Create idempotent seed scripts:
   - exercise catalog by body part
   - starter educational content and media links
   - admin templates for beginner/intermediate splits
2. Add admin bootstrap guidance in docs.
3. Validate all acceptance criteria from `docs/user-stories.md`.
4. Run checklist:
   - auth flows
   - onboarding gate
   - workout creation and logging
   - calorie calculations
   - diet entries and dish reuse
   - analytics rollups
5. Track known issues with severity and defer only non-blockers.

## Deliverables

- Seed scripts and final MVP validation report.

## Definition of Done

- Seeded environment supports immediate app exploration.
- All P0/P1 blockers resolved or explicitly accepted.
- Tasks in `docs/tasks.md` can be marked complete with evidence.

## Risks and Notes

- Keep seed data realistic but lightweight.
- Re-run seeds safely without duplicate corruption.
