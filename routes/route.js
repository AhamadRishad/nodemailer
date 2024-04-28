const router = require('express').Router()
require('dotenv').config()
const nodemailer = require('nodemailer');
router.get('/', (req,res) =>{
    try {
       res.status(200).send('hello dear')
    } catch (error) {
       res.status(400).send('Error: ' + error.message)
    }
   })
//   var mailOptions = {
//     from: 'aahamdrishad@gmail.com',
//     to: 'rishadahamad91@gmali.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
   router.post('/nodemailer', (req,res) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.email,
              pass: process.env.password
            }
          });
        let mailOptions = req.body;
        console.log(mailOptions);
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log(' Email sent: ' + info.response);
            }
          });
          res.status(201).send('Created Successfully')
    } catch (error) {
        res.status(400).send('Error: ' + error.message)
    }
   })

   module.exports = router ;