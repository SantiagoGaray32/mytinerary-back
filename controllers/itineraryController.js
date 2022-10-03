const Joi = require("joi");
const itinerary = require("../models/tinerary");
const Users = require("../models/user");

const itineraryValidator = Joi.object({
  city: Joi.string().required(),
  userName: Joi.string().required(),
  itinerary: Joi.string().required(),
  price: Joi.number().required(),
  tags: Joi.array().required(),
  duration: Joi.number().integer().messages({
    "number.integer": "INVALID_NUMBER",
  }),
  likes: Joi.array().required(),
});

const itineraryController = {
  createItinerary: async (req, res) => {
    try {
      await itineraryValidator.validateAsync(req.body);
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
  readFromUserId: async (req, res) => {
    console.log("read from user id", req.params, req.query);
    let query = {};
    // Lo ideal sería que el modelo de Itinerarios tenga la referencia
    // del ObjectId del usuario, de esta forma podemos ir a buscar a la DB
    // Por user id, NOTA: Tenes que volver a cargar la data en la DB con esa referencia.
    if (req.params.userId) {
      query.userName = req.params.userId;
    }
    console.log(query);
    try {
      let itineraries = await itinerary.find(query);
      console.log(itineraries);
      // .populate('itinerary', {city:1, country:1})

      if (itineraries) {
        res.status(200).json({
          message: "you get itineraries",
          response: itineraries,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "could't find itineraries",
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
  readFromCity: async (req, res) => {
    // lee los itinerarios segun la ID que le pasemos (city)
    let query = {};
    if (req.query.city) {
      query.city = req.query.city;
    }
    if (req.query.user) {
      query.userName = req.query.user;
    }

    try {
      let itineraries = await itinerary.find(query);
      // .populate('itinerary', {city:1, country:1})

      if (itineraries) {
        res.status(200).json({
          message: "you get itineraries ",
          response: itineraries,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "could't find itineraries",
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
  updateItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      let ItineraryUpdate = await itinerary.findOneAndUpdate(
        { _id: id },
        req.body
      );
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

  likeDislike : async (req,res) => {
    let {itineraryId} = req.params;
    let {id} = req.user.id 
    console.log("user", req.body);

    try {

      let likedItinerary = await itinerary.findOne({_id: itineraryId})

      if(likedItinerary && likedItinerary.likes.includes(id)) {
        likedItinerary.likes.pull(id);
        await likedItinerary.save();
        res.status(200).json({
          message: "itinerary disliked",
          success: true,
        })
      } else if (!likedItinerary.likes.includes(id)){
        likedItinerary.likes.push(id);
        await likedItinerary.save();
        res.status(200).json({
          message: "itinerary liked",
          success: true,
        })
      } else {
        res.status(404).json({
          message: "city not found",
          success: true,
        })
      }
    }catch (error) {
      console.log(error);
      res.status(400).json({
        message: "error",
        success: false,
      })
  }
}
}

module.exports = itineraryController;
