const database = require('../models')

class PessoasController {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()  
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa( req, res) {
        const {id} = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa( req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
 
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async atualizaPessoa( req, res) {
        const novaInfo = req.body
        const {id} = req.params
        try {
            await database.Pessoas.update(novaInfo, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async apagaPessoa( req, res) {
        const {id} = req.params

        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: 'Pessoa apagada'})
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async pegaUmaMatricula( req, res) {
        const {estudanteId, matriculaId} = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(id),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula( req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}
        try {
            const novaPessoaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatricula)
 
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async atualizaMatricula( req, res) {
        const novaInfo = req.body
        const {estudanteId, matriculaId} = req.params
        try {
            await database.Matriculas.update(novaInfo, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({where: {id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async apagaMatricula( req, res) {
        const {estudanteId, matriculaId} = req.params

        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json({mensagem: 'Matricula apagada'})
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
}


module.exports = PessoasController