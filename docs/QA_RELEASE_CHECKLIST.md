# QA and Release Checklist

## Core User Flow QA
- Onboarding flow: Splash -> Welcome -> Sport -> Position -> Baseline -> Goals -> Auth.
- Validate athlete profile row is created/updated in `users` and `athlete_profiles`.
- Start workout from Home and complete full WorkoutSession flow.
- Confirm workout history appears in Training History.
- Validate Progress chart and PR section render with user data.

## Subscription QA
- Free user sees Pro lock behavior for restricted features.
- Stripe checkout returns to app via deep-link.
- Subscription verification endpoint returns active status.

## Integration QA
- AI progression endpoint returns valid JSON shape for workout logs.
- Push notification permission and token registration success.
- Offline workout save/load works with network disabled.
- Sentry and PostHog keys initialize without runtime crash.

## EAS Release Prep
- iOS bundle identifier: `com.athleteforge.app`
- Android package: `com.athleteforge.android`
- Build commands:
  - `eas build --platform ios --profile production`
  - `eas build --platform android --profile production`
- Submit commands:
  - `eas submit --platform ios --profile production`
  - `eas submit --platform android --profile production`
