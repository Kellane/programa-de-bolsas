module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota de atendimentos GET'))

    app.post('/atendimentos', (req, res) => {
        
        res.send('Realizando um POST')
    })
}

