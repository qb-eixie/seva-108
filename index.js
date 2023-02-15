const ex = require("express");
const app = ex();


app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(3000);
