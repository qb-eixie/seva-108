const mongoose = require("mongoose"); 
const ex = require("express");
const app = ex();
 
app.post('/', (req, res) => {
    console.log(req);
    res.send("[v]POST-REQUEST");
});

app.listen(3000);
