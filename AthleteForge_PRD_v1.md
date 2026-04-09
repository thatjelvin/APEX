# ATHLETEFORGE
## Athletic Performance Training App
### Product Requirements Document | v1.0 | April 2026

---

| Field | Detail |
|---|---|
| Product Name | AthleteForge |
| Version | 1.0 — Initial Release |
| Target Platforms | iOS (App Store) + Android (Play Store) |
| Primary Users | Basketball & Football/Soccer Athletes (Amateur to Semi-Pro) |
| Document Author | Jelvin — Founder |
| Last Updated | April 2026 |
| Status | Pre-Development — Ready for Build |

---

## 1. Executive Summary

AthleteForge is a mobile-first athletic performance training application purpose-built for basketball and football (soccer) athletes. Unlike generic fitness apps that focus on aesthetics — muscle size or body composition — AthleteForge is engineered around the six core performance pillars that separate good athletes from elite ones: explosive power, speed & acceleration, agility & change of direction, cardiovascular endurance, functional strength, and mobility & injury prevention.

The app delivers sport-specific, science-backed training programs, AI-powered adaptive progression, video exercise libraries, and personal performance tracking — all in a clean, athlete-focused mobile interface available on both iOS and Android.

AthleteForge solves a real gap: most fitness apps are built for gym-goers who want to look good. Athletes need to perform. This app is built for performance.

---

## 2. Problem Statement

Current fitness apps (Nike Training Club, Freeletics, Fitbod, etc.) are designed for general fitness or bodybuilding goals. They are not built for sport-specific athletic development. Athletes who use them are forced to adapt generic programs to their needs, often missing critical performance components.

### Core Problems

- No sport-specific athletic training apps exist at scale for amateur/semi-pro basketball and football players.
- Generic apps prioritize aesthetics (muscle hypertrophy) over athletic performance metrics like vertical jump, sprint speed, or agility.
- Athletes don't know which exercises directly translate to on-court/on-pitch improvements.
- No structured tracking of athletic performance KPIs (vertical jump height, 40-yard dash time, agility scores) in one place.
- Training programs lack adaptive progression — athletes plateau because programs don't evolve with them.

---

## 3. Target Users

### Primary Persona: The Serious Amateur Athlete
- Age: 15–28
- Sport: Basketball or Football/Soccer
- Training 3–5x per week, either alone or with a team
- Goal: Make varsity team, improve position, go semi-pro, or dominate their league
- Frustrated that gym programs don't translate to game improvements

### Secondary Persona: The Youth Athlete / Parent
- Age 13–17, or parents purchasing for their child
- Needs structured, safe, science-based training guidance
- Currently getting scattered advice from YouTube and social media

### Tertiary Persona: The Independent Coach
- Coaches small teams, private clients, or youth academies
- Wants a tool to assign programs and track athlete progress remotely

---

## 4. The 6 Athletic Performance Pillars

Every training program, exercise, and progression in AthleteForge is built around these six scientifically validated performance pillars for basketball and football athletes.

### Pillar 1: Explosive Power
Explosive power is the ability to generate maximum force in minimum time. It is the foundation of vertical jump height, dunking ability, heading the ball, and first-contact dominance. Training methods include plyometrics (box jumps, depth jumps, broad jumps), Olympic lifts (power cleans, hang cleans), and banded resistance drills.

### Pillar 2: Speed & Acceleration
Top speed matters less than the first 10–20 metres of acceleration in both basketball and football. The vast majority of sport sprints are under 20 metres. Training methods include sprint mechanics drills, resisted sprints with sleds, acceleration ladder work, and sport-specific breakaway drills.

### Pillar 3: Agility & Change of Direction
Agility is the ability to decelerate, change direction, and re-accelerate — all while maintaining body control. In basketball this means defensive slides, crossover cuts, and first-step explosiveness. In football it means dribbling at speed, pressing, and recovery runs. Training methods include cone drills (5-10-5 shuttle, L-drill, T-drill), lateral band walks, and reactive agility drills.

### Pillar 4: Cardiovascular Endurance
Athletes must maintain performance quality in the 4th quarter or 80th minute. VO2 max, lactate threshold, and sport-specific conditioning determine stamina. Training methods include interval running (HIIT, tempo runs), sport-specific shuttle runs (beep test), and aerobic base building.

### Pillar 5: Functional Strength
Athletic strength is not about absolute max lifts — it's about strength that transfers directly to sport movements. Squat depth, hip hinge mechanics, and single-leg stability all directly impact explosiveness and injury resilience. Training methods include squats, Romanian deadlifts, Bulgarian split squats, hip thrusts, and single-leg press variations.

### Pillar 6: Mobility & Injury Prevention
Tight hips, limited ankle dorsiflexion, and shoulder immobility directly restrict athletic output and cause injury. Functional Movement Screening (FMS) principles are embedded into the app's baseline assessment. Training methods include dynamic warm-up routines, hip flexor mobility, ankle mobility drills, thoracic spine rotation, and sport-specific cool-down protocols.

---

## 5. Core Feature Set

| Feature | Priority | Description |
|---|---|---|
| Sport Profile Selection | P0 | User selects Basketball or Football/Soccer at onboarding. All programs, exercises, and defaults adapt to chosen sport. |
| Athletic Baseline Assessment | P0 | First-time setup test: vertical jump (self-measured), 40m sprint time, agility self-rating, and flexibility check. Establishes starting benchmarks. |
| 6-Pillar Training Dashboard | P0 | Home screen showing user's current score/progress across all 6 performance pillars with visual radar/spider chart. |
| Structured Training Programs | P0 | Pre-built 8-week and 12-week programs per pillar and per sport. Programs include daily workouts with sets, reps, rest times, and coaching cues. |
| Video Exercise Library | P0 | Every exercise has a short demonstration video (15–30 sec), muscle activation diagram, coaching cues, and common mistake warnings. |
| AI-Adaptive Progression | P1 | After each workout, user logs performance (completed reps, RPE). AI adjusts next session's load — increases difficulty if athlete is progressing, deloads if fatigued. |
| Performance Tracking & Analytics | P0 | Log vertical jump height, sprint times, agility scores over time. Visual progress graphs per pillar per month. |
| Daily Workout Session View | P0 | Clean, distraction-free workout mode: exercise name, video, sets/reps/rest timer, notes field, and complete/skip controls. |
| Rest Timer | P0 | Built-in countdown rest timers between sets. Configurable per exercise type (strength vs. plyometric vs. cardio). |
| Custom Workout Builder | P1 | Users can build their own workout from the exercise library, save it, and add it to their schedule. |
| Weekly Schedule Planner | P1 | Drag-and-drop weekly training calendar. App suggests rest days based on intensity of prior sessions. |
| Warm-Up & Cool-Down Modules | P0 | Every workout includes a sport-specific 5-min dynamic warm-up and 5-min cool-down/mobility routine. |
| Notifications & Accountability | P1 | Smart push notifications: workout reminders, streak tracking, and milestone celebrations. |
| Coach Mode | P2 | Coaches can create athlete accounts, assign programs, and monitor progress remotely via a coach dashboard. |
| Offline Mode | P1 | Workouts downloadable for offline use. Critical for athletes training in gyms with poor connectivity. |
| Community & Leaderboards | P2 | In-app challenges, leaderboards by sport and position, and community workout sharing. |

> **Priority Key:** P0 = Required for v1.0 | P1 = Include if time allows | P2 = Phase 2 only, do not build now

---

## 6. Technical Architecture

### Frontend
- **Framework:** React Native (Expo SDK, latest stable) — single codebase for iOS and Android
- **State Management:** Zustand
- **Navigation:** React Navigation v6 (Stack + Bottom Tab navigators)
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **Video:** expo-av for exercise demonstration videos
- **Charts:** Victory Native for performance analytics and radar chart
- **Animations:** React Native Reanimated 3

### Backend
- **Database & Auth:** Supabase (PostgreSQL, Supabase Auth with email/password + Google OAuth)
- **File Storage:** Supabase Storage for video assets
- **API:** Node.js / Express deployed on Railway or Vercel
- **AI Engine:** OpenAI API (GPT-4o) for adaptive progression recommendations
- **Payments:** Stripe Checkout with expo-linking redirect
- **Push Notifications:** Expo Push Notifications + Firebase Cloud Messaging

### Infrastructure
- **CDN:** Cloudflare for global video delivery
- **CI/CD:** GitHub Actions → Expo EAS Build for App Store and Play Store
- **Analytics:** PostHog (product analytics)
- **Error Monitoring:** Sentry

---

## 7. App Screen Map

### Onboarding Flow
1. **SplashScreen** — App logo, tagline animation
2. **WelcomeScreen** — "Built for Athletes, Not Gym-Goers"
3. **SportSelectionScreen** — Basketball / Football (Soccer) toggle
4. **PositionSelectionScreen** — Dynamic based on sport
5. **BaselineAssessmentScreen** — Self-input vertical jump, sprint time, flexibility rating
6. **GoalSelectionScreen** — Multi-select pillar priorities
7. **AuthScreen** — Email/Google sign up via Supabase Auth

### Main App (Post-Onboarding)
8. **HomeScreen / Dashboard** — Performance radar chart, today's workout card, streak counter
9. **TrainingScreen** — My Program, Browse Programs, History tabs
10. **WorkoutSessionScreen** — Active workout with video, set tracker, rest timer, RPE logging
11. **ExerciseLibraryScreen** — Searchable/filterable by pillar, sport, equipment
12. **ExerciseDetailScreen** — Full exercise detail with video, coaching cues, common mistakes
13. **ProgressScreen** — Line graphs per pillar, personal records, total stats
14. **ProfileScreen** — Sport/position, subscription badge, settings, logout

---

## 8. Monetization Strategy

| Tier | Price | Features |
|---|---|---|
| Free | $0 | 1 program per pillar, basic exercise library, manual progress tracking |
| Pro | $4.99/month | All programs, full exercise library (50+ exercises), AI-adaptive progression, full analytics, offline mode, custom workout builder |
| Annual | $39.99/year | All Pro features at ~33% discount |
| Coach Plan | $19.99/month | All Pro features + coach dashboard for up to 10 athletes |

---

## 9. Success Metrics (KPIs)

### Launch Phase (0–3 months)
- 1,000+ app downloads across both stores
- 30% Day-7 retention rate
- 5% free-to-Pro conversion rate
- Average session length > 18 minutes

### Growth Phase (3–12 months)
- 10,000+ monthly active users
- 4.4+ average App Store and Play Store rating
- $5,000+ MRR from Pro subscriptions
- 70%+ of users completing at least one full 8-week program

---

## 10. Out of Scope (v1.0)

The following features are explicitly excluded from the initial release:

- Wearable device integration (Apple Watch, Fitbit, GPS trackers)
- AI video upload / form analysis
- In-app social feed or messaging
- Coach marketplace or coaching booking
- Nutrition tracking or meal planning
- Multi-sport support beyond Basketball and Football/Soccer

---

## 11. Development Phases

| Phase | Timeline | Deliverables |
|---|---|---|
| Phase 1: Foundation | Weeks 1–6 | Onboarding flow, sport selection, baseline assessment, home dashboard, Supabase auth |
| Phase 2: Core Training | Weeks 7–14 | Exercise library with videos, all 6-pillar programs, workout session screen, rest timer, warm-up/cool-down modules |
| Phase 3: Intelligence | Weeks 15–20 | AI-adaptive progression engine, performance analytics, push notifications, offline mode, Stripe subscriptions |
| Phase 4: Launch | Weeks 21–24 | QA & beta testing with real athletes, App Store + Play Store submission, ASO, launch marketing |

---

*AthleteForge PRD v1.0 — Confidential*
*Prepared by Jelvin | April 2026*
