const Service = require('../models/service')


module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos GET'))

    app.post('/atendimentos', (req, res) => {
        const service = req.body

        Service.add(service)
        res.send('Realizando um POST')
    })
}

