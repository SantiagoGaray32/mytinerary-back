const { response } = require("express");
const Comment = require("../models/comment");

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
    let query = {};

    if (req.query.itinerary) {
      query.itinerary = req.query.itinerary;
    }

    try {
      let comments = await Comment.find(query)
        .populate("itinerary", { city: 1, country: 1, photo: 1 })
        .populate("user", { name: 1, userPhoto: 1 });

      res.status(200).json({
        message: "you get comments",
        response: comments,
        success: true,
      });
    } catch (error) {
      console.log("Error", error);
      res.status(500).json();
    }
  },
  readFromUser: async (req, res) => {
    let query = {};

    if (req.query.user) {
      query.user = req.query.user;
    }
    try {
      let comments = await Comment.find(query)
        .populate("user", { name: 1 })
        .populate("itinerary", { city: 1, country: 1 });

      if (comments) {
        res.status(200).json({
          message: "you get comments from user",
          response: comments,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "could't find comments",
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
  deleteComment: async (req,res) => {

    const { id } = req.params

    try{
      let myComment = await Comment.findOne({_id: id})

      if(!myComment) {
        res.status(404).json({
          message: 'Comment Not Found, cannot be Deleted',
          success:false
        })
      } else {
        let myCommentDeleted = await Comment.findByIdAndDelete(id)
        res.status(200).json({
          message: 'comment has been deleted',
          success:true
        })
      }
 
    } catch (error) {
      console.log(error)
      res.status(400).json({
        message: error.message ,
        succes: false 
      })
    }
  },

  editComment: async (req, res) => {
    const {id} = req.params

    try{
      const editComment = req.body
      let commentForEdit = await Comment.findOne({_id: id})

      if (!commentForEdit) {
        res.status(200).json({
          message: "please review your edit request",
          success:false
        })

      } else {
        const commentEdit = await Comment.findByIdAndUpdate(id, editComment)
        res.status(200).json({
          message: "Your Comment has been edited",
          success: true
        })
      }
    } catch(error){
      console.log(error);
      res.status(400).json({
        message: "error",
        success:false
      })
    }
  }
};
module.exports = commentController;
