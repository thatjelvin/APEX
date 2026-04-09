# AthleteForge

**Built for Athletes. Not Gym-Goers.**

AthleteForge is a mobile athletic performance training app designed specifically for basketball and football (soccer) athletes. Unlike generic fitness apps, AthleteForge focuses on the six core performance pillars that separate good athletes from elite ones.

## Features

### The 6 Performance Pillars
1. **Explosive Power** - Vertical jump, plyometrics, Olympic lifts
2. **Speed & Acceleration** - Sprint mechanics, resisted sprints
3. **Agility & Change of Direction** - Cone drills, reactive agility
4. **Cardiovascular Endurance** - HIIT, tempo runs, sport-specific conditioning
5. **Functional Strength** - Squats, deadlifts, single-leg work
6. **Mobility & Injury Prevention** - Dynamic warm-ups, stretching

### Key Features
- 🏀 **Sport-Specific Training** - Programs tailored for basketball and football
- 📊 **Performance Tracking** - Monitor progress across all 6 pillars
- 🎥 **Video Exercise Library** - 48+ exercises with coaching cues
- 🤖 **AI Adaptive Progression** - Smart load adjustment based on performance
- 📈 **Visual Analytics** - Radar charts and progress graphs
- 🔥 **Streak Tracking** - Stay motivated with workout streaks
- 💪 **Structured Programs** - 6-12 week progressive training plans

## Tech Stack

### Frontend
- React Native with Expo SDK
- NativeWind (Tailwind CSS for React Native)
- React Navigation v6
- Zustand for state management
- expo-av for video playback
- React Native Reanimated 3
- Victory Native for charts

### Backend
- Supabase (PostgreSQL, Auth, Storage)
- OpenAI GPT-4o for AI progression
- Stripe for subscriptions
- Expo Push Notifications

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/athleteforge.git
cd athleteforge
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your Supabase and OpenAI credentials:
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_OPENAI_API_KEY=your_openai_key
```

4. Set up Supabase:
   - Create a new Supabase project
   - Run the SQL schema in `supabase/schema.sql`
   - Enable Email and Google OAuth providers

5. Start the development server:
```bash
npx expo start
```

## Database Schema

The app uses the following Supabase tables:

- `users` - User profiles and subscription info
- `athlete_profiles` - Performance baselines and goals
- `exercises` - Exercise library (48 exercises)
- `programs` - Training programs (6 programs)
- `program_workouts` - Individual workouts within programs
- `workout_logs` - User workout history
- `performance_records` - Performance tracking data
- `ai_recommendations` - AI progression recommendations

## Project Structure

```
athleteforge/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens
│   │   ├── onboarding/   # Onboarding flow
│   │   ├── home/         # Home dashboard
│   │   ├── training/     # Training programs
│   │   ├── exercises/    # Exercise library
│   │   ├── workout/      # Active workout
│   │   ├── progress/     # Progress tracking
│   │   └── profile/      # User profile
│   ├── navigation/       # Navigation setup
│   ├── store/            # Zustand state stores
│   ├── types/            # TypeScript types
│   ├── utils/            # Utility functions
│   ├── constants/        # App constants
│   └── assets/           # Images and videos
├── supabase/
│   └── schema.sql        # Database schema
├── App.tsx               # App entry point
├── app.json              # Expo configuration
├── eas.json              # EAS Build configuration
└── package.json
```

## Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

### Configure EAS
1. Install EAS CLI: `npm install -g eas-cli`
2. Login: `eas login`
3. Configure project: `eas build:configure`

## Subscription Tiers

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 1 program per pillar, 5 exercises per pillar, manual tracking |
| Pro | $4.99/mo | All programs, full exercise library, AI progression, analytics |
| Annual | $39.99/yr | All Pro features at 33% discount |
| Coach | $19.99/mo | Coach dashboard for up to 10 athletes |

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@athleteforge.app or join our Discord community.

---

**Built with passion for athletes everywhere.** ⚡
