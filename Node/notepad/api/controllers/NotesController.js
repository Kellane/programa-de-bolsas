const database = require('../models')

class NotesController {

    //Lista todas as notas
    static async getAllNotes( req, res) {
        try {
            const allNotes = await database.Notes.findAll()
            return res.status(200).json(allNotes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NotesController