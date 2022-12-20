const router = require('express').Router();
const userController = require('../controller/userController.js');

router.get('/client', userController.list);
router.post('/client', userController.create);
router.delete('/client/:id', userController.destroy);

module.exports = router;