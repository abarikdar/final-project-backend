const express = require('express');
const router = express.Router();
const { Task, Animal } = require('../database/models');

const ash = require('express-async-handler');

//read all animals
router.get('/', ash(async(req, res) => {
  let animals = await Animal.findAll({include: [Course]});
  res.status(200).json(animals);
}));

//read one animal by id
router.get('/:id', ash(async(req, res) => {
  let animal = await Animal.findByPk(req.params.id, {include: [Course]});
  res.status(200).json(animal);
}));

//delete animal
router.delete('/:id', ash(async(req, res) => {
  await Animal.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json("Animal deleted");
}));

//create animal
router.post('/', ash(async(req, res) => {
  let newAnimal = await Animal.create(req.body);
  res.status(200).json(newAnimal);
}));

//update animal
router.put('/:id', ash(async(req, res) => {
  await Animal.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  let animal = await Animal.findByPk(req.params.id, {include: [Task]});
  res.status(201).json(animal);
}))

module.exports = router;