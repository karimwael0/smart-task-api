const Task = require('../models/taskModel');

// GET /api/tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

// GET /api/tasks/:id
const getTaskById = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
  if (task) res.json(task);
  else res.status(404).json({ message: 'Task not found' });
};

// POST /api/tasks
const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = new Task({
    user: req.user._id,
    title,
    description,
    dueDate,
  });
  const createdTask = await task.save();
  res.status(201).json(createdTask);
};

// PUT /api/tasks/:id
const updateTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });

  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.dueDate = dueDate || task.dueDate;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
  if (task) {
    await task.remove();
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
