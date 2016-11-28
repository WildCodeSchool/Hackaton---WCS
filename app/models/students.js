'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    avatar:{
      type: []
    },
    github: {
        type: String
    },
    description: {
        type: String
    },
    city: {
        type: String
    },
    techno: {
        type: String
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]

}))
