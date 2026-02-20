# T010 - MET Calorie Estimation Module and Persistence

## Objective

Compute and store workout calories burned using MET-based formula and session/profile inputs.

## Depends On

- T004
- T009

## User Story Coverage

- US-F1

## Scope

- Add calorie calculation utility module.
- Map intensity values to MET ranges.
- Persist computed calories and calculation inputs at session completion.

## Implementation Details

1. Implement utility in `lib/calories/met.ts`:
   - formula: `MET × 3.5 × bodyWeightKg / 200 × durationMinutes`
2. Define intensity-to-MET mapping strategy and constants.
3. Trigger calculation on session completion.
4. Persist:
   - `calories_burned`
   - `duration_minutes`
   - `met_value`
   - `weight_used_kg`
5. Add unit tests for formula and edge cases.

## Deliverables

- Deterministic calorie computation integrated with workout completion.

## Definition of Done

- Sessions store calories + auditable inputs.
- Calculations are reproducible from stored values.
- Missing profile data is handled with safe fallback/validation.

## Risks and Notes

- Avoid silent failures if profile fields are incomplete.
- Keep calculation constants centralized for future tuning.
