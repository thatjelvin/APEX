import React from "react";
import { ScrollView, Text, View } from "react-native";
import { VictoryChart, VictoryLine, VictoryPolarAxis, VictoryTheme } from "victory";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { radarData } from "@/data/mock";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView className="flex-1 bg-dark px-4 pt-10">
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-xl font-semibold">🔥 7 day streak</Text>
        <View className="h-9 w-9 rounded-full bg-cardDark items-center justify-center">
          <Text className="text-white">AF</Text>
        </View>
      </View>
      <View className="mt-4 rounded-xl bg-cardDark p-4">
        <Text className="text-white font-semibold mb-2">6-Pillar Snapshot</Text>
        <VictoryChart polar height={220} theme={VictoryTheme.material}>
          <VictoryPolarAxis dependentAxis style={{ axis: { stroke: "#2A2A3E" }, tickLabels: { fill: "#888888", fontSize: 8 } }} />
          <VictoryLine data={radarData} style={{ data: { stroke: "#E63946", strokeWidth: 2 } }} />
        </VictoryChart>
      </View>
      <View className="mt-4 rounded-xl bg-cardDark p-4">
        <Text className="text-white text-lg font-semibold">Today's Workout</Text>
        <Text className="text-textSecondary mt-1">Basketball Explosiveness 8-Week • Day 2 • 45 min</Text>
        <View className="mt-4">
          <PrimaryButton label="Start Workout" onPress={() => navigation.navigate("WorkoutSession")} />
        </View>
      </View>
      <View className="mt-4 mb-8 flex-row gap-2">
        {["Workouts this week: 4", "Hours: 3.4", "Last VJ PB: 66cm"].map((item) => (
          <View key={item} className="flex-1 rounded-xl bg-cardDark p-3">
            <Text className="text-white text-xs">{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
