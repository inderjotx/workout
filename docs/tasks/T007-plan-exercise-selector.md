# T007 - Exercise Selector Dialog/Dropdown for Plans

## Objective

Implement searchable exercise selection UX by body part with mobile-friendly interaction.

## Depends On

- T005
- T006

## User Story Coverage

- US-C2, US-C3, US-H1

## Scope

- Searchable dialog/dropdown component to attach exercises to plans.
- Filter by body part categories.
- Duplicate prevention and per-exercise target setup.

## Implementation Details

1. Build selector component using existing UI primitives.
2. Add query endpoint/action for searchable exercise list.
3. Support filters for: back, legs, biceps, triceps, chest, abs.
4. Add add/remove action wiring to plan exercise relation table.
5. Add fields for target sets, resistance unit, starting resistance.
6. Add keyboard and touch interactions.

## Deliverables

- Fully functional plan exercise selector UI.

## Definition of Done

- User can add exercises from searchable selector.
- Body-part filters work correctly.
- Selected exercise config persists and reloads correctly.

## Risks and Notes

- Keep mobile viewport behavior stable for dialogs.
- Confirm duplicate behavior explicitly (prevent by default).
