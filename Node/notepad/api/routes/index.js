const express = require('express')
const notes = require('./notesRoute')

module.exports = app => {
    app.use(express.json())
    app.use(notes)
}