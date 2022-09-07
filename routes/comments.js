var express = require('express')
var router = express.Router()

const { createComment,
      all,
      readFromCities,
      readFromUser} = require('../controllers/commentController')

      router.get('/query', readFromUser)
router.post('/', createComment)
router.get('/city', readFromCities)
router.get('/', all)

module.exports = router