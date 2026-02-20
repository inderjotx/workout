# T004 - User Onboarding and Profile Capture

## Objective

Collect required user profile metrics at first login and ensure profile completion gates app usage.

## Depends On

- T003

## User Story Coverage

- US-A2

## Scope

- Build onboarding flow for height, weight, sex, preferred unit.
- Persist profile data.
- Enforce completion gate for main app routes.

## Implementation Details

1. Create onboarding route and form page.
2. Add schema validation (zod) for profile payload.
3. Add create/update server action/route for profile.
4. Add onboarding check in authenticated layout:
   - incomplete profile -> redirect to onboarding
5. Add profile settings page for future updates.

## Data Requirements

- `user_profiles` fields:
  - `user_id` (unique)
  - `height_cm` (or preferred normalized unit)
  - `weight_kg` (normalized)
  - `sex`
  - `preferred_weight_unit` (`kg`/`lb`)
  - `timezone`

## Deliverables

- First-time onboarding flow.
- Profile update/edit form.

## Definition of Done

- First-time user must complete onboarding before entering app.
- Valid data persists and is reusable by calories/analytics modules.
- Field-level and submit-level validation errors are user friendly.

## Risks and Notes

- Normalize stored units for reliable analytics.
- Keep UX short and mobile-friendly.
