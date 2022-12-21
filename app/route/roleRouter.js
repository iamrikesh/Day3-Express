const router = require('express').Router();

const roleController = require('../controller/roleController.js');

router.get('/role', roleController.list);
router.post('/role', roleController.create);
router.delete('/role/:id', roleController.destroy);

module.exports = router;