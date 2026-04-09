import { PillarType } from "@/types";

export const basketballPositions = [
  "Point Guard",
  "Shooting Guard",
  "Small Forward",
  "Power Forward",
  "Center"
];

export const footballPositions = ["Goalkeeper", "Defender", "Midfielder", "Winger", "Striker"];

export const pillars: { id: PillarType; label: string }[] = [
  { id: "explosive_power", label: "Explosive Power" },
  { id: "speed", label: "Speed & Acceleration" },
  { id: "agility", label: "Agility & Change of Direction" },
  { id: "endurance", label: "Cardiovascular Endurance" },
  { id: "strength", label: "Functional Strength" },
  { id: "mobility", label: "Mobility & Injury Prevention" }
];
