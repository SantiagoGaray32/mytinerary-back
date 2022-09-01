const { update } = require("../models/City"); //borrar
const City = require("../models/City");

const cityController = {
  create: async (req, res) => {
    // const (city,country,photo,population,fundation) = req.body
    try {
      await new City(req.body).save();
      res.status(201).json({
        message: "city created",
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        message: `couldt create city,  ${error}`,
        success: false,
      });
    }
  },
  read: async (req, res) => {
    const { id } = req.params;
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
    console.log("ALL BODY =>", req.query);

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
      const regexp = new RegExp("^" + req.query.name);
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
