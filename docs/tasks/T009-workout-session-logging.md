# T009 - Workout Session Logging Engine

## Objective

Allow users to execute workouts and record actual set-by-set performance with historical integrity.

## Depends On

- T006
- T007

## User Story Coverage

- US-E1, US-E2, US-E3

## Scope

- Start workout session from plan/template.
- Snapshot session structure at start.
- Log sets (reps, weight, intensity, unit).
- Support in-session exercise add/remove.
- Complete session and persist immutable record.

## Implementation Details

1. Add session creation action:
   - source plan/template reference
   - session snapshot data for exercises
2. Build active workout UI optimized for quick entry.
3. Implement set logging mutations with validation.
4. Implement session completion action:
   - status transition
   - end timestamp
5. Lock completed sessions from accidental edits.

## Deliverables

- End-to-end active workout flow and session persistence.

## Definition of Done

- User can start, log, and complete workouts reliably.
- Logged set data persists accurately.
- Completed session snapshots remain historically stable.

## Risks and Notes

- Prioritize write reliability and low-latency UX.
- Handle partial progress and accidental navigation safely.
