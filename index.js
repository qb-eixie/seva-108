const PORT = 3030
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('[REQUEST]');
    res.send('hello, world.');
});

app.listen(PORT)