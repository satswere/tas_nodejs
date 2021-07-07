exports.proyectosHome = (req,res) => {
        res.render("index");
    }

    exports.proyectosNosotros = (req,res) =>{
        res.send("ahora desde nostros pero desde el controlador tambien");
    }