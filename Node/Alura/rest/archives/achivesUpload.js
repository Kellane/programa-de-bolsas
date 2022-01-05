const fs = require('fs')
const path = require('path')


module.exports = (archivePath, archiveName, callbackCreatedImage) => {
    const validTypes = ['jpg', 'png', 'jpeg']
    const archiveType = path.extname(archivePath)
    const typeIsValid = validTypes.indexOf(archiveType.substring(1))

    if (typeIsValid) {
        const newPath = `./assets/imagens/${archiveName}${archiveType}`
        
        fs.createReadStream(archivePath)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callbackCreatedImage(false, newPath))

    } else {
        const  erro = 'Erro: Tipo do arquivo é invalido!'
        
        console.log(erro)
        callbackCreatedImage(erro)
    }

}