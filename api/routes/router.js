var express = require('express');
var router = express.Router();

var UserController = require('../controller/userController');

router.get('/', UserController.getUsers);
router.get('/user/:id',UserController.getUserByID);

module.exports = router;