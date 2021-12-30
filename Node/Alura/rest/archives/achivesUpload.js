const fs = require('fs')
fs.createReadStream('./assets/arya.jpg')
    .pipe(fs.createWriteStream('./assets/arya.jpg'))
    .on('finish', () => console.log("A imagem foi carregada com sucesso!!'"))
