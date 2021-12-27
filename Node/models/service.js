const connection = require('../infraestrutura/connection')
const moment = require('moment')

class Service {
    add(service) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(service.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const serviceDate = {...service, data, dataCriacao}

        connection.query(sql, serviceDate, (erro, result) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(result)
            }
        })
    }

}

module.exports = new Service