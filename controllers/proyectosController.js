exports.proyectosHome = (req,res) => {
        res.render("index",{
            nombrePagina: 'index'
        });
    }

    exports.proyectosNosotros = (req,res) =>{
        res.render("nosotros",{
            nombrePagina: 'nosotros'
        });
    }