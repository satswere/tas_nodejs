const express = require('express');
const routes = require('./routes');
const patch = require('path');

const app = express();

//habilitar el template engine
app.set('view engine', 'pug');

//añadir las carpetas de las vistas
app.set ('views', patch.join(__dirname, './views'));

app.use('/',routes());



app.listen(7000);