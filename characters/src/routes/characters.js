const { getCharacter } = require('../controllers')

const router = require('express').Router()

router.get('/', getCharacter)
router.get('/:id')
router.put('/:id')
router.post('/')
router.delete('/:id')

module.exports = router
