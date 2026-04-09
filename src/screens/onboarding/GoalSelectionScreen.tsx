import React from "react";
import { Pressable, Text, View } from "react-native";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { pillars } from "@/constants/onboarding";
import { PillarType } from "@/types";

type Props = {
  selectedGoals: PillarType[];
  onToggle: (pillar: PillarType) => void;
  onAllAround: () => void;
  onContinue: () => void;
};

export function GoalSelectionScreen({ selectedGoals, onToggle, onAllAround, onContinue }: Props) {
  return (
    <View className="flex-1 bg-dark px-6 pt-12">
      <Text className="text-white text-2xl font-semibold">Prioritize your goals</Text>
      <View className="mt-4 flex-row flex-wrap gap-2">
        {pillars.map((pillar) => {
          const active = selectedGoals.includes(pillar.id);
          return (
            <Pressable
              key={pillar.id}
              onPress={() => onToggle(pillar.id)}
              className={`rounded-full px-4 py-3 border ${active ? "border-primary bg-cardDark" : "border-borderDark"}`}
            >
              <Text className="text-white">{pillar.label}</Text>
            </Pressable>
          );
        })}
      </View>
      <View className="mt-4">
        <PrimaryButton label="All-Around (Select All 6)" onPress={onAllAround} variant="ghost" />
      </View>
      <View className="mt-auto mb-8">
        <PrimaryButton label="Continue" onPress={onContinue} disabled={selectedGoals.length === 0} />
      </View>
    </View>
  );
}
