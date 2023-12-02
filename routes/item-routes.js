const express = require('express');

const authController = require('../controllers/item-controller');

const router = express.Router();

// /users => signup
router.post('/signup', authController.signup);

// /users => login
router.get('/login',authController.login);



module.exports = router;