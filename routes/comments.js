var express = require("express");
var router = express.Router();
var passport = require('../config/passport')

const {
  createComment,
  all,
  readFromCities,
  readFromUser,
  editComment,
  deleteComment,
} = require("../controllers/commentController");

router.post("/",passport.authenticate('jwt', {session:false}), createComment);
router.get("/", all); // comments?cityname=Paris
router.get('/user',readFromUser );
router.patch('/:id',passport.authenticate('jwt', {session:false}),editComment);
router.delete('/:id',passport.authenticate('jwt', {session:false}),deleteComment);

module.exports = router;

// las peticiones me dan un 401 (unahutorizade) tenemos que pasar el token que generamos al registrarnos.