import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";
import { ENV } from "./env.js";

export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shield protects your app from common attacts e.g SQL injections, XSS, /CSRF attacks
    shield({mode: "LIVE"}),

    // bot detection - block all bots except search engines
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // allows legitimate search engine bots
      ],
    }),

    // rate limiting with token bucket algorithm
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,
      interval: 10,
      capacity: 15,
    })
  ]
})