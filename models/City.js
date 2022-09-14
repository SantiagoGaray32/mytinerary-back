const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  photo: { type: String, required: true },
  population: {
    type: Number,
    required: true,
    min: [1000, "Cannot be less than 1000"],
    max: [100000000, "Cannot be bigger than 100000000"],
  },
  foundation: {
    type: Date,
    required: true,
    minLength: 4,
  },
});

const City = mongoose.model("Cities", Schema);

module.exports = City;
