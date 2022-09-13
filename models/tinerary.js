const mongoose = require("mongoose");

const tinerariesSchema = new mongoose.Schema({
  city: { type: mongoose.Types.ObjectId, ref: "cities" },
  userName: { type: String, required: true },
  itinerary: { type: String, required: true }, // CORREGIR POR NAME, 
  price: { type: Number, required: true },
  tags: { type: Array, required: true },
  duration: { type: Number, required: true },
  likes: { type: Array, required: true },
});

const itinerary = mongoose.model("tineraries", tinerariesSchema); // ES ITINERARY, NO TINERARY-
module.exports = itinerary;
