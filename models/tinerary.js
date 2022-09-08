const mongoose = require("mongoose");

const tinerariesSchema = new mongoose.Schema({
  city: { type: mongoose.Types.ObjectId, ref: "cities" },
  userPhoto: { type: String, required: true },
  userName: { type: String, required: true },
  itinerary: { type: String, required: true },
  price: { type: Number, required: true },
  tags: { type: Array, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  likes: { type: Array, required: true },
  comments: [
    {
      comment: { type: String },
      userId: { type: mongoose.Types.ObjectId, ref: "users" },
    },
  ],
});

const itinerary = mongoose.model("tineraries", tinerariesSchema);
module.exports = itinerary;
  likes: { type: Array, required: true },
});

const itinerary = mongoose.model("tineraries", tinerariesSchema);
module.exports = itinerary;
