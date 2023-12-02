const express = require('express');

const authController = require('../controllers/item-controller');

const router = express.Router();

// /users => signup
router.post('/login', authController.signup);

// /users => login
router.get('/signup',authController.login);



module.exports = router;