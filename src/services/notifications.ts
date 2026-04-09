import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
});

export async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) return null;
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") return null;
  const token = await Notifications.getExpoPushTokenAsync();
  return token.data;
}

export async function scheduleWorkoutReminder(hour = 18, minute = 0) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "AthleteForge Reminder",
      body: "Your session is waiting. Keep the streak alive."
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute
    }
  });
}
