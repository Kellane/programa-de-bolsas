const fs = require('fs')
fs.createReadStream('./assets/arya.jpg', (erro, buffer) => {
    console.log("A imagem foi carregada")
    console.log(buffer)
})
