var express = require('express');
var router = express.Router();

const UserController = require('./UserController')

/* GET users listing. */

router.get('/', (req, res, next) => {
    UserController.getUsers(req, res)
});

router.get('/:_id', (req, res, next) => {
    UserController.getUserById(req, res);
});

router.post('/', (req, res) => {
    UserController.insertUser(req, res);
});

router.put('/:_id', (req, res) => {
    UserController.updateUser(req, res);
});

router.delete('/:_id', (req, res) => {
    UserController.deleteUser(req, res);
});

//modular pattern
module.exports = router;