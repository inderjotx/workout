# T013 - Profile Analytics (PRs + Calorie Rollups)

## Objective

Deliver profile metrics for personal records and calories across today/week/month and max session.

## Depends On

- T009
- T010
- T011
- T012

## User Story Coverage

- US-F2, US-F3

## Scope

- Compute and display personal records by exercise.
- Aggregate calorie totals by period.
- Display max calories burned in a single workout.

## Implementation Details

1. Define PR metric strategy (MVP):
   - highest logged weight per exercise (optionally with reps metadata)
2. Build aggregation queries for calories:
   - today
   - current week
   - current month
   - all-time max workout calories
3. Respect user timezone in period boundaries.
4. Build profile analytics page cards/sections.
5. Add unit normalization/display conversion helpers.

## Deliverables

- Profile analytics page with PR and calorie summaries.

## Definition of Done

- PR values reflect completed sessions only.
- Time-window calorie metrics are accurate by timezone.
- Metrics update after new workout completion.

## Risks and Notes

- Cache expensive rollups if query cost grows.
- Keep metric definitions explicit to avoid confusion.
