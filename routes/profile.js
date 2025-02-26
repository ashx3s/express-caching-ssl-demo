const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ username: "maid-hoody" });
});

module.exports = router;
