const express = require('express');
const router = express.Router();
const {addUser, getHomepage, postAddNewUser, forgotPw} = require('../controllers/homeController');
router.get('/',getHomepage);
router.get('/adduser',addUser);
router.get('/trang',forgotPw);
router.post('/create-user',postAddNewUser);

module.exports = router