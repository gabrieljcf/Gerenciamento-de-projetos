const db = require('../dabase/connection');
const { v4: uuid } = require('uuid');

class TasksController {
    async index(request, response) {
        const { id: projectId } = request.params;
        const tasks = await db('tasks')
            .select('*')
            .where('project_id', projectId);

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
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({ error: 'Unexpected error while creating new task' });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        try {
            const result = await db('tasks').where('id', '=', id).update({ name });

            if (!result) {
                response.status(400).json({ error: 'Task not found' });
            }

            return response.status(201).send();

        } catch (error) {
            response.status(400).json({ error: 'Unexpected error while update a task' });
        }
    }

    async delete(request, response) {
        const { id } = request.params;
        console.log(id);
        try {

            const result = await db('tasks')
                .where('id', id)
                .del()

            if (!result) {
                response.status(400).json({ error: 'Task not found' });
            }

            return response.status(201).send();

        } catch (error) {
            response.status(400).json({ error: 'Unexpected error while delete a task' });
        }

    }

    async updateStatus(request, response) {
        const { id } = request.params;
        const content = { status: 1 }

        try {
            const result = await db('tasks')
                .where('id', id)
                .update(content);

            if (!result) {
                response.status(400).json({ error: 'Task not found' });
            }

            return response.status(201).send();

        } catch (error) {
            response.status(400).json({ error: 'Unexpected error while update a task' });
        }
    }
}

module.exports = TasksController;