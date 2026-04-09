import * as Linking from "expo-linking";

export async function createCheckoutSession(customerEmail: string, priceId: string) {
  const baseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("Missing API base URL");

  const successUrl = Linking.createURL("billing/success");
  const cancelUrl = Linking.createURL("billing/cancel");

  const response = await fetch(`${baseUrl}/billing/checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customerEmail, priceId, successUrl, cancelUrl })
  });

  if (!response.ok) throw new Error("Unable to create checkout session");
  return response.json() as Promise<{ checkoutUrl: string }>;
}

export async function verifySubscription(customerId: string) {
  const baseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("Missing API base URL");

  const response = await fetch(`${baseUrl}/billing/verify/${customerId}`);
  if (!response.ok) throw new Error("Unable to verify subscription");
  return response.json() as Promise<{ active: boolean }>;
}
