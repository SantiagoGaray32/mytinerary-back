var express = require('express')
var router = express.Router()

const { createItinerary,
     updateItinerary,
      destroyItinerary,
    readFromCity } = require('../controllers/itineraryController')

router.get('/',readFromCity)
router.post('/', createItinerary)
router.patch('/:id', updateItinerary)
router.delete('/:id', destroyItinerary)

module.exports = router