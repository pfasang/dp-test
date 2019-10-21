import knex from './knex';
import * as bookshelf from 'bookshelf';

let Orm = bookshelf(knex);
Orm.plugin('visibility');
Orm.plugin('bookshelf-returning');

export default Orm;