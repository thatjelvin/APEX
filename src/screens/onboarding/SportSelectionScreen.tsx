import React from "react";
import { Pressable, Text, View } from "react-native";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SportType } from "@/types";

type Props = {
  selectedSport: SportType | null;
  onSelect: (sport: SportType) => void;
  onContinue: () => void;
};

export function SportSelectionScreen({ selectedSport, onSelect, onContinue }: Props) {
  return (
    <View className="flex-1 bg-dark px-6 pt-12">
      <Text className="text-white text-2xl font-semibold mb-6">Choose your sport</Text>
      <View className="flex-row gap-4">
        {(["basketball", "football"] as SportType[]).map((sport) => {
          const active = selectedSport === sport;
          return (
            <Pressable
              key={sport}
              onPress={() => onSelect(sport)}
              className={`flex-1 rounded-xl p-5 border ${active ? "border-primary bg-cardDark" : "border-borderDark"}`}
            >
              <Text className="text-white text-lg capitalize text-center">{sport}</Text>
            </Pressable>
          );
        })}
      </View>
      <View className="mt-auto mb-8">
        <PrimaryButton label="Continue" onPress={onContinue} disabled={!selectedSport} />
      </View>
    </View>
  );
}
