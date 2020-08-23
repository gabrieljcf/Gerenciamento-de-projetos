const db = require('../dabase/connection');
const api = require('../services/api');

class ProjectsController {
    async index(request, response) {
        const repos = await db('projects').select('*');
        
        return response.json(repos);
    }

    async create(request, response) {
        const { name } = request.body;

        try {
            const { data } = await api.get(`${name}/repos`);
            data.map(async repo => {
                return await db('projects').insert({
                    id: repo.id,
                    name: repo.name
                });
            });
        } catch (error) {
            return response.status(400).json({ error: 'Repository not found' })
        }

        return response.status(201).send();
    }
}

module.exports = ProjectsController;