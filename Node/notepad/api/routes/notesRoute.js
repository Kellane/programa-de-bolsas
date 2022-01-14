const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const router = Router()

router.get('/api/project', NotesController.getAllNotes) 
router.get('/api/project/:id', NotesController.getNotesById)
router.post('/pessoas', NotesController.criateNewNote)
router.put('/pessoas/:id', NotesController.editNote)
router.delete('/pessoas/:id', NotesController.deleteNote)

module.exports = router