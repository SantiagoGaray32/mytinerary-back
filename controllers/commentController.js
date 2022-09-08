const { response } = require("express");
const City = require("../models/City");
const Comment = require("../models/comment");
const itinerary = require("../models/tinerary");


const commentController = {
    createComment: async (req, res) => {    
      try {
        await new Comment(req.body).save();
        res.status(201).json({
          message: "Comment created",
          success: true,
        });
      } catch (error) {
        res.status(400).json({
          message: `couldt create comment,  ${error}`,
          success: false,
        });
      }
    },
    all: async (req, res) => {
        try{
            let comments = await Comment.find()
            .populate('itinerary',{city:1, country:1, photo:1})
            .populate('user',{name:1, userPhoto:1})

            res.status(200).json({
                message: "you get comments",
                Response: comments,
                success: true
            })            
        } catch (error) {
            res.status(500).json()
        }
    },
    readFromCities: async (req, res) => {
        let query = {} //Id de la ciudad

        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            let comments = await Comment.find({itinerary : query.itinerary}).populate('user', {name:1})
            // .populate('itinerary', {city:1, country:1})

            if (comments) {
                res.status(200).json({
                    message: "you get comments",
                    response: comments,
                    success: true
                })

            }else {
                res.status(404).json({
                    message: "could't find comments"
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
    readFromUser: async (req, res) => {
        let query = {}

        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            let comments = await Comment.find(query).populate('user', {name:1})
            .populate('itinerary', {city:1, country:1})

            if (comments) {
                res.status(200).json({
                    message: "you get comments from user",
                    response: comments,
                    success: true
                })

            }else {
                res.status(404).json({
                    message: "could't find comments"
                })
            }
        }catch (error) {
            console.log(error);
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    } 
}
module.exports = commentController;