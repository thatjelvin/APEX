import { supabase } from "@/utils/supabase";
import { PillarType, SportType } from "@/types";

type OnboardingPayload = {
  sport: SportType;
  position: string;
  verticalJumpCm: string;
  sprint40mSeconds: string;
  agilityRating: number;
  flexibilityRating: number;
  sportGoals: PillarType[];
};

export async function persistOnboardingData(payload: OnboardingPayload) {
  const {
    data: { user },
    error: sessionError
  } = await supabase.auth.getUser();

  if (sessionError) throw sessionError;
  if (!user) return;

  const { error: userError } = await supabase
    .from("users")
    .upsert(
      {
        id: user.id,
        email: user.email,
        sport: payload.sport,
        position: payload.position
      },
      { onConflict: "id" }
    );

  if (userError) throw userError;

  const { error: profileError } = await supabase.from("athlete_profiles").upsert(
    {
      user_id: user.id,
      vertical_jump_cm: Number(payload.verticalJumpCm),
      sprint_40m_seconds: Number(payload.sprint40mSeconds),
      agility_rating: payload.agilityRating,
      flexibility_rating: payload.flexibilityRating,
      sport_goal: payload.sportGoals
    },
    { onConflict: "user_id" }
  );

  if (profileError) throw profileError;
}
