const database = require('../models')

class NotesController {

    //Lista todas as notas
    static async getAllNotes( req, res) {
        try {
            const allNotes = await database.Notes.findAll(
                {
                include: {
                    association: 'tasks',
                    attributes: [
                        "id",
                        "title",
                        "taskRelevance",
                        "completed",
                        "createdAt",
                        "updatedAt"
                    ]
                }
            }
            )
            return res.status(200).json(allNotes)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //Lista notas por id
    static async getNotesById (req, res) {
        const {id} = req.params
        try {
            const note = await database.Notes.findOne({
                where: {id: Number(id)},
                include: {
                    association: 'tasks',
                    attributes: [
                        "id",
                        "title",
                        "taskRelevance",
                        "completed",
                        "createdAt",
                        "updatedAt"
                    ]
                }
            
            })
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

    //adiciona uma nova tarefa a nota
    static async createNewTask(req, res) {
        const {id} = req.params
        const task = { ...req.body, note_id: Number(id)}
        try {
            const note = await database.Notes.findOne({where: {id: Number(id)}})
            if (note) {
                const createdTask = await database.Tasks.create(task)
                return res.status(201).json(createdTask)
            } else {
                return res.status(400).json({message: "Nota não foi encontrada!"})
            };
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    //edita uma tarefa existente
    static async updateTask(req, res) {
        const {noteId, taskId} = req.params
        const editTask = req.body
        
        try {
            await database.Tasks.update(editTask, {
                where: {
                    id: Number(taskId),
                    note_id: Number(noteId)
                }
            })
            const editedTask = await database.Tasks.findOne({where: {id: Number(taskId)}})
            return res.status(200).json(editedTask)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async deleteTask(req, res) {
        const {noteId, taskId} = req.params
        
        try {
            await database.Tasks.destroy({
                where: {
                    id: Number(taskId),
                    note_id: Number(noteId)
                }
            })
            return res.status(200).json({mensagem: 'Matricula apagada'})
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NotesController