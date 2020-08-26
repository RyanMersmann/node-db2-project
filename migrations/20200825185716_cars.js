
exports.up = async function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments('id');
        table.string('VIN').notNullable();
        table.string('Make').notNullable();
        table.string('Model').notNullable().index();
        table.integer('Mileage');
        table.string('Transmission');
        table.string('Title');

    });
};

exports.down = async function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

