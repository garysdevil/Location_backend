const knex = require('./knex');

const add = async obj => {
    const result = await knex('hunter').insert(obj).returning('id');
    return result;
};

const get = async columns => {
    let all;
    if (columns) {
        all = await knex.select(columns).table('hunter');
    } else {
        all = await knex.select().table('hunter');
    }
    return all;
};
const getIdByPublickKey = async publickKey => {
    const result = await knex('hunter').select('id').where(publickKey);
    return result[0];
};
module.exports = {
    add,
    get,
    getIdByPublickKey,
};
