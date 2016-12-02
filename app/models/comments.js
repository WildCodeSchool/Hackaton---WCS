'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Comment', new mongoose.Schema({

  content :{
    type: String
  },
  likes :{
    type: Number,
    default: 0
  },
  projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
  }],
  student: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
  }]
}, {
  timestamps: true
}))
