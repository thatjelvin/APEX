import * as FileSystem from "expo-file-system/legacy";

const offlineDir = `${FileSystem.documentDirectory}offline-workouts/`;

export async function ensureOfflineDir() {
  const info = await FileSystem.getInfoAsync(offlineDir);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(offlineDir, { intermediates: true });
  }
}

export async function saveWorkoutOffline(workoutId: string, payload: unknown) {
  await ensureOfflineDir();
  const target = `${offlineDir}${workoutId}.json`;
  await FileSystem.writeAsStringAsync(target, JSON.stringify(payload));
  return target;
}

export async function getOfflineWorkout(workoutId: string) {
  const target = `${offlineDir}${workoutId}.json`;
  const info = await FileSystem.getInfoAsync(target);
  if (!info.exists) return null;
  const raw = await FileSystem.readAsStringAsync(target);
  return JSON.parse(raw);
}
