const connection = require('../infraestrutura/connection')

class Service {
    add(service) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        connection.query(sql, service, (erro, result) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(result)
            }
        })
    }

}

module.exports = new Service