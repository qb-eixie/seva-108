const ex = require("express");
const app = ex();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
})

app.get('register', (req, res) => {
    res.sendFile(__dirname + '/front/register.html');
})

app.listen(3000);
