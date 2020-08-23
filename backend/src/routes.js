const express = require('express');

const ProjectsController = require('./controllers/ProjectsController');
const TasksController = require('./controllers/TasksController');

const routes = express.Router();

const projectsController = new ProjectsController();
const tasksController = new TasksController();

routes.get('/projects', projectsController.index);
routes.post('/projects', projectsController.create);

routes.get('/tasks/:id', tasksController.index);
routes.post('/tasks/:id', tasksController.create);
module.exports = routes;
