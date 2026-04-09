import React from "react";
import { Text, TextInput, View } from "react-native";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Props = {
  step: number;
  verticalJumpCm: string;
  sprint40mSeconds: string;
  agilityRating: number;
  flexibilityRating: number;
  onVerticalJumpChange: (value: string) => void;
  onSprintChange: (value: string) => void;
  onAgilityChange: (value: number) => void;
  onFlexibilityChange: (value: number) => void;
  onNext: () => void;
};

export function BaselineAssessmentScreen(props: Props) {
  const {
    step,
    verticalJumpCm,
    sprint40mSeconds,
    agilityRating,
    flexibilityRating,
    onVerticalJumpChange,
    onSprintChange,
    onAgilityChange,
    onFlexibilityChange,
    onNext
  } = props;

  return (
    <View className="flex-1 bg-dark px-6 pt-12">
      <Text className="text-white mb-2">Step {step} of 4</Text>
      {step === 1 ? (
        <>
          <Text className="text-white text-xl font-semibold">Vertical jump (cm)</Text>
          <Text className="text-textSecondary mt-2">Stand next to a wall, mark your max reach, jump and mark again. Measure the difference.</Text>
          <TextInput className="mt-4 rounded-lg bg-cardDark text-white px-4 py-3" keyboardType="decimal-pad" value={verticalJumpCm} onChangeText={onVerticalJumpChange} placeholder="e.g. 62" placeholderTextColor="#888888" />
        </>
      ) : null}
      {step === 2 ? (
        <>
          <Text className="text-white text-xl font-semibold">40-metre sprint (seconds)</Text>
          <TextInput className="mt-4 rounded-lg bg-cardDark text-white px-4 py-3" keyboardType="decimal-pad" value={sprint40mSeconds} onChangeText={onSprintChange} placeholder="e.g. 5.41" placeholderTextColor="#888888" />
        </>
      ) : null}
      {step === 3 ? (
        <>
          <Text className="text-white text-xl font-semibold">Agility self-rating</Text>
          <Text className="text-textSecondary mt-2">Current rating: {agilityRating}/10</Text>
          <TextInput className="mt-4 rounded-lg bg-cardDark text-white px-4 py-3" keyboardType="number-pad" value={String(agilityRating)} onChangeText={(v) => onAgilityChange(Math.min(10, Math.max(1, Number(v) || 1)))} />
        </>
      ) : null}
      {step === 4 ? (
        <>
          <Text className="text-white text-xl font-semibold">Flexibility self-rating</Text>
          <Text className="text-textSecondary mt-2">Current rating: {flexibilityRating}/10</Text>
          <TextInput className="mt-4 rounded-lg bg-cardDark text-white px-4 py-3" keyboardType="number-pad" value={String(flexibilityRating)} onChangeText={(v) => onFlexibilityChange(Math.min(10, Math.max(1, Number(v) || 1)))} />
        </>
      ) : null}
      <View className="mt-auto mb-8">
        <PrimaryButton label={step === 4 ? "Continue" : "Next"} onPress={onNext} />
      </View>
    </View>
  );
}
