const connection = require('../infraestrutura/connection')
const moment = require('moment')


class Service {
    add(service, res) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(service.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = service.cliente.length >=5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {  
            const serviceDate = {...service, data, dataCriacao}

            connection.query(sql, serviceDate, (erro, result) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json({service})
                }
            })
            }
        }
    
    list(res) {
        const sql = 'SELECT * FROM Atendimentos'
        connection.query(sql, (erro, result) => {
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json(result)
            }
        })
    }

    searchById(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
    
        connection.query(sql, (erro, result) => { 
            const service = result[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(service);
            }
    
        })
    
    }

    edit(id, values, res) {
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
    
        connection.query(sql, [values, id], (erro, result) => { 
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    } 

    delete(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        connection.query(sql, id, (erro, result) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Service