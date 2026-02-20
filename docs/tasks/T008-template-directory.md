# T008 - Template Directory + Publish/Unpublish Flows

## Objective

Enable admin and users to publish workout templates and allow users to duplicate/customize templates.

## Depends On

- T006

## User Story Coverage

- US-D1, US-D2, US-D3, US-I2

## Scope

- Shared directory listing for templates.
- Publish/unpublish actions.
- Duplicate template into user-owned plan.

## Implementation Details

1. Implement template publication model and states.
2. Add directory page with source labels:
   - admin default
   - community
3. Add publish flow for user-owned plans.
4. Add moderation actions for admin (unlist/remove).
5. Add copy flow that clones into `workout_plans` + related exercises.

## Deliverables

- Directory browse page, publish controls, copy-to-my-plans action.

## Definition of Done

- Users can browse templates and copy to personal plans.
- Users can publish/unpublish own templates.
- Admin moderation controls are functional.

## Risks and Notes

- Strip any private user profile data from publication payloads.
- Add anti-abuse constraints for excessive publishing if needed.
