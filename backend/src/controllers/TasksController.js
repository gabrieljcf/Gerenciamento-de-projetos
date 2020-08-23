const db = require('../dabase/connection');
const { v4: uuid } = require('uuid');

class TasksController {
    async index(request, response) {
        const { id: projectId } = request.params;
        const tasks = await db('tasks').select('*').where('project_id', projectId);

        return response.json(tasks);
    }

    async create(request, response) {
        const { id: projectId } = request.params;
        const { name } = request.body;

        const task = {
            id: uuid(),
            name,
            project_id: projectId,
        };

        try {
            await db('tasks').insert(task);
            response.status(201).send();
        } catch (error) {
            response.status(400).json({ error: 'Unexpected error while creating new task' })
        }
    }
}

module.exports = TasksController;