
const router = require('express').Router();

const userServices = require('./users.services');

router.get('/users', userServices.getUsers);

router.get('/users/:id', userServices.getUser);

module.exports = router;