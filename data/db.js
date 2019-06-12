const knex = require('knex');

const knexConfig = require('../knexfile').development;
const db = knex(knexConfig);

const getUsers = () => {
    return db('users');
}

const addUser = (user) => {
    const result = db('users').insert(user);

    return result;
}

module.exports = {
    getUsers,
    addUser
}