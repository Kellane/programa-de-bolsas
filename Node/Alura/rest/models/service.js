const connection = require('../infraestrutura/connection')
const moment = require('moment')
const axios = require('axios')
const repositories = require('../repositories/services')

class Service {
    constructor() {
        this.dateIsValid = ({data, dataCriacao}) => moment(data).isSameOrAfter(dataCriacao)
        this.clientIsValid = (size) => size >=5

        this.valida = parameters => this.validacoes.filter( campo => {
            const { nome } = campo
            const parameters = parameters[nome]

            return !campo.valido(parameters)
        })
        
        this.validacoes = [
            {
                nome: 'data',
                valido: this.dateIsValid,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clientIsValid,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
    }

    add(service) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(service.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const parameters = {
            date: {data, dataCriacao},
            client: {size: service.cliente.length}
        }
        
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        
        if(existemErros) {
            return new Promise((resolve, reject) => reject(erros))
        } else {  
            const serviceDate = {...service, data, dataCriacao}
            
            return repositories.add(serviceDate)
                .then((result) => {
                    const id = result.insertId
                    return {...service, id}
                })
        }
    }
    
    list(res) {
        return repositories.list()
    }

    searchById(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
    
        connection.query(sql, async (erro, result) => { 
            const service = result[0];
            const cpf = service.cliente

            if(erro) { 
                res.status(400).json(erro);
            } else {
                const {data} = await axios.get(`http://localhost:8082/${cpf}`)
                service.cliente = data 
                res.status(200).json(service);
            }
    
        })
    
    }

    edit(id, values, res) {
        return repositories.edit(id, values)
    } 

    delete(id, res) {
        return repositories.delete(id)
    }
}

module.exports = new Service