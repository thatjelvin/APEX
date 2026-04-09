import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const pillars = ["explosive_power", "speed", "agility", "endurance", "strength", "mobility"] as const;

export function ProgressScreen() {
  const [pillar, setPillar] = useState<(typeof pillars)[number]>("explosive_power");
  const points = [62, 63, 64, 65, 66].map((v, i) => ({ x: i + 1, y: v }));

  return (
    <ScrollView className="flex-1 bg-dark px-4 pt-10">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2">
          {pillars.map((p) => (
            <Pressable key={p} onPress={() => setPillar(p)} className={`rounded-full px-3 py-2 ${pillar === p ? "bg-primary" : "bg-cardDark"}`}>
              <Text className="text-white text-xs">{p}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View className="mt-4 rounded-xl bg-cardDark p-4">
        <Text className="text-white font-semibold">Trend</Text>
        <VictoryChart height={220} theme={VictoryTheme.material}>
          <VictoryLine data={points} style={{ data: { stroke: "#E63946", strokeWidth: 2 } }} />
        </VictoryChart>
      </View>
      <View className="mt-4 rounded-xl bg-cardDark p-4">
        <Text className="text-white font-semibold">Personal Records</Text>
        <Text className="text-textSecondary mt-2">vertical_jump_cm: 66 cm (Apr 8, 2026)</Text>
      </View>
      <View className="mt-4 mb-8 rounded-xl bg-cardDark p-4">
        <Text className="text-white font-semibold">Body of Work</Text>
        <Text className="text-textSecondary mt-2">Workouts: 42 • Hours: 31.5 • Programs completed: 2</Text>
      </View>
    </ScrollView>
  );
}
