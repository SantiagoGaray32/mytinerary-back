const Users = require("../models/user");


const userController = {
    createUser: async (req, res) => {    
      try {
        await new Users(req.body).save();
        res.status(201).json({
          message: "user created",
          success: true,
        });
      } catch (error) {
        res.status(400).json({
          message: `couldt create user,  ${error}`,
          success: false,
        });
      }
    },
}
module.exports = userController;

