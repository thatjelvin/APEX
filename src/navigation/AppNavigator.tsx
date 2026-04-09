import React, { useMemo, useState } from "react";
import { Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlaceholderScreen } from "@/screens/common/PlaceholderScreen";
import { useOnboardingStore } from "@/store/onboardingStore";
import { SplashScreen } from "@/screens/onboarding/SplashScreen";
import { WelcomeScreen } from "@/screens/onboarding/WelcomeScreen";
import { SportSelectionScreen } from "@/screens/onboarding/SportSelectionScreen";
import { PositionSelectionScreen } from "@/screens/onboarding/PositionSelectionScreen";
import { BaselineAssessmentScreen } from "@/screens/onboarding/BaselineAssessmentScreen";
import { GoalSelectionScreen } from "@/screens/onboarding/GoalSelectionScreen";
import { AuthScreen } from "@/screens/onboarding/AuthScreen";
import { basketballPositions, footballPositions, pillars } from "@/constants/onboarding";
import { persistOnboardingData } from "@/services/profile";
import { useAuthStore } from "@/store/authStore";

type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  WorkoutSession: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1C1C2E", borderTopColor: "#2A2A3E" },
        tabBarActiveTintColor: "#E63946",
        tabBarInactiveTintColor: "#888888"
      }}
    >
      <Tab.Screen name="Home" children={() => <PlaceholderScreen title="HomeScreen" />} />
      <Tab.Screen name="Training" children={() => <PlaceholderScreen title="TrainingScreen" />} />
      <Tab.Screen name="Library" children={() => <PlaceholderScreen title="ExerciseLibraryScreen" />} />
      <Tab.Screen name="Progress" children={() => <PlaceholderScreen title="ProgressScreen" />} />
      <Tab.Screen name="Profile" children={() => <PlaceholderScreen title="ProfileScreen" />} />
    </Tab.Navigator>
  );
}

function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const {
    sport,
    position,
    verticalJumpCm,
    sprint40mSeconds,
    agilityRating,
    flexibilityRating,
    sportGoals,
    setSport,
    setPosition,
    setVerticalJumpCm,
    setSprint40mSeconds,
    setAgilityRating,
    setFlexibilityRating,
    setSportGoals,
    setCompletedOnboarding
  } = useOnboardingStore();

  const positions = useMemo(() => (sport === "basketball" ? basketballPositions : footballPositions), [sport]);

  const submitOnboarding = async () => {
    if (!sport || !position) return;
    try {
      await persistOnboardingData({
        sport,
        position,
        verticalJumpCm,
        sprint40mSeconds,
        agilityRating,
        flexibilityRating,
        sportGoals
      });
      setCompletedOnboarding(true);
    } catch (error: any) {
      Alert.alert("Profile save failed", error?.message ?? "Please try again.");
    }
  };

  if (step === 0) return <SplashScreen onDone={() => setStep(1)} />;
  if (step === 1) return <WelcomeScreen onGetStarted={() => setStep(2)} onLogin={() => { setAuthMode("login"); setStep(6); }} />;
  if (step === 2) return <SportSelectionScreen selectedSport={sport} onSelect={setSport} onContinue={() => setStep(3)} />;
  if (step === 3) return <PositionSelectionScreen positions={positions} selectedPosition={position} onSelect={setPosition} onContinue={() => setStep(4)} />;
  if (step === 4) {
    return (
      <BaselineAssessmentScreen
        step={assessmentStep}
        verticalJumpCm={verticalJumpCm}
        sprint40mSeconds={sprint40mSeconds}
        agilityRating={agilityRating}
        flexibilityRating={flexibilityRating}
        onVerticalJumpChange={setVerticalJumpCm}
        onSprintChange={setSprint40mSeconds}
        onAgilityChange={setAgilityRating}
        onFlexibilityChange={setFlexibilityRating}
        onNext={() => {
          if (assessmentStep < 4) setAssessmentStep((s) => s + 1);
          else setStep(5);
        }}
      />
    );
  }
  if (step === 5) {
    return (
      <GoalSelectionScreen
        selectedGoals={sportGoals}
        onToggle={(pillar) => {
          if (sportGoals.includes(pillar)) {
            setSportGoals(sportGoals.filter((g) => g !== pillar));
          } else {
            setSportGoals([...sportGoals, pillar]);
          }
        }}
        onAllAround={() => setSportGoals(pillars.map((p) => p.id))}
        onContinue={() => setStep(6)}
      />
    );
  }
  return (
    <AuthScreen
      mode={authMode}
      onToggleMode={() => setAuthMode((m) => (m === "signup" ? "login" : "signup"))}
      onSuccess={submitOnboarding}
    />
  );
}

export default function AppNavigator() {
  const { completedOnboarding } = useOnboardingStore();
  const { user } = useAuthStore();
  const hasCompletedOnboarding = completedOnboarding && !!user;

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!hasCompletedOnboarding ? (
        <RootStack.Screen name="Onboarding" component={OnboardingFlow} />
      ) : (
        <RootStack.Screen name="Main" component={MainTabs} />
      )}
      <RootStack.Screen
        name="WorkoutSession"
        children={() => <PlaceholderScreen title="WorkoutSessionScreen" />}
      />
    </RootStack.Navigator>
  );
}
