const Project = require('../models/project.model');

async function createProject(projectData) {
    try {
        const project = new Project(projectData);
        return await project.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create project");
    }
}

async function getProjectById(id) {
    try {
        const project = await Project.findById(id);
        return project;
    } catch (error) {
        throw new Error("Failed to fetch the project by id");
    }
}

async function getAllProjects() {
    try {
        const projects = await Project.find();
        return projects;
    } catch (error) {
        throw new Error("Failed to fetch all projects");
    }
}

async function getAllProjectsOfUser(userId) {
    try {
        const projects = await Project.find({ createdBy: userId });
        return projects;
    } catch (error) {
        throw new Error("Failed to fetch projects of user");
    }
}

async function updateProject(projectId, updatedProject) {
    try {
        const project = await Project.findByIdAndUpdate(projectId, updatedProject, { new: true });
        return project;
    } catch (error) {
        throw new Error('Failed to update project');
    }
}

async function deleteProject(projectId) {
    try {
        await Project.findByIdAndDelete(projectId);
        return { message: 'Project deleted successfully' };
    } catch (error) {
        throw new Error('Failed to delete project');
    }
}

module.exports = {
    createProject,
    getProjectById,
    getAllProjects,
    getAllProjectsOfUser,
    updateProject,
    deleteProject
};
