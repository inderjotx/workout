# T012 - Diet Logging and Reusable Dish Catalog

## Objective

Enable daily meal tracking with timestamps and a user-scoped reusable dish list.

## Depends On

- T002
- T003
- T004

## User Story Coverage

- US-G1, US-G2, US-G3

## Scope

- Add meal entries by date/time and meal label.
- Support custom meal labels beyond breakfast/lunch/dinner.
- Add reusable dish suggestions from user history.

## Implementation Details

1. Finalize schema:
   - `meal_entries`
   - `dish_catalog` (user-scoped)
2. Build add/edit/delete meal flows.
3. Implement dish suggestion lookup from `dish_catalog`.
4. On new dish entry, optionally upsert into catalog.
5. Build daily timeline view sorted chronologically.

## Deliverables

- Meal logging pages and reusable dish picker.

## Definition of Done

- Users can log meals with time and calories for any date.
- Previously used dishes are suggested for quick entry.
- Meal timeline is editable and mobile-usable.

## Risks and Notes

- Ensure user scoping on dish catalog queries.
- Validate calories as non-negative numeric values.
