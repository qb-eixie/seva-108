const ex = require("express");
const app = ex();


app.get('/', (req, res) => {
    res.send('hare Krishna, hare Ram.');
})

app.listen(3000);
