# T001 - Project Foundation and Architecture Setup

## Objective

Establish the base project architecture, folder conventions, and shared engineering patterns needed for all feature work.

## Depends On

- None

## User Story Coverage

- Foundation for all epics (A-I).

## Scope

- Define route structure for app areas (auth, onboarding, workouts, templates, diet, profile).
- Define server/client component boundaries.
- Add shared domain types, constants, and validation utility structure.
- Add environment variable contract and startup checks.

## Implementation Details

1. Create app route groups:
   - `(public)` for landing/auth entry
   - `(app)` for authenticated areas
2. Add shared folders:
   - `lib/auth`, `lib/db`, `lib/validation`, `lib/calories`, `lib/constants`
   - `types/` for app-level interfaces where needed
3. Add config files (if missing):
   - `.env.example` with required keys
   - `drizzle.config.ts` placeholder (completed in T002)
4. Standardize error handling pattern:
   - typed server errors
   - user-safe error messages
5. Add loading/error UI conventions for key route groups.

## Deliverables

- Baseline folder architecture committed.
- `.env.example` with auth/db placeholders.
- Architecture note in README (short section only).

## Definition of Done

- Core route groups and shared library folders exist.
- Environment contract is documented.
- No lint/type errors introduced by structure changes.

## Risks and Notes

- Avoid overengineering; keep scaffolding minimal and practical.
- Do not implement feature-specific logic here.
