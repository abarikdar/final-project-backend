const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

    description: {
        type: Sequelize.TEXT,
    },

    priority: {
        type: Sequelize.STRING,
    },

    dueDate: {
        type: Sequelize.DATE,
    },

    status: {
        type: Sequelize.STRING,
    },

    assignedTo: {
        type: Sequelize.STRING,
    },

    animalID: {
        type: Sequelize.INTEGER,
    },
    

});

module.exports = Task;