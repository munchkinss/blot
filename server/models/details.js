const mongoose = require('mongoose')
const Schema = mongoose.Schema

var detailsSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    profilephoto: {
        fileName: String,
        url: String,
        contentType: String,
        size: String,
        dimensions: String
    },
    age: {
        type: String
    },
    relationshipStatus: {
        type: String
    },
    telePhone: {
        type: String
    },
    job: {
        type: String
    },
    education: {
        type: String
    },
    about: {
        type: String
    }
})
var details = mongoose.model('details', detailsSchema)

module.exports = details