// router
const express = require('express')
const router = express.Router()
const {getPeople, createPerson, createPersonPostman, updatePerson,deletePerson
} = require('../controllers/people')

router.get('/', getPeople )


//sending through JS
router.post('/',createPerson)


//testing with postman updated  -- adding neew name to the existing names
router.post('/postman', createPersonPostman)

//put method
router.put('/:id', updatePerson)

//delete
router.delete('/:id', deletePerson)

module.exports = router