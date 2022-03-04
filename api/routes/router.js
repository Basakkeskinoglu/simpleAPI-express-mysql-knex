var express = require('express');
var router = express.Router();

var UserController = require('../controller/userController');

router.get('/', UserController.getUsers);
router.get('/:id',UserController.getUserByID);
router.patch('/:id',UserController.updatedUser);
router.delete('/:id',UserController.deleteUser);
router.post('/',UserController.createUser);
module.exports = router;