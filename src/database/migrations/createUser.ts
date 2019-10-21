import * as Knex from "knex";
import dbConfig from '../dbConfig';

const UserJSON = dbConfig.tables.user;

exports.up = (knex: Knex) => {
    return knex.schema.createTable(UserJSON.name, (table) => {
        table.increments().unique().primary().unsigned();
        table.string(UserJSON.params.firstName).notNullable();
        table.string(UserJSON.params.lastName).notNullable();
        table.string(UserJSON.params.email).notNullable().unique();
        table.string(UserJSON.params.password).notNullable();
        table.integer(UserJSON.params.userRole).unsigned().notNullable();
        table.boolean(UserJSON.params.isActive).notNullable().defaultTo(true);
        table.boolean(UserJSON.params.isRemoved).notNullable().defaultTo(false);
        table.timestamp(dbConfig.timestamps.created).defaultTo(knex.fn.now());
        table.timestamp(dbConfig.timestamps.modified).defaultTo(knex.fn.now());
    });
};

exports.down = (knex: Knex) => {
    return knex.schema.dropTableIfExists(UserJSON.name);
};
