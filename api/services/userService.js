var User = require('../models/userModel')
var knex=require('../../knexfile.js');

exports.getUsers = async function (query){
    try {
        var users = knex('users').select('*');
        return users;
    } catch (e) {
        throw Error('service de hataya dusuyor get all')
    }
}
exports.getById =async function (knex, id) {
    return knex("users")
      .select("*")
      .where("id", id)
      .first();
  }
/*
exports.ById= async function(query,id){
    try{
        return db('users')
      .select("*")   
      .where({"id": id});
    }catch (e) {
        throw Error('service de hataya dusuyor get id')
    } */
