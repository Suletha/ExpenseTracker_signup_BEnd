const express = require('express');

const authController = require('../controllers/item-controller');

const router = express.Router();

// /users => signup
router.post('/user/signup', authController.signup);

// /users => login
router.post('/user/login',authController.login);



module.exports = router;