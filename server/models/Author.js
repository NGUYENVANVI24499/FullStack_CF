const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    age: {
        type: String,
        
    }
})

module.exports = mongoose.model('authors', AuthorSchema)