const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })
 
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
};