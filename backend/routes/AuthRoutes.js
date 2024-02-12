const express = require('express');

const UserController= require('../Controllers/authcontrollers');

const router = express.Router();

///studentController.hello();


router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = router;