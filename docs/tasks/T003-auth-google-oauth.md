# T003 - Better Auth + Google OAuth Integration

## Objective

Implement secure authentication with Google sign-in and session handling for protected app access.

## Depends On

- T001
- T002

## User Story Coverage

- US-A1, US-I1

## Scope

- Configure Better Auth provider and adapter.
- Add sign-in, callback, sign-out flows.
- Protect authenticated routes.

## Implementation Details

1. Add Better Auth package(s) and adapter integration for Postgres/Drizzle.
2. Configure Google provider credentials:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
3. Add auth server setup:
   - session strategy
   - cookie security options
4. Add auth route handlers required by Better Auth.
5. Build sign-in UI action with "Continue with Google".
6. Add middleware/guard pattern for app routes.

## Deliverables

- End-to-end Google OAuth login/logout flow.
- Protected route behavior for authenticated sections.

## Definition of Done

- New user can sign in via Google and get a valid session.
- Returning user session restoration works.
- Unauthenticated user is redirected away from protected routes.

## Risks and Notes

- Verify callback URL configuration across local/prod.
- Ensure secure cookie settings for production deployment.
