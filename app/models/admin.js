'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Admin', new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    forename: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    }
}))
