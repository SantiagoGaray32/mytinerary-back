var express = require('express')
var router = express.Router()

const { createItinerary, updateItinerary, destroyItinerary } = require('../controllers/itineraryController')

router.post('/', createItinerary)
router.patch('/:id', updateItinerary)
router.delete('/:id', destroyItinerary)

module.exports = router