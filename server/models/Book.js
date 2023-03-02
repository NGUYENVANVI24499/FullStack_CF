const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    authorID: {
        type: String,
    }
})

module.exports = mongoose.model('books', BookSchema)