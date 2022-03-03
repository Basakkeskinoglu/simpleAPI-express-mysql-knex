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
exports.updateUser=async function (knex, id, userFields) {
    return knex("users")
      .where({ id })
      .update(userFields);
  }
exports.deleteUser=async function(knex, id) {
    return knex("users")
      .where({ id })
      .delete();
  }
exports.createUser=async function(knex, newUser){
    return knex
      .insert(newUser)
      .into("users")
      .returning("*")
      .then(rows => {
        return rows[0];
      })
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
