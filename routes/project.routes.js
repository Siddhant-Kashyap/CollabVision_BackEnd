const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controllers');

router.post('/create', projectController.createProject);
router.get('/:projectId', projectController.getProjectById);
router.get('/user/:userId', projectController.getAllProjectsOfUser);
router.get('/', projectController.getAllProjects); // Get all projects
router.put('/:projectId', projectController.updateProject);
router.delete('/:projectId', projectController.deleteProject);

module.exports = router;
