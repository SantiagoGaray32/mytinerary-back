var express = require("express");
var router = express.Router();

const {createActivity, readFromItinerary} = require("../controllers/activityController");

router.get('/',readFromItinerary )
router.post('/',createActivity)

module.exports = router;
