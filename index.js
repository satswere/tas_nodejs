const express = require('express');

const app = express();

app.listen(7000);

app.use('/', (req,res) => {
    res.send("hola estoy desde el puerto 7000")
})