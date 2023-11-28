const Sequelize = require('sequelize');
const db = require('../db');

const Animal = db.define("animal", {

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    species: {
        type: Sequelize.STRING,
    },

    breed: {
        type: Sequelize.STRING,
        allowNull: false
    },

    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    healthStatus: {
        type: Sequelize.STRING,
    },

    adoptionStatus: {
        type: Sequelize.STRING,
    },

    arrivalDate: {
        type: Sequelize.DATE,
    },

    description: {
        type: Sequelize.TEXT,
    },


});

nodule.exports = Animal;