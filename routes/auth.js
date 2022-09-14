var express = require("express");
var router = express.Router();

const {
  signUp,
  verifyMail,
  signIn,
  signOut,
} = require("../controllers/userController");
=======


router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("verify/:code", verifyMail);
router.put("/signOut/:id", signOut);


module.exports = router;
