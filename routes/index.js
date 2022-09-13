var express = require("express");
var router = express.Router();
const cityRouter = require("./cities");
const authRouter = require("./auth.js");
const itineraryRouter = require("./itineraries");
const commentRouter = require("./comments");
const activityRouter = require("./activities")

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/cities", cityRouter);
router.use("/auth", authRouter); // CDORREGIR POR /AUTH 
router.use("/itineraries", itineraryRouter);
router.use("/comments", commentRouter);
router.use("/activities", activityRouter)

module.exports = router;
