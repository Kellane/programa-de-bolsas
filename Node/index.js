const customExpress = require('./config/customExpress')
const connection = require('./infraestrutura/connection')
const Table = require('./infraestrutura/table')

connection.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Conectado com sucesso!")
        Table.init(connection)
        const app = customExpress()
        
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})