import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlaceholderScreen } from "@/screens/common/PlaceholderScreen";

type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  WorkoutSession: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
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

function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        children={() =>
          <PlaceholderScreen
            title="Onboarding (Screens 1-7)"
            subtitle="Will be implemented in the onboarding phase."
          />
        }
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const hasCompletedOnboarding = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!hasCompletedOnboarding ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Main" component={MainTabs} />
      )}
      <Stack.Screen
        name="WorkoutSession"
        children={() => <PlaceholderScreen title="WorkoutSessionScreen" />}
      />
    </Stack.Navigator>
  );
}
