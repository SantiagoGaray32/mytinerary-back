
const itinerary = require("../models/tinerary");

const itineraryController = {
  createItinerary: async (req, res) => {   
    try {
      await new itinerary(req.body).save();
      res.status(201).json({
        message: "Itinerary created",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: `couldt create itinerary,  ${error}`,
        success: false,
      });
    }
  },
  readFromCity: async (req, res) => { // lee los itinerarios segun la ID que le pasemos (city)
      let query = {}
      if (req.query.itinerary) {
          query.itinerary = req.query.itinerary
      }
      try {
          let itineraries = await itinerary.find({itinerary : query.itinerary}).populate('user', {name:1})
          // .populate('itinerary', {city:1, country:1})

          if (itineraries) {
              res.status(200).json({
                  message: "you get itineraries from city",
                  response: itineraries,
                  success: true
              })

          }else {
              res.status(404).json({
                  message: "could't find itineraries"
              })
          }
      }catch (error) {
          console.log(error);
          res.status(400).json({
              message: "error",
              success: false
          })
      }

  },

  updateItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      let ItineraryUpdate = await itinerary.findOneAndUpdate({ _id: id }, req.body);
      if (ItineraryUpdate) {
        res.status(200).json({
          message: "you have update the itinerary",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "the itinerary to update was not found",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "error",
        success: false,
      });
    }
  },

  destroyItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      let itineraryDestroy = await itinerary.findOneAndDelete({ _id: id });
      if (itineraryDestroy) {
        res.status(200).json({
          message: "you have delete the itinerary",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "the itinerary to delete was not found",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "error",
        success: false,
      });
    }
  },
};

module.exports = itineraryController;