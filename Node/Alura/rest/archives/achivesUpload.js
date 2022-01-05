const fs = require('fs')
const path = require('path')


module.exports = (archivePath, archiveName, callbackCreatedImage) => {
    const newPath = `./assets/imagens/${archiveName}`
    const 
    fs.createReadStream(archivePath)
    .pipe(fs.createWriteStream(newPath))
    .on('finish', () => callbackCreatedImage(newPath))
}