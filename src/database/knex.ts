import * as knex from 'knex';
import * as knexFile from './Knexfile';

let Knex: knex;
switch (process.env.NODE_ENV) {
    case 'test':
        Knex = knex(knexFile.test);
        break;
    default:
        Knex = knex(knexFile.development);
        break;
}

export default Knex;
