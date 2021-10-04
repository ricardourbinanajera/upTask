const express = require('express');
const routes = require('./routes/index');
const path = require('path');

//Crear la cconexion a la BD
const db = require('./config/db');

//Importamos el modelo de la BD
require('./models/Proyectos');

db.sync()
.then (()=> console.log('Conectado al Server'))
.catch(error => console.log(error));


//crear una app de xpress
const app = express();

//Donde cargar los archivos estaticos de css y Js
app.use(express.static('public'));

//habilitar Pug
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname,'./views'));

//Habilitar body parse para leer datos de formularios
app.use(express.urlencoded({
    extended: true
  }));

app.use(express.json());

//Agregamos el archivo de rutas
app.use('/', routes());

app.listen(3000);
