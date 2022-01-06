const Service = require('../models/service')


module.exports = app => {
    app.get('/atendimentos', res => Service.list(res))

    app.post('/atendimentos', (req, res) => {
        const service = req.body

        Service.add(service, res)
    })

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Service.searchById(id, res);
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
    
        Service.edit(id, values, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Service.delete(id, res)
    })
}

