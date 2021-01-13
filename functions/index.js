const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I8u9nHxXphBSaemCrMYKOTv83I0S9IJhcEi7hLtzFvaI86KaKm3PV0esf5bGyz64rkHxvbUJzKTEKvkIXidjkmA00zhMTQoSh"
);
const runtimeOpts = {
  timeoutSeconds: 540,
  memory: "2GB",
};
// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello, world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.runWith(runtimeOpts).https.onRequest(app);
