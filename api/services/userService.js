var User = require('../models/userModel')
var knex=require('../../knexfile.js');

exports.getUsers = async function (query){
    try {
        var users = knex('users').select('*');
        return users;
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
}