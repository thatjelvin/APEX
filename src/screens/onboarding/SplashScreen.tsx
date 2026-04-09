import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

type Props = {
  onDone: () => void;
};

export function SplashScreen({ onDone }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.08, duration: 800, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 800, useNativeDriver: true })
      ])
    ).start();

    const timeout = setTimeout(onDone, 2000);
    return () => clearTimeout(timeout);
  }, [onDone, scale]);

  return (
    <View className="flex-1 bg-dark items-center justify-center">
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text className="text-white text-4xl font-bold">AthleteForge</Text>
      </Animated.View>
    </View>
  );
}
