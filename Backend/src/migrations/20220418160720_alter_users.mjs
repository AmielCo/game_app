export function up(knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("confirm_password").notNull();
  });
}
export function down(knex) {
  return knex.schema.dropTable("users");
}
