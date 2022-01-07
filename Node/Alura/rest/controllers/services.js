const Service = require('../models/service')
const services = require('../repositories/services')


module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Service.list()
            .then(results => res.status(200).json(results))
            .catch(error => res.status(400),json(error))
    })

    app.post('/atendimentos', (req, res) => {
        const service = req.body

        Service.add(service, res)
            .then( createdService => 
                res.status(201).json(createdService)
            )
            .catch(error => res.status(400).json(error))
    })

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Service.searchById(id, res);
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
    
        Service.edit(id, values, res)
            .then(editService => 
                res.status(200).json(editService, id)
            )
            .catch(error => res.status(400).json(error))
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Service.delete(id, res)
            .then( deletedService => 
                res.status(200).json(id)
            )
            .catch(error => res.status(400).json(error))
    })
}

