const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.set("Cache-Control", "max-age=86400");
  res.json([{ event: "Concert in the mountains", date: "2025-01-24" }]);
  // TODO: Add from data file
});

module.exports = router;
