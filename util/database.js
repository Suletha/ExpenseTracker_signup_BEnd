const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize=new Sequelize('node-complete','root','Krishna@2304',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports=sequelize;