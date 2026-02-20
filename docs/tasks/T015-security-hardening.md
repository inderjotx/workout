# T015 - Authorization Hardening, Validation, and Auditability

## Objective

Enforce strict data isolation, robust input validation, and auditable critical actions.

## Depends On

- T003 through T013

## User Story Coverage

- US-I1, US-I2 (plus security requirements from spec)

## Scope

- Server-side ownership checks on all private resources.
- Schema-level validation for all mutations.
- Audit metadata for publication/moderation and critical updates.

## Implementation Details

1. Review all actions/handlers for authz enforcement.
2. Add/standardize zod validators for request payloads.
3. Ensure forbidden resource access returns safe responses.
4. Add audit fields where needed:
   - created_by
   - updated_by
   - moderated_by
   - moderated_at
5. Add integration tests for unauthorized access cases.

## Deliverables

- Security hardening pass across app write/read paths.

## Definition of Done

- Cross-user data access is blocked in all tested scenarios.
- All mutation inputs are validated server-side.
- Moderation/publication events are auditable.

## Risks and Notes

- Keep error messages informative but non-sensitive.
- Verify template publication never leaks profile details.
