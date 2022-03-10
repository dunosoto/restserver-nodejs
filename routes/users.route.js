const { Router } = require('express');
const { getUser, putUser, postUser, deleteUser } = require('../controllers/users.controller');

const router = Router();

router.get('/', getUser);

router.post('/', postUser);

router.put('/:id', putUser);

router.delete('/', deleteUser);

module.exports = router;