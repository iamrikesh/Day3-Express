const router = require('express').Router();

const userController = require('../controller/userController.js');

router.get('/user', userController.list);
router.post('/user', userController.create);
router.delete('/user/:id', userController.destroy);

module.exports = router;