const router = require('express').Router();

const userController = require('../controller/userController.js');
const logger2 = require('../middleware/logger2');

router.route('/')
    .get(userController.list)
    .post(userController.create);

router.delete('/:id', userController.destroy);

module.exports = router;