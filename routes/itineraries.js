var express = require("express");
const passport = require("../config/passport");
var router = express.Router();

const {
  createItinerary,
  updateItinerary,
  destroyItinerary,
  readFromCity,
  readFromUserId,
  likeDislike,
} = require("../controllers/itineraryController");

router.get("/", readFromCity);
router.get("/:userId", readFromUserId);
router.post("/", createItinerary);
router.patch("/:id", updateItinerary);
router.delete("/:id", destroyItinerary);
router.post("/likes/:id",passport.authenticate('jwt',{session:false}), likeDislike ); // passport.authenticate('jwt',{session:false}),

module.exports = router;
