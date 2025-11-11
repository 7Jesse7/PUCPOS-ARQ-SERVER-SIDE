const express = require('express');
const router = express.Router();
const taskModel = require('../models/task');

router.get('/tasks', (req, res) => {
  const tasks = taskModel.getAllTasks();
  res.render('task_list', { tasks });
});

router.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: Date.now(),
    title,
    description,
    completed: false,
    created_at: new Date(),
  };
  taskModel.addTask(newTask);
  res.redirect('/tasks');
});

router.post('/tasks/:id/complete', (req, res) => {
  const id = parseInt(req.params.id);
  taskModel.markAsCompleted(id);
  res.redirect('/tasks');
});

module.exports = router;