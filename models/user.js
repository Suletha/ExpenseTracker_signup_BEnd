const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../util/database');

const User = sequelize.define('ET_usersignup', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User