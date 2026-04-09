import React from "react";
import { Text, View } from "react-native";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Props = {
  onGetStarted: () => void;
  onLogin: () => void;
};

export function WelcomeScreen({ onGetStarted, onLogin }: Props) {
  return (
    <View className="flex-1 bg-navy justify-end px-6 pb-10">
      <Text className="text-white text-4xl font-bold">Built for Athletes.{"\n"}Not Gym-Goers.</Text>
      <Text className="text-textSecondary mt-4 text-base">Train the 6 pillars that make elite athletes.</Text>
      <View className="mt-8 gap-3">
        <PrimaryButton label="Get Started" onPress={onGetStarted} />
        <PrimaryButton label="Log In" onPress={onLogin} variant="ghost" />
      </View>
    </View>
  );
}
