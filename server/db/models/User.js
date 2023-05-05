const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('User', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            isEmail: true,
            notEmpty: true,
            unique: true,
        },
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
    description: {
        type: Sequelize.TEXT,
        validate: {
            max: 100,
        },
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
})

module.exports = User
