const express = require('express');
const router = express.Router();
const {login, getHomepage, forgotPw} = require('../controllers/homeController');
router.get('/',getHomepage);
router.get('/user',login);
router.get('/trang',forgotPw)

module.exports = router