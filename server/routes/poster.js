const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.poster.get);

router.get('/:id', controllers.poster.getOne);

router.post('/', auth(), controllers.poster.post);

router.put('/:id', auth(), controllers.poster.put);

router.delete('/:id', auth(), controllers.poster.delete);

module.exports = router;