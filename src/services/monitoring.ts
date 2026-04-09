import * as Sentry from "@sentry/react-native";
import { PostHog } from "posthog-react-native";

let posthogClient: PostHog | null = null;

export function initMonitoring() {
  if (process.env.EXPO_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
      enableAutoSessionTracking: true
    });
  }

  if (process.env.EXPO_PUBLIC_POSTHOG_API_KEY) {
    posthogClient = new PostHog(process.env.EXPO_PUBLIC_POSTHOG_API_KEY, {
      host: process.env.EXPO_PUBLIC_POSTHOG_HOST ?? "https://app.posthog.com"
    });
  }
}

export function captureEvent(event: string, properties?: Record<string, unknown>) {
  posthogClient?.capture(event, properties as any);
}
