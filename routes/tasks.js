const express = require("express");
const router = express.Router();
const { Task, Animal } = require("../database/models");

const ash = require("express-async-handler");

//read all task
router.get("/", ash(async (req, res) => {
  let tasks = await Task.findAll({ include: Animal });
  res.status(200).json(tasks);
}));

//read one task by id
router.get("/:id", ash(async (req, res) => {
  let task = await Task.findByPk(req.params.id, { include: [Animal] });
  res.status(200).json(task);
}));

//create new task
router.post("/", function (req, res, next) {
  Task.create(req.body)
    .then((createdTask) => res.status(200).json(createdTask))
    .catch((err) => next(err));
});

//delete task
router.delete("/:id", function (req, res, next) {
  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.status(200).json("Deleted a task!"))
    .catch((err) => next(err));
});

//update task
router.put("/:id", ash(async (req, res) => {
  await Task.update(req.body, { where: { id: req.params.id } });
  let task = await Task.findByPk(req.params.id, { include: [Animal] });
  res.status(201).json(task);
}));

module.exports = router;
