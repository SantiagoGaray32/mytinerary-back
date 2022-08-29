var express = require('express');
const { read } = require('fs');
var router = express.Router();
const {create} = require('../controllers/cityController')

router.post('/', create)
router.get('/:id',read)