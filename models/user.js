const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
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

User.beforeCreate(async (user) => {
    if (user.password) {
        const saltRounds = 10;
        try {
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
        } catch (err) {
            throw new Error('Password hashing failed');
        }
    }
});

User.beforeValidate((user) => {
    if (user.password !== user.confirmPassword) {
        throw new Error("Passwords don't match");
    }
});

module.exports = User;
