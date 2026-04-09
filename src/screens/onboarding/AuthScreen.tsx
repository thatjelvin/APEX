import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from "@/services/auth";

type Props = {
  mode: "signup" | "login";
  onToggleMode: () => void;
  onSuccess: () => Promise<void>;
};

export function AuthScreen({ mode, onToggleMode, onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      if (mode === "signup") {
        await signUpWithEmail(email.trim(), password);
      } else {
        await signInWithEmail(email.trim(), password);
      }
      await onSuccess();
    } catch (error: any) {
      Alert.alert("Auth error", error?.message ?? "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const google = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      await onSuccess();
    } catch (error: any) {
      Alert.alert("Google sign-in failed", error?.message ?? "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-dark px-6 pt-12">
      <Text className="text-white text-2xl font-semibold">{mode === "signup" ? "Create account" : "Log in"}</Text>
      <TextInput className="mt-6 rounded-lg bg-cardDark text-white px-4 py-3" placeholder="Email" placeholderTextColor="#888888" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput className="mt-3 rounded-lg bg-cardDark text-white px-4 py-3" placeholder="Password" placeholderTextColor="#888888" secureTextEntry value={password} onChangeText={setPassword} />
      <View className="mt-6 gap-3">
        <PrimaryButton label={loading ? "Please wait..." : mode === "signup" ? "Sign Up" : "Log In"} onPress={submit} disabled={loading || !email || !password} />
        <PrimaryButton label="Continue with Google" onPress={google} variant="ghost" disabled={loading} />
      </View>
      <Pressable className="mt-6" onPress={onToggleMode}>
        <Text className="text-center text-textSecondary">
          {mode === "signup" ? "Already have an account? Log In" : "Need an account? Sign Up"}
        </Text>
      </Pressable>
    </View>
  );
}
