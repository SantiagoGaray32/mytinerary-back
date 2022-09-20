const City = require("../models/City");
const Joi = require("joi")

const validator = Joi.object({ // investigar los mensajes segun la propiedad que apliquemos
    "city":Joi.string().min(4).max(30)
    .messages({"string":"INVALID_NAME_CITY"}),
    "country":Joi.string()
    .messages({"string.":"INVALID_NAME_COUNTRY"}),
    "photo" :Joi.string().uri()
    .messages({"string.uri":"INVALID_URL"}),
    "population":Joi.number().integer().min(1000).max(100000000)
    .messages({"number":"INVALID_NUMBER-LENGTH"}), 
    "foundation": Joi.number().min(1000).max(2000).messages({"date":"INVALID_DATE"})
})

const cityController = {
  create: async (req, res) => {
    console.log(req.body);

    try {
      let result = await validator.validateAsync(req.body)

      console.log(result);

      let city = await new City(req.body).save();
      res.status(201).json({
        message: "city created",
        response: city._id,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },
  read: async (req, res) => {
    const { id } = req.params;
    console.log("READ BY ID", id);
    try {
      let city = await City.findOne({ _id: id });
      if (city) {
        res.status(200).json({
          message: "you get one city",
          response: city,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "could't find city",
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

  all: async (req, res) => {
    let cities;
    let query = {};

    console.log("ALL QUERY =>", req.query);

    if (req.query.city) {
      query.city = req.query.city;
    }
    if (req.query.country) {
      query.country = req.query.country;
    }
    if (req.query.foundation) {
      query.foundation = req.query.foundation;
    }
    if (req.query.population) {
      query.population = req.query.population;
    }

    if (req.query.type) {
      const regexp = new RegExp("^" + req.query.name, "i"); // con la i le decimos que sea insensitive al stirng
      if (req.query.type === "city") {
        query.city = regexp;
      } else {
        query.country = regexp;
      }
    }

    try {
      cities = await City.find(query);

      res.json(cities);
    } catch (error) {
      console.log(err);
      res.status(500).json;
    }
  },

  updateCity: async (req, res) => {
    const { id } = req.params;
    try {
      let cityUpdate = await City.findOneAndUpdate({ _id: id }, req.body);
      // let update = req.body
      if (cityUpdate) {
        res.status(200).json({
          message: "you have update the city",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "the city to update was not found",
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

  destroy: async (req, res) => {
    const { id } = req.params;
    try {
      let cityDestroy = await City.findOneAndDelete({ _id: id });
      if (cityDestroy) {
        res.status(200).json({
          message: "you have delete the city",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "the city to delete was not found",
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

module.exports = cityController;
