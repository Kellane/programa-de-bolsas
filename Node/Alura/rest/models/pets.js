const connection = require("../infraestrutura/connection")
const archiveUpload = require('../archives/achivesUpload')

class Pet {
    add(pet, res) {
        const query = 'INSERT INTO Pets SET ?'

        archiveUpload(pet.image, pet.name, (erro, newPath) => {
            
            if (erro) {
                res.status(400).json({ erro })
            } else {
                const newPet = {
                    name: pet.name,
                    image: pet.image
                }
                connection.query(query, newPet, erro => {
                    if (erro) {
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                            res.status(200).json(pet)

                    }
                })
            }
            
        })
    }
}

module.exports = new Pet()
