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

    gender: {
        type: Sequelize.ENUM,
        values: ['MALE', 'FEMALE'],
        allowNull: false
    },

    healthStatus: {
        type: Sequelize.STRING,
    },

    adoptionStatus: {
        type: Sequelize.STRING,
    },

    isNeutered: {
        type: Sequelize.BOOLEAN,
    },

    isVaccinated: {
        type: Sequelize.BOOLEAN,
    },

    arrivalDate: {
        type: Sequelize.DATE,
    },

    description: {
        type: Sequelize.TEXT,
    },

    image: {
        type: Sequelize.STRING,
        allowNull: false
    },

    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },

    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },

}, {
    tableName: 'animals',
});

module.exports = Animal;