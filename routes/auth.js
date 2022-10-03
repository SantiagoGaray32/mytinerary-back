var express = require("express");
const { session } = require("passport");
const passport = require("../config/passport");
var router = express.Router();
const {
  signUp,
  verifyMail,
  signIn,
  signOut,
  signInWithToken,
  editProfile,
} = require("../controllers/userController");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("verify/:code", verifyMail);
router.put("/signOut/:id", signOut);
router.get("/token", passport.authenticate('jwt',{session:false}), signInWithToken);
router.patch('/:id',passport.authenticate('jwt',{session:false}), editProfile)

module.exports = router;
