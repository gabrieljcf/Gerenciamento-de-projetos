async function up(knex) {
    return knex.schema.createTable('projects', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
    })
}

async function down(knex) {
    return knex.schema.dropTable('projects');
}

module.exports = { up, down };