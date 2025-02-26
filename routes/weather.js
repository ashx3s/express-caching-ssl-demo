const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // TODO: get current weather updates from Open Weather API
  res.set("Cache-Control", "no-store"); // no cache for real time
  res.json({ temperature: "-5°C", conditions: "Clear Skies" });
});

module.exports = router;
