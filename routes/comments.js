var express = require("express");
var router = express.Router();

const {
  createComment,
  all,
  readFromCities,
  readFromUser,
} = require("../controllers/commentController");

router.get("/", all); // comments?cityname=Paris
router.get("/", readFromCities); //comments/4 (4 es el ID de la ciudad) => nunca se ejecuta
router.get("", readFromUser); //nunca se ejecuta
router.post("/", createComment);

module.exports = router;
