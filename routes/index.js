var express = require("express");
var router = express.Router();
const cityRouter = require("./cities");
const userRouter = require("./users.js");

const itineraryRouter = require("./itineraries");
const commentRouter = require("./comments");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/cities", cityRouter);
router.use("/users", userRouter);

router.use("/itineraries", itineraryRouter);
router.use("/comments", commentRouter);

module.exports = router;
