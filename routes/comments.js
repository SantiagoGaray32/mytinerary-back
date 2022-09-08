var express = require('express')
var router = express.Router()

const { createComment,
      all,
      readFromCities,
      readFromUser} = require('../controllers/commentController')

      router.get('/', readFromCities)
      router.get('', readFromUser)
router.post('/', createComment)
router.get('/', all)

module.exports = router