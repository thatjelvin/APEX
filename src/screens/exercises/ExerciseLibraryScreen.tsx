import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { exerciseLibrary } from "@/data/mock";
import { useNavigation } from "@react-navigation/native";

const chips = ["All", "Explosive Power", "Speed", "Agility", "Endurance", "Strength", "Mobility", "Basketball", "Football"];

export function ExerciseLibraryScreen() {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState("All");

  const filtered = useMemo(
    () =>
      exerciseLibrary.filter((item) => {
        const bySearch = item.name.toLowerCase().includes(search.toLowerCase());
        const byChip = activeChip === "All" || item.pillar.includes(activeChip.toLowerCase().split(" ")[0]);
        return bySearch && byChip;
      }),
    [activeChip, search]
  );

  return (
    <View className="flex-1 bg-dark px-4 pt-10">
      <TextInput className="rounded-lg bg-cardDark text-white px-4 py-3" placeholder="Search exercises..." placeholderTextColor="#888888" value={search} onChangeText={setSearch} />
      <ScrollView horizontal className="mt-3" showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2">
          {chips.map((chip) => (
            <Pressable key={chip} onPress={() => setActiveChip(chip)} className={`rounded-full px-4 py-2 border ${activeChip === chip ? "border-primary bg-cardDark" : "border-borderDark"}`}>
              <Text className="text-white text-xs">{chip}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <ScrollView className="mt-4">
        <View className="gap-3 pb-12">
          {filtered.map((exercise) => (
            <Pressable key={exercise.id} onPress={() => navigation.navigate("ExerciseDetail", { exerciseId: exercise.id })} className="rounded-xl bg-cardDark p-4">
              <Text className="text-white text-base font-semibold">{exercise.name}</Text>
              <Text className="text-textSecondary mt-1">{exercise.pillar} • {exercise.difficulty}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
