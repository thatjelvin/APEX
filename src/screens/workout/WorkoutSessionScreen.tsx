import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import Animated, { FadeIn } from "react-native-reanimated";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { exerciseLibrary } from "@/data/mock";

export function WorkoutSessionScreen() {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [completedSets, setCompletedSets] = useState(0);
  const [rpe, setRpe] = useState(7);
  const [finished, setFinished] = useState(false);
  const totalSets = 4;
  const exercise = exerciseLibrary[exerciseIndex];

  const cue = useMemo(
    () => exercise.coaching_cues[completedSets % exercise.coaching_cues.length],
    [completedSets, exercise.coaching_cues]
  );

  const nextSet = () => {
    if (completedSets + 1 >= totalSets) {
      if (exerciseIndex + 1 < exerciseLibrary.length) {
        setExerciseIndex((v) => v + 1);
        setCompletedSets(0);
      } else {
        setFinished(true);
      }
    } else {
      setCompletedSets((v) => v + 1);
    }
  };

  if (finished) {
    return (
      <View className="flex-1 bg-dark px-6 items-center justify-center">
        <Text className="text-white text-3xl font-bold">Workout Complete 🎉</Text>
        <Text className="text-textSecondary mt-3">Exercises completed: {exerciseLibrary.length}</Text>
        <Text className="text-textSecondary mt-1">RPE average: {rpe}</Text>
        <View className="mt-6 w-full">
          <PrimaryButton label="Save & Exit" onPress={() => {}} />
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-dark px-4 pt-12">
      <View className="flex-row justify-between">
        <Text className="text-white text-xl font-semibold">{exercise.name}</Text>
        <Pressable><Text className="text-textSecondary">Skip</Text></Pressable>
      </View>
      <Text className="text-textSecondary mt-1">Set {completedSets + 1} of {totalSets}</Text>
      <Video source={{ uri: exercise.video_url }} style={{ width: "100%", height: 220, marginTop: 12, borderRadius: 12 }} shouldPlay isLooping isMuted resizeMode={ResizeMode.COVER} />
      <Animated.View entering={FadeIn} className="mt-4 rounded-xl bg-cardDark p-4">
        <Text className="text-white font-semibold">Coaching Cue</Text>
        <Text className="text-textSecondary mt-2">{cue}</Text>
      </Animated.View>
      <View className="mt-4 flex-row gap-2">
        {Array.from({ length: totalSets }).map((_, idx) => (
          <View key={idx} className={`h-4 w-4 rounded-full ${idx <= completedSets ? "bg-primary" : "bg-borderDark"}`} />
        ))}
      </View>
      <View className="mt-6">
        <PrimaryButton label="Complete Set" onPress={nextSet} />
      </View>
      <View className="mt-4">
        <Text className="text-white">RPE: {rpe}</Text>
        <View className="flex-row gap-2 mt-2">
          {[1,2,3,4,5,6,7,8,9,10].map((v) => (
            <Pressable key={v} onPress={() => setRpe(v)} className={`rounded-full px-2 py-1 ${rpe === v ? "bg-primary" : "bg-cardDark"}`}>
              <Text className="text-white text-xs">{v}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
