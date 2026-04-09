import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { exerciseLibrary } from "@/data/mock";

type Props = {
  exerciseId: string;
};

export function ExerciseDetailScreen({ exerciseId }: Props) {
  const exercise = exerciseLibrary.find((item) => item.id === exerciseId) ?? exerciseLibrary[0];

  return (
    <ScrollView className="flex-1 bg-dark">
      <Video
        source={{ uri: exercise.video_url }}
        style={{ width: "100%", height: 220 }}
        isLooping
        shouldPlay
        isMuted
        resizeMode={ResizeMode.COVER}
      />
      <View className="px-4 py-4">
        <Text className="text-white text-2xl font-semibold">{exercise.name}</Text>
        <Text className="text-textSecondary mt-1">{exercise.pillar}</Text>
        <View className="mt-3 flex-row flex-wrap gap-2">
          {exercise.equipment_needed.map((item) => (
            <View key={item} className="rounded-full bg-cardDark px-3 py-2">
              <Text className="text-white text-xs">{item}</Text>
            </View>
          ))}
        </View>
        <Text className="text-white font-semibold mt-5">Coaching Cues</Text>
        {exercise.coaching_cues.map((cue, index) => <Text key={cue} className="text-textSecondary mt-2">{index + 1}. {cue}</Text>)}
        <Text className="text-white font-semibold mt-5">Common Mistakes</Text>
        {exercise.common_mistakes.map((mistake) => <Text key={mistake} className="text-textSecondary mt-2">⚠ {mistake}</Text>)}
        <Text className="text-white mt-5">Difficulty: {exercise.difficulty}</Text>
        <View className="mt-6 mb-8">
          <PrimaryButton label="Add to Custom Workout" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}
