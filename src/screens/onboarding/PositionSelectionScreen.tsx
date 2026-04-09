import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Props = {
  positions: string[];
  selectedPosition: string | null;
  onSelect: (position: string) => void;
  onContinue: () => void;
};

export function PositionSelectionScreen({ positions, selectedPosition, onSelect, onContinue }: Props) {
  return (
    <View className="flex-1 bg-dark px-6 pt-12">
      <Text className="text-white text-2xl font-semibold mb-4">Select your position</Text>
      <ScrollView>
        <View className="gap-3">
          {positions.map((position) => {
            const active = selectedPosition === position;
            return (
              <Pressable
                key={position}
                onPress={() => onSelect(position)}
                className={`rounded-xl p-4 border ${active ? "border-primary bg-cardDark" : "border-borderDark"}`}
              >
                <Text className="text-white">{position}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      <View className="py-8">
        <PrimaryButton label="Continue" onPress={onContinue} disabled={!selectedPosition} />
      </View>
    </View>
  );
}
