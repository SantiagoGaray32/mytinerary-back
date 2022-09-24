const passport = require("passport")
const passportJwt = require("passport-jwt")

const {KEY_JWT} = process.env
const User = require('../models/user')

passport.use(
    new passportJwt.Strategy(
        {
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: KEY_JWT
    },
    async (jwt_payload,done) => {
         console.log("PASSPORT",jwt_payload);
        try{
            let user = await User.findOne({_id:jwt_payload.id})

            if (user){
                user = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    photo: user.photo,
                    country: user.country
                }
                return done(null, user) // si tiene exito con la autenticacion se envia al controlador los datos del objeto user
            } else{
                return done(null, false)
            }
        }catch (error) {
            console.log(error);
            return done(error,false)
        }

    }

)
)
module.exports = passport