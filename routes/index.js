const express = require ('express');
const routes = express.Router();
const proyectosController = require('../controllers/proyectosController');

module.exports = function () {
    routes.get('/', proyectosController.proyectosHome);
    
    routes.get ('/nosotros', proyectosController.proyectosNosotros );

    return routes;
}