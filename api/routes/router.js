var express = require('express');
var router = express.Router();

var UserController = require('../controller/userController');

router.get('/', UserController.getUsers)

module.exports = router;