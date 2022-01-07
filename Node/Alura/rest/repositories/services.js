const query = require('../infraestrutura/database/queries')

class Service {
    add(service) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, service)
    }

    list() {
        const sql = 'SELECT * FROM Atendimentos'
        return query(sql)
    }

    edit(id, values) {
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
        return query(sql, id, values)
    }

    delete(id) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'
        return query(sql, id)
    }
}

module.exports = new Service() 