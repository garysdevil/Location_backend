const knex = require('knex');
const { database } = require('./config');

module.exports = knex({
    client: 'pg',
    connection: database,
    pool: { min: 3, max: 50 },
});
