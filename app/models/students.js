'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    avatar:{
      type: String
    },
    github: {
        type: String
    },
    description: {
        type: String
    },
    school: {
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
