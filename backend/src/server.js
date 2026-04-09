require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getProgressionRecommendation } = require("./ai/progression");
const { createCheckoutSession, verifySubscription } = require("./billing/stripe");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/ai/progression", async (req, res) => {
  try {
    const recommendation = await getProgressionRecommendation(req.body);
    res.json(recommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/billing/checkout-session", async (req, res) => {
  try {
    const session = await createCheckoutSession(req.body);
    res.json({ checkoutUrl: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/billing/verify/:customerId", async (req, res) => {
  try {
    const active = await verifySubscription(req.params.customerId);
    res.json({ active });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`AthleteForge API running on ${port}`);
});
