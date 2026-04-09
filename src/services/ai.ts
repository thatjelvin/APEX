export async function fetchAiProgression(workoutLog: Record<string, unknown>) {
  const baseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("Missing API base URL");

  const response = await fetch(`${baseUrl}/ai/progression`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workoutLog)
  });

  if (!response.ok) {
    throw new Error("AI progression request failed");
  }
  return response.json();
}

export function applyAdjustment(baseValue: number, adjustmentPercentage: number) {
  return Math.round(baseValue * (1 + adjustmentPercentage / 100));
}
