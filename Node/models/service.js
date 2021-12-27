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
                    res.status(201).json(result)
                }
            })
            }
        }

}

module.exports = new Service