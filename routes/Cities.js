var express = require("express");
var router = express.Router();
const {
  all,
  create,
  read,
  destroy,
  updateCity,
} = require("../controllers/cityController");

router.get("/", all);
router.get("/:id", read);
router.post("/", create);
router.delete("/:id", destroy);
router.put("/:id", updateCity);

module.exports = router;
