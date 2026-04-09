const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession({ customerEmail, priceId, successUrl, cancelUrl }) {
  return stripe.checkout.sessions.create({
    mode: "subscription",
    customer_email: customerEmail,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl
  });
}

async function verifySubscription(customerId) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: "active",
    limit: 1
  });
  return subscriptions.data.length > 0;
}

module.exports = { createCheckoutSession, verifySubscription };
