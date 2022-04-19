export function up(knex) {
  return knex.schema.createTable("scores", function (table) {
    table.increments("id").primary();
    table.integer("score").notNull();
    table.integer("userId").notNull();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}
export function down(knex) {
  return knex.schema.dropTable("scores");
}
