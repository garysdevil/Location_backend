const knex = require('./knex');
// insert into aa (a) value ('aa', select b from bb);
const add = async obj => {
    // await knex.raw(`insert into prey ("hunterId", "ip", "device", "ua") values ((select id from hunter where id = 1),"${ip}","${device}","${ua}")`);
    const id = await knex('prey').insert(obj).returning('id');
    return id;
};

const get = async columns => {
    let all;
    if (columns) {
        all = await knex.select(columns).table('prey');
    } else {
        all = await knex.select('*').table('prey');
    }
    return all;
};

module.exports = {
    add,
    get,
};
