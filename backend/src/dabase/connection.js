const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'manage_project'
    }
});

module.exports = db;