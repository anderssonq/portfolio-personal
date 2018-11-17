const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');



router.post('/',  (req, res, next) => {
  // Website you wish to allow to connect

  let name = req.body.name
  , email = req.body.email
  , message = req.body.message
  , content = `name: ${name} \n email: ${email} \n message: ${message} `,
    xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'anderssonq@gmail.com',
    clientId: '19726075898-f01nf3n7ashjm9f7hicussn645e2t3k0.apps.googleusercontent.com',
    clientSecret: 'Y4mQVOXspQNdGUXXorgaevVp',
    refreshToken: '1/YEcVvHZkvYw47_T5e5acy5lKxG-SqkaLEcFcmD0lQF8',
    accessToken: 'ya29.GlsSBjFZTFpcDkkBknVVwb4dWs_pLKFkj_pG52atMdAMRoCmTWv15jOlGdeZqzWwfyumphNfHEfq20xuTPCwXjuxenThId8GoGa_Q9OEu11Wu4KeE1Qn12Zw7Lw7',
  },
  tls: {
    rejectUnauthorized: false
  }
});


    let mailOptions = {
      from: 'anderssonq@gmail.com', // sender address
      to: 'anderssonq@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: message, // plain text body
      html: content // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

  
   

});


module.exports = router;