const express = require('express');
const router = express.Router();

const tasksRouter = require('./tasks');
const animalsRouter = require('./animals');


router.use('/tasks', tasksRouter);
router.use('/animals', animalsRouter);

module.exports = router;