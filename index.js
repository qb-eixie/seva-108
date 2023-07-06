
const nodemailer = require("nodemailer");
const mongoose = require("mongoose"); 
const express = require('express');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'iskconseva108@gmail.com',
      pass: 'awmo jape edmi hhpe'
    }
  });


var URI = "mongodb+srv://admin:admin@seva-108.vrzj5yt.mongodb.net/sunday-feast?retryWrites=true&w=majority";
mongoose.connect(URI)
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("connection successful");
})

const profile_schema = mongoose.Schema({
        _id: Number,
       name: String,
      email: String, 
    address: String,
       seva: String
});


const cooking = mongoose.model("Cooking", profile_schema);
const crowd_management = mongoose.model("Crowd_mangement", profile_schema);

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', function(request, response, next) {
	response.sendFile(__dirname + "/get.html");
});

app.get('/cooking', function(request, response, next) {
	response.sendFile(__dirname + "/cooking.html");
});

app.get('/data', (req, res) => {
    cooking.find({ __v: { $gte: 0 } }).exec()
        .then((doc) => {
            res.json(doc);
        })
})


app.get('/crowd_management', function(request, response, next) {
	response.sendFile(__dirname + "/crowd_manangement.html");
});

app.post('/cooking', function(request, response, next) {
  console.log(request.body);
    var info = transporter.sendMail({
    from: 'iskconseva108@gmail.com',
    to: request.body.email, 
    subject: "Hare Krishna,", 
    text: "Your details has been succesfully submitted.\nWe will contact you shortly.", 
    html: "", 
  });
    const sevak = new cooking ({
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


app.post('/crowd_management', function(request, response, next) {
  console.log(request.body);
  var info = transporter.sendMail({
    from: 'iskconseva108@gmail.com',
    to: request.body.email, 
    subject: "Hare Krishna,", 
    text: "Your details has been succesfully submitted.\nWe will contact you shortly.", 
    html: "", 
  });

  const sevak = new crowd_managementcy ({
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