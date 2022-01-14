const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const router = Router()

router.get('/api/project', NotesController.getAllNotes) 
router.get('/api/project/:id', NotesController.getNotesById)
router.post('/api/project', NotesController.criateNewNote)
router.put('/api/project/:id', NotesController.editNote)
router.delete('api/project/:id', NotesController.deleteNote)
router.post('/api/project/:id/tasks', NotesController.createNewTask)
router.put('/api/project/:noteId/tasks/:taskId', NotesController.updateTask)
router.delete('/api/project/:noteId/tasks/:taskId', NotesController.deleteTask)

module.exports = router