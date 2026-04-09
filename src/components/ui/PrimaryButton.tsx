import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost";
};

export function PrimaryButton({ label, onPress, disabled = false, variant = "primary" }: Props) {
  const primary = variant === "primary";
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`w-full rounded-lg py-3 px-4 ${primary ? "bg-primary" : "border border-borderDark"}`}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <Text className={`text-center font-semibold ${primary ? "text-white" : "text-white"}`}>{label}</Text>
    </Pressable>
  );
}
