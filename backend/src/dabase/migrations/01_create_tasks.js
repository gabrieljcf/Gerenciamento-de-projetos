async function up(knex) {
    return knex.schema.createTable('tasks', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.integer('status').defaultTo(0).notNullable();

        table.string('project_id')
            .notNullable()
            .references('id')
            .inTable('projects');
    });
}

async function down(knex) {
    return knex.schema.dropTable('tasks');
}

module.exports = { up, down };