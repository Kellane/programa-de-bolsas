const express = require('express');
const app = express();

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager')
})

const port = 3000

app.listen(port, console.log(`Servidor rodando na porta ${port}`))
