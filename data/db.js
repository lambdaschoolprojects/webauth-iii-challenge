const knex = require('knex');

const knexConfig = require('../knexfile').development;
const db = knex(knexConfig);

const getUsers = () => {
    return db('users');
}

module.exports = {
    getUsers
}