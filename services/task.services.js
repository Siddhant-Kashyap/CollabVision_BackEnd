const Task = require('../models/task.model');

async function createTask(taskData) {
    try {
        const task = new Task(taskData);
        return await task.save();
    } catch (error) {
        throw new Error("Failed to create task");
    }
}

async function getTaskById(id) {
    try {
        const task = await Task.findById(id);
        return task;
    } catch (error) {
        throw new Error("Failed to fetch the task by id");
    }
}

async function getAllTaskOfUser(userId) {
    try {
        const tasks = await Task.find({ assignedTo: userId });
        return tasks;
    } catch (error) {
        throw new Error("Failed to fetch tasks of user");
    }
}
async function getAllTaskOfProject(projectId) {
    try {
        const tasks = await Task.find({ project: projectId });
        return tasks;
    } catch (error) {
        throw new Error("Failed to fetch tasks of user");
    }
}

async function updateTask(taskId, updatedTaskData) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true });
        return updatedTask;
    } catch (error) {
        throw new Error('Failed to update task');
    }
}

async function deleteTask(taskId) {
    try {
        await Task.findByIdAndDelete(taskId);
    } catch (error) {
        throw new Error('Failed to delete task');
    }
}

module.exports = {
    createTask,
    getTaskById,
    getAllTaskOfUser,
    updateTask,
    deleteTask,
    getAllTaskOfProject
};
