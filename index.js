const mongoose = require("mongoose"); 
const ex = require("express");
const app = ex();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
 
app.post('/', (req, res) => {
    console.log(req);
    res.send("[v]POST-REQUEST");
});

app.listen(3000);
