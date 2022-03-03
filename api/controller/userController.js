var UserService = require('../services/userService')    

exports.getUsers = async function (req, res, next) {
    try {
        var users = await UserService.getUsers({})
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.getUserByID=async function(req,res,next){
    try{ const db=require('../../knexfile.js');
        UserService.getById(db, req.params.id).then(data => {
        res.send(data)});
    }catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.updatedUser=async function(req,res,next){
    try{ const db=require('../../knexfile.js');
    console.log("controllera giriyor");
        UserService.updateUser(db, req.params.id, req.body).then(() => {
      res.status(204).end();
    });
    }catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}