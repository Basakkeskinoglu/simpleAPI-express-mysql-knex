var User = require('../models/userModel')
var knex=require('../../knexfile.js');
const queryString = require('query-string');

exports.mixfilters=async function(q){
    
    return knex("users").where(q);    
        
}