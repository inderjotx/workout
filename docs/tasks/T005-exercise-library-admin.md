# T005 - Exercise Library Schema and Admin Content Workflows

## Objective

Implement the exercise catalog and admin-managed educational content with dedicated exercise pages.

## Depends On

- T002
- T003

## User Story Coverage

- US-B1, US-B2, US-B3

## Scope

- Exercise data model and query APIs.
- Exercise listing with body-part filters.
- Exercise detail page with rich text + YouTube links.
- Admin create/edit flows for exercise metadata and content.

## Implementation Details

1. Finalize exercise schema:
   - exercise basics (name, slug, body part, muscle groups)
   - education content table (rich text + media links)
2. Build routes/pages:
   - exercise index/list page
   - exercise detail page by slug/id
3. Add admin-only forms for CRUD operations.
4. Add content sanitization for rich text rendering.
5. Add search/filter query support with indexes.

## Deliverables

- User-facing exercise library and detail pages.
- Admin content management workflow.

## Definition of Done

- Exercises can be filtered by body part and searched.
- Every exercise can show rich educational content and YouTube links.
- Non-admin users cannot access admin mutation endpoints.

## Risks and Notes

- Sanitize user/admin rich content to prevent XSS.
- Keep body-part taxonomy stable for plan builder dependencies.
