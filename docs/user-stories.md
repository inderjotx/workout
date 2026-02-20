# User Stories - Fitness App (MVP)

## Story Format

- **As a** [role]
- **I want** [goal]
- **So that** [value]

Each story includes acceptance criteria.

---

## Epic A: Authentication and Onboarding

### US-A1: Google OAuth Sign-in

**As a** visitor  
**I want** to sign in with my Google account  
**So that** I can securely access my personal fitness data

**Acceptance Criteria**

- User can click "Continue with Google" and authenticate.
- Successful login creates or links an account.
- Returning users are signed into their existing account.
- Protected pages require authentication.

### US-A2: First-Time Profile Walkthrough

**As a** new user  
**I want** to provide height, weight, sex, and preferred unit  
**So that** the app can personalize tracking and calorie estimation

**Acceptance Criteria**

- First login triggers onboarding if profile is incomplete.
- Required fields: height, weight, sex, preferred unit (kg/lb).
- User cannot access full app until required fields are completed.
- User can edit these values later in profile settings.

---

## Epic B: Exercise Library and Knowledge Base

### US-B1: Browse Exercise Library

**As a** user  
**I want** to browse exercises by body part  
**So that** I can quickly find movements to add to my plans

**Acceptance Criteria**

- Body part filters include back, legs, biceps, triceps, chest, abs.
- Search and filter work on mobile and desktop.
- Exercise cards show at least name and primary muscle group.

### US-B2: Exercise Detail Page

**As a** user  
**I want** a dedicated page per exercise  
**So that** I can learn proper form and impact area

**Acceptance Criteria**

- Each exercise has a detail page route.
- Page shows affected muscle areas and guidance.
- Page supports rich text educational content.
- Page supports one or more YouTube links.

### US-B3: Admin Exercise Content Management

**As an** admin  
**I want** to create and update exercise knowledge content  
**So that** users receive accurate guidance

**Acceptance Criteria**

- Admin can create/edit exercise metadata and content.
- Rich text content is sanitized and safely rendered.
- Invalid/empty required fields are blocked with clear errors.

---

## Epic C: Workout Plan Builder

### US-C1: Create Workout Plan

**As a** user  
**I want** to create a named workout plan  
**So that** I can structure my training routine

**Acceptance Criteria**

- User can create, rename, and delete own plans.
- Plan supports many exercises.
- Plan stores ownership and creation timestamps.

### US-C2: Add Exercises from Dialog/Dropdown

**As a** user  
**I want** to select exercises from a searchable dialog/dropdown  
**So that** I can add exercises quickly by body part

**Acceptance Criteria**

- Selector can filter by body part category.
- Selector supports keyboard + touch interactions.
- Selected exercise is added only once unless duplicates are explicitly allowed.

### US-C3: Configure Sets and Resistance Unit

**As a** user  
**I want** to set target sets and resistance in kg/lb for each exercise  
**So that** my plan reflects intended training load

**Acceptance Criteria**

- For each plan exercise, user can set target sets.
- User can select unit (kg/lb) and starting resistance.
- Unit choice is preserved consistently in plan display and edit views.

---

## Epic D: Template Directory (Admin + Community)

### US-D1: Browse Template Directory

**As a** user  
**I want** to browse default and community-published templates  
**So that** I can start quickly from existing plans

**Acceptance Criteria**

- Directory displays template source (admin or user).
- User can view template details before using.
- Directory works responsively on mobile.

### US-D2: Publish User Template

**As a** user  
**I want** to publish one of my workout plans as a template  
**So that** other users can use it

**Acceptance Criteria**

- User can publish/unpublish own template.
- Published template excludes private profile data.
- Published template shows author display info and timestamps.

### US-D3: Copy and Customize Template

**As a** user  
**I want** to duplicate a template into my library and modify it  
**So that** I can tailor it to my goals

**Acceptance Criteria**

- Copy action creates a personal plan owned by user.
- User can add/remove exercises and edit targets after copy.
- Original template remains unchanged.

---

## Epic E: Workout Session Logging and History

### US-E1: Start Workout from Plan or Template

**As a** user  
**I want** to start a workout session from my plan or a template  
**So that** I can log real performance in context

**Acceptance Criteria**

- User can start session from any eligible plan.
- Session snapshot is created to preserve historical accuracy.
- User can add/remove exercises while session is active.

### US-E2: Log Set Performance

**As a** user  
**I want** to log reps, resistance, and intensity for each set  
**So that** I can track progression over time

**Acceptance Criteria**

- Each set captures reps, weight, unit, and intensity.
- Validation prevents invalid numeric values.
- Inputs are optimized for fast mobile entry.

### US-E3: Complete Session and Persist

**As a** user  
**I want** to finish a workout and save full details  
**So that** I can review my history later

**Acceptance Criteria**

- Completing session stores all exercises/sets and timestamps.
- Session is immutable except via explicit edit flow.
- Session stores calculated calories and calculation inputs.

### US-E4: View Workout History

**As a** user  
**I want** to view past workouts with exercise-level details  
**So that** I can evaluate consistency and improvements

**Acceptance Criteria**

- History shows date, exercises, reps, intensity, and weight.
- User can open a workout detail view from history list.
- History supports pagination or infinite loading.

---

## Epic F: Calories and Performance Analytics

### US-F1: Calculate Workout Calories

**As a** user  
**I want** calories burned to be estimated automatically  
**So that** I can track workout energy expenditure

**Acceptance Criteria**

- Calories are computed using MET formula and profile weight.
- Duration and intensity mapping are included in calculation.
- App shows estimate and stores source inputs.

### US-F2: Exercise Personal Records

**As a** user  
**I want** personal records per exercise  
**So that** I can track strength milestones (e.g., Deadlift 300 lb)

**Acceptance Criteria**

- PR is derived from completed session data.
- PR can be viewed by exercise in profile analytics.
- Unit display is consistent with user preference or converted safely.

### US-F3: Calorie Summary Metrics

**As a** user  
**I want** calorie summaries for today, week, month, and max session  
**So that** I can monitor training output trends

**Acceptance Criteria**

- Dashboard/profile shows today/week/month calories.
- Dashboard/profile shows max calories burned in a single workout.
- Time windows align to user timezone.

---

## Epic G: Diet Tracking

### US-G1: Add Meal Entries

**As a** user  
**I want** to log meals with dish name, calories, and time  
**So that** I can track dietary intake daily

**Acceptance Criteria**

- User can add meal entries for any date and time.
- Supports common labels (breakfast/lunch/dinner) and custom labels.
- Required fields validated before save.

### US-G2: Reuse Previously Entered Dishes

**As a** user  
**I want** previously entered dishes to be reusable  
**So that** I can log recurring meals quickly

**Acceptance Criteria**

- Dish names entered by user become selectable suggestions.
- User can select a saved dish and override calories if needed.
- Suggestions are scoped to the same user.

### US-G3: Daily Meal Timeline

**As a** user  
**I want** to view my meals by day with timestamps  
**So that** I can assess meal timing and consistency

**Acceptance Criteria**

- Daily view orders meals chronologically.
- User can edit or delete own entries.
- Mobile layout remains readable with many entries.

---

## Epic H: Mobile Responsiveness and UX Quality

### US-H1: Mobile-First Workflows

**As a** user  
**I want** all core flows to work smoothly on my phone  
**So that** I can log workouts and meals during my day

**Acceptance Criteria**

- Core flows are usable at common mobile widths.
- Buttons/inputs are touch-friendly and accessible.
- Dialogs/dropdowns do not overflow viewport.

### US-H2: Accessibility Baseline

**As a** user  
**I want** accessible forms and controls  
**So that** I can interact reliably regardless of input method

**Acceptance Criteria**

- Form controls have labels and validation messages.
- Keyboard navigation works for critical interactions.
- Focus states are visible and consistent.

---

## Epic I: Security and Data Governance

### US-I1: Authorize Data Access

**As a** user  
**I want** my private data protected  
**So that** only I can access my logs and profile

**Acceptance Criteria**

- Server-side auth checks guard every user-scoped read/write.
- Users cannot read or edit other users' private records.
- Unauthorized access attempts return safe error responses.

### US-I2: Template Safety and Moderation

**As an** admin  
**I want** moderation controls for published templates  
**So that** harmful or invalid content can be handled

**Acceptance Criteria**

- Admin can unlist or remove published templates.
- Publication metadata is auditable.
- Removed templates are no longer publicly browseable.

---

## Data and Domain Constraints

- A workout plan can have many exercises.
- A workout session can have many exercises, each with many sets.
- Units supported for resistance: kg and lb.
- Calories use MET formula with stored inputs.
- Personal records are derived from completed sessions only.

---

## MVP Definition of Done

- All stories in Epics A through G implemented and accepted.
- Responsive behavior validated for core journeys.
- Auth + authorization enforced on protected operations.
- Data model supports all required relationships.
- Analytics values match source workout/diet records.

## Out of Scope (MVP)

- Wearable sync integrations.
- Social comments/chat.
- AI workout generation.
- Macro/micronutrient recommendation engine.
