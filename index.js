const mongoose = require("mongoose"); 
const express = require('express');
mongoose.connect("mongodb+srv://admin:admin@seva-108.vrzj5yt.mongodb.net/seva-108?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));

db.once("open", function() {
    console.log("connection successful");
})

const profile_schema = mongoose.Schema({
    _id:  Number,
    name: String,
    email: String, 
    address: String
});

const Profile = mongoose.model("Seva", profile_schema);


const app = express();
app.use(express.urlencoded());
app.get('/', function(request, response, next) {
	response.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body> 
        <div class="container">
            <h1> Enter details for registeration</h1>
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <form method="POST" action="/">
                        <div class="fromm">
                            <label>Full Name</label> <br>
                            <input type="text" name="first_name" id="first_name" class="form-control" />
                        </div>
                        <div class="fromm">
                            <label>Phone Number</label> <br>
                            <input type="tel" name="tel" id="tel" class="form-control" />
                        </div>
                        <div class="fromm">
                            <label>Email Address</label> <br>
                            <input type="text" name="email" id="email" class="form-control" />
                        </div>
                        <div class="fromm">
                            <input type="submit" name="submit_button" class="btn" value="SUBMIT" />
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    </body>   
    <style>
        .btn {
            width: 17dvw;
            color: red;
        }
        input {
            height: 3dvw;
            width: 17dvw;
        }
    
        .fromm {
            height: 5dvw;
        }
    </style>
    </html>`
    );

});

app.post('/', function(request, response, next) {
    console.log(request.body);
    const sevak = new Profile ({
        _id:    request.body.tel,
        name:   request.body.first_name,
        email:  request.body.email,
    });

    sevak.save().then((result) => {
        console.log(result);
        console.log("sent to database.");
    })   

	response.send("Your Deatails has been submmited");
});

app.listen(3000);