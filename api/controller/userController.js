var UserService = require('../services/userService');
var filterServices=require('../services/filterServices');
const db = require('../../knexfile.js');
 var   url = require('url');
 var   qs = require('query-string');


exports.getUsers = async function (req, res, next) {
    try {
        console.log(req.query);
        if (req.query!=undefined) {
            filterServices.mixfilters(req.query).then(data => {
        res.send(data)});
                
        }else{
        var users = await UserService.getUsers({})
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
        }
        
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.getUserByID=async function(req,res,next){
    try{
        UserService.getById(db, req.params.id).then(data => {
        res.send(data)});
    }catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.updatedUser=async function(req,res,next){
    try{ 
        console.log("controllera giriyor");
        UserService.updateUser(db, req.params.id, req.body).then(() => {
            res.status(204).end();
    });
    }catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.deleteUser=async function(req, res) {
    UserService.deleteUser(db, req.params.id).then(data => {
      res.status(204).end();
    });
};
exports.createUser=async function(req,res){    
    UserService.createUser(db, req.body).then(data => {
        res.send(data);
    });
};
