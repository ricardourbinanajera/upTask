const Sequelize = require('sequelize');

const db = new Sequelize('uptasknode', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases:false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:1000
    }
  });

  module.exports = db;