import { create } from "zustand";
import { PillarType, SportType } from "@/types";

type OnboardingState = {
  sport: SportType | null;
  position: string | null;
  verticalJumpCm: string;
  sprint40mSeconds: string;
  agilityRating: number;
  flexibilityRating: number;
  sportGoals: PillarType[];
  completedOnboarding: boolean;
  setSport: (sport: SportType) => void;
  setPosition: (position: string) => void;
  setVerticalJumpCm: (value: string) => void;
  setSprint40mSeconds: (value: string) => void;
  setAgilityRating: (value: number) => void;
  setFlexibilityRating: (value: number) => void;
  setSportGoals: (goals: PillarType[]) => void;
  setCompletedOnboarding: (value: boolean) => void;
  resetOnboarding: () => void;
};

const initialState = {
  sport: null,
  position: null,
  verticalJumpCm: "",
  sprint40mSeconds: "",
  agilityRating: 5,
  flexibilityRating: 5,
  sportGoals: [],
  completedOnboarding: false
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  ...initialState,
  setSport: (sport) => set({ sport }),
  setPosition: (position) => set({ position }),
  setVerticalJumpCm: (verticalJumpCm) => set({ verticalJumpCm }),
  setSprint40mSeconds: (sprint40mSeconds) => set({ sprint40mSeconds }),
  setAgilityRating: (agilityRating) => set({ agilityRating }),
  setFlexibilityRating: (flexibilityRating) => set({ flexibilityRating }),
  setSportGoals: (sportGoals) => set({ sportGoals }),
  setCompletedOnboarding: (completedOnboarding) => set({ completedOnboarding }),
  resetOnboarding: () => set(initialState)
}));
