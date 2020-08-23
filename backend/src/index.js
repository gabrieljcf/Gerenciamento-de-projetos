const express = require('express');

const api = require('./services/api');

const app = express();
app.use(express.json());

app.post('/projects', async (request, response) => {
    const { name } = request.body;
    const { data } = await api.get(`${name}/repos`);

    const repos = data.map(repo => {
        return {
            id: repo.id,
            name: repo.name
        }
    });

    return response.json(repos);
});



app.listen(3333, () => {
    console.log('Server started');
});