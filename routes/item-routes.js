const express = require('express');

const authController = require('../controllers/item-controller');
const authenticationMW = require("../util/auth");
const router = express.Router();

// /users => signup
router.post('/signup', authController.signup);

// /users => login
router.post('/login',authController.login);



module.exports = router;