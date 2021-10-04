const sequelize = require('sequelize');
const slug = require('slug');
const db = require('../config/db');

const Proyectos = db.define('proyectos',{
    id : {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: sequelize.STRING,
    url: sequelize.STRING
},{
    hooks: {
       beforeCreate(proyecto){
           //'Antes de que se inserte en la BD'
           const url = slug(proyecto.nombre).toLowerCase();

           proyecto.url = url;

       } 
    }
});

module.exports = Proyectos;