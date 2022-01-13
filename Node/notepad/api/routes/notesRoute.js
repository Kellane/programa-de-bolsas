const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const router = Router()

router.get('/api/project', NotesController.getAllNotes) 

module.exports = router