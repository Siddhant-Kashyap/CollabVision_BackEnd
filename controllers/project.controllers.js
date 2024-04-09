const projectService = require('../services/project.services');

async function createProject(req, res) {
    try {
        const projectData = req.body;
        const project = await projectService.createProject(projectData);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getProjectById(req, res) {
    try {
        const projectId = req.params.projectId;
        const project = await projectService.getProjectById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllProjects(req, res) {
    try {
        const projects = await projectService.getAllProjects();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllProjectsOfUser(req, res) {
    try {
        const userId = req.params.userId;
        const projects = await projectService.getAllProjectsOfUser(userId);
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateProject(req, res) {
    try {
        const projectId = req.params.projectId;
        const updatedProject = req.body;
        const project = await projectService.updateProject(projectId, updatedProject);
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteProject(req, res) {
    try {
        const projectId = req.params.projectId;
        const result = await projectService.deleteProject(projectId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
