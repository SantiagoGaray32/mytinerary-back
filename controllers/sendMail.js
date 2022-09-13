const nodemailer = require('nodemailer')
const { google } = require ('googleapis')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,USER} = process.env

const sendMail = async(mail,code) => {

    const client = new OAuth2(
      process.env.GOOGLE_ID,
      process.env.GOOGLE_SECRET,
      process.env.GOOGLE_URL  
    )

    client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: USER,
        to: mail,
        subject: 'verify mytinerary account',
        html: `<div>
                    <h1>Hi ${mail} please verify your account</h1>
                    <a href='https://localhost:4000/auth/verify/${code}'>Click to verify</a>
                </div>
        
        `
    }

    await transport.sendMail(mailOptions,(error, response) =>{
        if(error){
            console.log(error)
        } else {
            console.log('Ok');
        }
    })

}

module.exports = sendMail