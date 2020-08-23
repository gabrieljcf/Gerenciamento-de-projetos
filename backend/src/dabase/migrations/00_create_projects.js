exports.up = async function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTable('projects');
}