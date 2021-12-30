const connection = require("../infraestrutura/connection")

class Pet {
    add(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        connection.query(query, pet, erro => {
            if(erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                res.status(200).json(pet)
            }
        })
    }
}

module.exports = new Pet()
