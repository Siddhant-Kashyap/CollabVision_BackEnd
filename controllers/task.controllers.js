const taskServices = require('../services/task.services');

async function createTask(req, res, next) {
    try {
        const taskData = req.body;
        const task = await taskServices.createTask(taskData);
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
}

async function getTaskById(req, res, next) {
    try {
        const taskId = req.params.taskId;
        const task = await taskServices.getTaskById(taskId);
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
}

async function getAllTaskOfUser(req, res, next) {
    try {
        const userId = req.params.userId;
        const tasks = await taskServices.getAllTaskOfUser(userId);
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
}
async function getAllTaskOfProject(req, res, next) {
    try {
        const projectId = req.params.id;
        const tasks = await taskServices.getAllTaskOfProject(projectId);
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
}

async function updatedTask(req, res, next) {
    try {
        const taskId = req.params.taskId;
        const updatedTaskData = req.body;
        const updatedTask = await taskServices.updateTask(taskId, updatedTaskData);
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
}

async function deleteTask(req, res, next) {
    try {
        const taskId = req.params.taskId;
        await taskServices.deleteTask(taskId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTask,
    getTaskById,
    getAllTaskOfUser,
    updatedTask,
    deleteTask,
    getAllTaskOfProject
};
