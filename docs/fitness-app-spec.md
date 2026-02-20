# Fitness App Product Spec

## 1) Product Overview

A mobile-first fitness web app for personal workout and diet tracking.

Users can:

- Sign in with Google OAuth.
- Complete onboarding with profile metrics.
- Build and run workout plans by body part.
- Log workout performance and review history.
- Track diet and reusable dish entries.
- See profile analytics including personal records and calorie summaries.
- Browse template workout plans (admin and community-published).

## 2) Product Goals (MVP)

- Deliver a fully responsive experience optimized for phone usage.
- Make workout planning and workout logging fast with minimal friction.
- Keep historical workout and diet records accurate and queryable.
- Provide useful progress metrics (PRs and calories).
- Support content-rich exercise knowledge pages.

## 3) Non-Goals (for initial MVP)

- Wearable device integrations.
- AI-generated workout or nutrition coaching.
- Advanced macro/micronutrient automation.

## 4) Roles and Permissions

### Authenticated User

- Manage own profile, workouts, diet, and private templates.
- Publish a template to the shared directory.
- Use admin templates and community templates as a base.

### Admin

- Create and manage default templates.
- Moderate published templates and exercise content.
- Seed baseline exercise library and educational content.

## 5) Core Feature Scope

### 5.1 Authentication and Onboarding

- Google OAuth sign-in (Gmail account).
- First-time onboarding captures:
  - Height
  - Weight
  - Sex
  - Preferred weight unit (kg/lb)

### 5.2 Workout Plan Builder

- User can create workout plans.
- Plan structure supports many exercises per workout.
- Body-part categories include at minimum:
  - Back
  - Legs
  - Biceps
  - Triceps
  - Chest
  - Abs
- Exercise selector UI uses searchable dialog/dropdown.
- For each selected exercise, user sets:
  - Target sets
  - Resistance unit (kg/lb)
  - Starting resistance value

### 5.3 Workout Execution and Logging

- User starts a planned workout (template or own plan).
- User logs actual performance per set:
  - Reps
  - Resistance (weight)
  - Intensity (e.g., RPE or app-defined level)
- User may modify exercises during session:
  - Add exercise
  - Remove exercise
  - Reorder if needed
- All completed workouts are saved in history.

### 5.4 Exercise Knowledge Pages

- Dedicated detail page per exercise.
- Fields include:
  - Name
  - Primary/secondary muscle groups
  - Instructions and safety notes
  - Rich text educational content
  - YouTube links
- Content is managed by admin (MVP), extensible later.

### 5.5 Template Directory

- Shared template directory includes:
  - Admin default templates
  - User-published templates
- Any authenticated user can:
  - Browse templates
  - Duplicate template into personal library
  - Customize by adding/removing exercises and targets

### 5.6 Diet Tracking

- User logs meals by day and time.
- Built-in meal labels include breakfast/lunch/dinner plus custom meal names.
- Each meal entry includes dish name and calories.
- Dishes become reusable personal items for future selections.

### 5.7 Profile Analytics

- Personal records per exercise (e.g., Deadlift 300 lb).
- Calories burned:
  - Today
  - This week
  - This month
  - Max calories burned in a workout

## 6) Technical Stack and Architecture

- Frontend: Next.js (App Router) + TypeScript + Tailwind + existing UI component system.
- Auth: Better Auth with Google OAuth.
- Database: PostgreSQL.
- ORM: Drizzle ORM + migrations.
- API Style: Next.js route handlers and/or server actions for authenticated operations.

## 7) Data Model Overview

Core entities:

- User
- UserProfile
- Exercise
- ExerciseContent
- WorkoutPlan
- WorkoutPlanExercise
- WorkoutSession
- WorkoutSessionExercise
- WorkoutSet
- TemplatePublication
- MealEntry
- DishCatalog (user-scoped reusable dishes)

Key relationships:

- A user has one profile.
- A workout plan has many plan exercises.
- A workout session belongs to a user and optionally references a source plan/template.
- A workout session exercise has many workout sets.
- An exercise has one or more educational content records.
- A user has many meal entries and reusable dish records.

## 8) Calorie Estimation (MVP)

Use MET-based estimate derived from:

- User body weight
- Session duration
- Activity intensity mapping

Formula:

- Calories = MET × 3.5 × bodyWeightKg / 200 × durationMinutes

Notes:

- Intensity input maps to MET ranges.
- Store both computed calories and calculation inputs for auditability.

## 9) UX and Responsiveness Requirements

- Mobile-first layouts for all key flows.
- Tap-friendly controls for set logging and meal entry.
- Dialog/dropdown selectors optimized for small screens.
- Fast form interactions with optimistic UX where safe.
- Accessibility baseline:
  - Keyboard support
  - Focus visibility
  - Semantic labels and validation messaging

## 10) Security and Privacy

- OAuth session security and protected routes.
- User data isolation: users can access only their own private records.
- Published templates expose template metadata only, not private health profile fields.
- Input validation and server-side authorization checks for all writes.

## 11) MVP Release Checklist

- Google sign-in + onboarding complete.
- Workout plan creation by body part complete.
- Workout session logging and history complete.
- Exercise detail pages with educational content complete.
- Diet logging with reusable dishes complete.
- Profile analytics (PR + calorie stats) complete.
- Template directory with admin + user publications complete.
- Mobile responsiveness validated across core flows.
