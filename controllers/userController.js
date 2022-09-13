const User = require("../models/user");
const crypto = require('crypto')
const bcryptjs = require('bcryptjs'); // este es un recurso de node.js para hashear la contraseñar (ocultar)
const sendMail = require('./sendMail')

const authController = {
    signUp: async (req, res) => {
      let {
        name,
        lastName,
        photo,
        email,
        password,
        country,
        role,
        from, // el from tiene que venir desde el front-end para avisarle al metodo desde donde se crea el usuario. 
      } = req.body
      try {
          let user = await User.findOne({email})
          if(!user){
            let logged = false 
            let verification = false 
            let code = crypto.randomBytes(15).toString('hex')
            if (from==='form'){// si la data viene del formulario de registro
              password = bcryptjs.hashSync(password,10)
              user = await new User({name, lastName, photo, email, password: [password],country, role,from: [from], logged, code, verification}).save()
              sendMail(email,code)
              res.status(201).json({
                message: "user signed up from form",
                success: true
              })
            }else {// si viene de las redes sociales (cualquier red social)
              password = bcryptjs.hashSync(password,10)
              verification = true
              user = await new User({name, lastName, photo, email, password: [password],country, role, from: [from], logged, code, verification}).save()
             // no hace falta el mail de verificacion,
              res.status(201).json({
                message: "user signed up from " +from,
                success: true
            })
          }
      } else { // si el usuario si existe
        if(user.from.includes(from)){ // si la propiedad from del usuario (que es un array) incluye el valor 
          res.status(200).json({ //200 a estudiar/confirmar con google
            message: "user already exists",
            succes: false
          })

        } else { 
           user.from.push(from)
           user.verified = true 
           user.password.push(bcryptjs.hashSync(password,10))
           await user.save()
           res.status(201).json({
            message: "user signed up from" +" " +from,
            success: true
           })
        }
      }
      }catch(error){
        console.log(error);
        res.status(400).json({
          message: `couldt signed up,  ${error}`,
          success: false,
        })

    }
},
verifyMail: async (req, res) => {
  const {code} = req.params
  try {
    let user = await User.findOne({code})
  if (user) {
    user.verification = true
    await user.save()
    res.status(200).redirect('https://www.google.com') // aca tiene que ir la pagina de logeo cuando nuestro servidor este hosteado.
  } else {
    res.status(404).json({
      message: "email has not account yet",
      success: false
    })
  }

  } catch(error){
    console.log(error)
    res.status(400).json({
      message: "could't verify account",
      success:  false
    })

  }
},

    // signIn: async () => {},

    // signOut: async () => {},
}
module.exports = authController;

