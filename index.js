
const mongoose = require("mongoose"); 
const express = require('express');

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
    seva: String
});

const Profile = mongoose.model("Seva", profile_schema);


const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', function(request, response, next) {
	response.sendFile(__dirname + "/index.html");

});

app.post('/', function(request, response, next) {
    console.log(request.body);
    const sevak = new Profile ({
        _id:    request.body.tel,
        name:   request.body.name,
        email:  request.body.email,
    });

    sevak.save().then((result) => {
                console.log(result);
        })
	response.send("Your Details has been submmited");
});

app.listen(3000);