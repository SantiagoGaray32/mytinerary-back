var express = require('express');
var router = express.Router();
const { read, destroy, updateCity } = require('../controllers/cityController');
const {create} = require('../controllers/cityController');
const {all} = require('../controllers/cityController')

router.get('/',all)
router.get('/:id',read)
router.post('/', create)
router.delete('/:id',destroy)
router.put('/:id',updateCity)


module.exports = router