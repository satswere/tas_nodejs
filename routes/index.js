const express = require ('express');
const routes = express.Router();

module.exports = function () {
    routes.get('/', (req,res) => {
        res.send("hola esto desde el index");
    });
    
    routes.get ('/nosotros', (req,res) =>{
     res.send ("estoy en nosotros");
    } );

    return routes;
}