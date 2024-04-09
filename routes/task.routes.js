const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controllers');

router.post('/create', taskController.createTask);
router.get('/task/:taskId', taskController.getTaskById);
router.get('/:userId', taskController.getAllTaskOfUser);
router.get('/gettasks/:id', taskController.getAllTaskOfProject);
router.put('/:taskId', taskController.updatedTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
