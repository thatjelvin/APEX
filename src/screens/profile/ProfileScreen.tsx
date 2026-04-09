import React, { useState } from "react";
import { Pressable, ScrollView, Switch, Text, View } from "react-native";
import { signOut } from "@/services/auth";
import { useAuthStore } from "@/store/authStore";

export function ProfileScreen() {
  const { user, setSession, setUser } = useAuthStore();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [isMetric, setIsMetric] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const logout = async () => {
    await signOut();
    setUser(null);
    setSession(null);
  };

  return (
    <ScrollView className="flex-1 bg-dark px-4 pt-10">
      <View className="rounded-xl bg-cardDark p-4">
        <Text className="text-white text-xl font-semibold">{user?.email?.slice(0, 2).toUpperCase() ?? "AF"}</Text>
        <Text className="text-white mt-2">{user?.email ?? "athlete@athleteforge.app"}</Text>
        <Text className="text-textSecondary mt-1">Basketball • Point Guard</Text>
        <Text className="text-primary mt-2">Free Tier</Text>
      </View>
      <View className="mt-4 rounded-xl bg-cardDark p-4 gap-4">
        <View className="flex-row items-center justify-between"><Text className="text-white">Push Notifications</Text><Switch value={pushEnabled} onValueChange={setPushEnabled} /></View>
        <View className="flex-row items-center justify-between"><Text className="text-white">Units (cm/inches)</Text><Switch value={isMetric} onValueChange={setIsMetric} /></View>
        <View className="flex-row items-center justify-between"><Text className="text-white">Appearance (Dark/Light)</Text><Switch value={darkMode} onValueChange={setDarkMode} /></View>
        <Pressable><Text className="text-white">Privacy Policy</Text></Pressable>
        <Pressable><Text className="text-white">Terms of Service</Text></Pressable>
      </View>
      <View className="mt-4 rounded-xl bg-cardDark p-4">
        <Text className="text-white font-semibold">Upgrade to Pro</Text>
        <Text className="text-textSecondary mt-1">Unlock AI progression, full library, offline workouts, and analytics.</Text>
      </View>
      <Pressable onPress={logout} className="mt-4 mb-8 rounded-xl border border-primary p-4">
        <Text className="text-primary text-center font-semibold">Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}
