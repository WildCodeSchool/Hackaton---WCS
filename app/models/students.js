'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({

    name: {
        type: String,
        unique: true
    },
    age: {
        type: Number
    },
    description: {
        type: String
    },
    avatar:{
      type: String
    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]

}))
