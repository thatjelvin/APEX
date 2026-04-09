const OpenAI = require("openai");

const systemPrompt = `You are an elite athletic performance coach AI. Based on the athlete's recent workout log, determine the progression recommendation for their next training session.

Rules:
- If RPE > 8 consistently AND all sets completed: recommend 'progress' (increase load/intensity 5–10%)
- If RPE 6–7 AND all sets completed: recommend 'maintain' (same load)
- If RPE > 9 OR multiple sets skipped: recommend 'deload' (reduce load 15%)
- If athlete skipped more than 2 exercises: flag for rest day

Return ONLY valid JSON in this exact format, no preamble:
{
  "recommendation": "progress" | "maintain" | "deload" | "rest",
  "adjustment_percentage": number,
  "reasoning": "one sentence explanation",
  "next_session_notes": "specific coaching note for the athlete"
}`;

async function getProgressionRecommendation(workoutLog) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: JSON.stringify(workoutLog) }
    ],
    temperature: 0.2
  });

  const content = response.choices?.[0]?.message?.content ?? "{}";
  return JSON.parse(content);
}

module.exports = { getProgressionRecommendation };
