const express = require('express');

const ProjectsController = require('./controllers/ProjectsController');

const routes = express.Router();

const projectsController = new ProjectsController();

routes.get('/projects', projectsController.index);
routes.post('/projects', projectsController.create);

module.exports = routes;
