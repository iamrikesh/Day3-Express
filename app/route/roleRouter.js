const router = require('express').Router();

const roleController = require('../controller/roleController.js');
const logger2 = require('../middleware/logger2');

router.route('/')
    .get(logger2, roleController.list)
    .post(roleController.create);

router.delete('/:id', roleController.destroy);

module.exports = router;