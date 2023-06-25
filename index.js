
const nodemailer = require("nodemailer");
const mongoose = require("mongoose"); 
const express = require('express');
const wbm = require('wbm');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'iskconseva108@gmail.com',
      pass: 'awmo jape edmi hhpe'
    }
  });


const URI = "mongodb+srv://admin:admin@seva-108.vrzj5yt.mongodb.net/seva-108?retryWrites=true&w=majority";

mongoose.connect(URI)

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));

db.once("open", function() {
    console.log("connection successful");
})

const profile_schema = mongoose.Schema({
    _id:  Number,
    name: String,
    email: String, 
    address: String,
    // seva: String
});

const Profile = mongoose.model("Seva", profile_schema);
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', function(request, response, next) {
	response.sendFile(__dirname + "/index.html");

});


app.post('/', function(request, response, next) {
  console.log(request.body);
  const info = transporter.sendMail({
    from: 'iskconseva108@gmail.com',
    to: request.body.email, 
    subject: "Hare Krishna,", 
    text: "Your details has been succesfully submitted.\nWe will contact you shortly.", 
    html: "", 
  });
    const sevak = new Profile ({
        _id:    request.body.tel,
        name:   request.body.name,
        email:  request.body.email,
        address: request.body.Address
      });
        console.log("Mail sent: %s", info.messageId);

    sevak.save().then((result) => {
              console.log(result);       
        })
	response.send("Your Details has been submmited");
});

app.listen(3000);