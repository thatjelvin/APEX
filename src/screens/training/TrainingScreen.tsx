import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const tabs = ["My Program", "Browse", "History"] as const;

export function TrainingScreen() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("My Program");
  return (
    <View className="flex-1 bg-dark px-4 pt-10">
      <View className="flex-row gap-2">
        {tabs.map((tab) => (
          <Pressable key={tab} onPress={() => setActiveTab(tab)} className={`rounded-full px-4 py-2 border ${activeTab === tab ? "border-primary bg-cardDark" : "border-borderDark"}`}>
            <Text className="text-white">{tab}</Text>
          </Pressable>
        ))}
      </View>
      <ScrollView className="mt-4">
        {activeTab === "My Program" ? (
          <View className="rounded-xl bg-cardDark p-4">
            <Text className="text-white font-semibold">Basketball Explosiveness 8-Week</Text>
            <Text className="text-textSecondary mt-1">Week 2 of 8 • Progress: 25%</Text>
          </View>
        ) : null}
        {activeTab === "Browse" ? (
          <View className="gap-3">
            {["Athlete Agility 6-Week", "Functional Strength Foundation 8-Week"].map((item) => (
              <View key={item} className="rounded-xl bg-cardDark p-4">
                <Text className="text-white">{item}</Text>
                <Text className="text-textSecondary">Intermediate • 3 days/week</Text>
              </View>
            ))}
          </View>
        ) : null}
        {activeTab === "History" ? (
          <View className="gap-3">
            {["2026-04-08 • Day 4 • RPE 7", "2026-04-06 • Day 3 • RPE 8"].map((item) => (
              <View key={item} className="rounded-xl bg-cardDark p-4">
                <Text className="text-white">{item}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
