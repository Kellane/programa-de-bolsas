const database = require('../models')

class NotesController {

    //Lista todas as notas
    static async getAllNotes( req, res) {
        try {
            const allNotes = await database.Notes.findAll()
            return res.status(200).json(allNotes)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //Lista notas por id
    static async getNotesById (req, res) {
        const {id} = req.params
        try {
            const note = await database.Notes.findOne({where: {id: Number(id)}})
            return res.status(200).json(note)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //Cria um bloco de nota novo
    static async criateNewNote(req, res) {
        const newNote = req.body
        try {
            const createdNote = await database.Notes.create(newNote)
            return res.status(201).json(createdNote)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //Edita nota
    static async editNote(req, res) {
        const { id } = req.params
        const newEditedNote = res.body

        try {
            await database.Notes.update(newEditedNote, {where: {id: Number(id)}})
            const editedNote = database.Notes.findOne({where: {id: Number(id)}})
            return res.status(200).json(editedNote)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    //Deleta nota 
    static async deleteNote(req, res) {
        const {id} = req.params
        
        try {
            await database.Notes.destroy({where: {id: Number(id)}})
            return res.status(204).json({mensagem: 'Nota apagada'})
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
}

module.exports = NotesController