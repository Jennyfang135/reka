exports.up = function (knex, Promise) {
  return knex.schema.createTable('registrations', table => {
    table.increments('id')
    table.string('name')
    table.integer('user_id').references('users.id')
    table.integer('event_id').references('events.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('registrations')
}
