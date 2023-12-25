const express = require('express');
const router = express.Router();
const { addUser, getHomepage, postAddNewUser, editUser, postUpdateUser, deleteUser } = require('../controllers/homeController');
router.get('/', getHomepage);
router.get('/adduser', addUser);
router.post('/createUser', postAddNewUser);
router.get('/update/:id', editUser);
router.post('/updateUser', postUpdateUser)
router.post('/delete/:id', deleteUser);

module.exports = router