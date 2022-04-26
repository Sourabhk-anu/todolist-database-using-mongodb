const express = require('express');
const router = express.Router();
const {verifyToken} = require('../auth')

const {register, login, profile} = require('../controllers/userController')

router.post('/register', register)

router.post('/login', login)

router.get('/profile', verifyToken, profile)

module.exports = router;