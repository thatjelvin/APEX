import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
};

export function PlaceholderScreen({ title, subtitle }: Props) {
  return (
    <View className="flex-1 bg-dark items-center justify-center px-6">
      <Text className="text-white text-2xl font-bold text-center">{title}</Text>
      {subtitle ? (
        <Text className="text-textSecondary text-center mt-3">{subtitle}</Text>
      ) : null}
    </View>
  );
}
