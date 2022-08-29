const mongoose = require('mongoose')
const { stringify } = require('querystring')

const Schema = new mongoose.Schema({
   city: {type: String, required: true},
   country: {type: String, required: true},
   photo: {type: String, required: true},
   population: {type: Number, required: true},
   fundation: {type: Number, required: true},
})

const City = mongoose.model(
    'Cities',
    mongoose.Schema
)

module.exports = City