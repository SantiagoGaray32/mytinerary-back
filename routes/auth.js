var express = require("express");
var router = express.Router();
const { signUp, verifyMail, signIn } = require("../controllers/userController");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("verify/:code", verifyMail);

module.exports = router;
