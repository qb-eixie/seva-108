const ex = require("express");
const app = ex();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
})

app.get('/o', (req, res) => {
    res.sendFile(__dirname + '/front/o.html');
})

app.listen(3000);
