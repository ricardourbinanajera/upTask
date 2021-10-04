const Proyectos = require('../models/Proyectos');

exports.proyectosHome = (req, res)=>{
    res.render('Index', {
        nombrePagina : 'Titulo Pagina'
    });
}

exports.formularioProyecto = (req, res)=> {
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto'
    });
}

// uso directo de la instruccion
//exports.nuevoProyecto = (req, res)=> {

//implementando Async-Await
exports.nuevoProyecto = async (req, res)=> {
    //anviar a la consola lo que el usuario escriba
    //console.log(req.body)
    //validar que tengamos algo en el input
    const {nombre} = req.body;

    let errores =[];

    if (!nombre){
        errores.push({'texto':'Agrega un nombre al proyecto'})
    }   
    //si hay errores
    if(errores.length > 0 ){
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    }
    else{
        //No hay errores 
        //Insertar en la BD

        //Insercion directa 
        // Proyectos.create({nombre})
        //     .then(()=>console.log('Insetado Correctamente'))
        //     .catch(error=>console.log(error));

        //  Esto es remplazado por la seccion de Hooks -----------------------------

        //utilizamos slug para crear la url amigable
        // const url = slug(nombre).toLowerCase();

        // Incorporando Await y grabamos en la tabla de la BD
        const proyecto = await Proyectos.create({nombre});
        res.redirect('/');

         //Utilizacion de Hookcs   ------------------------------------------

    }
}