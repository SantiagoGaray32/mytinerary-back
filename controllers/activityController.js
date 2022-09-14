const activity = require('../models/activity')

const activityController = {

    createActivity: async (req, res) => {    
        try {
          await new activity(req.body).save();
          res.status(201).json({
            message: "activity created",
            success: true,
          });
        } catch (error) {
          res.status(400).json({
            message: `couldt create activity,  ${error}`,
            success: false,
          });
        }
      },

    readFromItinerary: async (req, res) => {
        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }
        try {
            let activities = await activity.find(query)
            if (activities) {
                res.status(200).json({
                    message: "you get activities from itinerary",
                    response: activities,
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
    }}
}
module.exports = activityController;

