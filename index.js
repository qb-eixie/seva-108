const ex = require("express");
const app = ex();


app.get('/', (req, res) => {
    res.send('A QB BROADCAST.');
})

app.listen(3000);
