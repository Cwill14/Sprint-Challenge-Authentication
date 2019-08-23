const db = require('../database/dbConfig.js');

module.exports = {
    add,
    getByFilter,
    getUsers
}

function add(user) {
    return db('users').insert(user);
}
function getByFilter(filter) {
    return db('users').where(filter);
}
function getUsers() {
    return db('users');
}