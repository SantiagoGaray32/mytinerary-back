var express = require("express");
var router = express.Router();

const {
  createItinerary,
  updateItinerary,
  destroyItinerary,
  readFromCity,
  readFromUserId,
} = require("../controllers/itineraryController");

router.get("/", readFromCity);
router.get("/:userId", readFromUserId);
router.post("/", createItinerary);
router.patch("/:id", updateItinerary);
router.delete("/:id", destroyItinerary);

module.exports = router;
