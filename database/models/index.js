const Animal  = require('./Animal');
const Task  = require('./Task');

Task.belongsTo(Animal);
Animal.hasMany(Task);

module.exports = {
  Animal,
  Task
};