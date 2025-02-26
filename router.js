const express = require("express");
const router = express.Router();
const homeRoutes = require("./routes/home");
const weatherRoutes = require("./routes/weather");
const eventsRoutes = require("./routes/events");
const profileRoutes = require("./routes/profile");

router.use("/", homeRoutes);
router.use("/weather", weatherRoutes);
router.use("/events", eventsRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
