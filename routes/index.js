var express = require("express");
var router = express.Router();
const cityRouter = require("./Cities");
const userRouter = require("./users.js");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/cities", cityRouter);
router.use("/users", userRouter);

module.exports = router;
