const Animal  = require('./Animal');
const Task  = require('./Task');

Task.belongsTo(Animal, {
  onDelete: 'CASCADE',
});
Animal.hasMany(Task);

module.exports = {
  Animal,
  Task
};