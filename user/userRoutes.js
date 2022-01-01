const express = require('express');
const router = express.Router();
const userController = require('./userController');
const user = new userController();

//List Users 
router.get('/users', user.get); 

// Create Users 
router.post('/users', user.add);

// Delete User
router.delete('/users/:name', user.delete);

module.exports = router
