'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Project', new mongoose.Schema({

  title: {
      type: String,
      unique: true
  },
  content :{
    type: String
  },
  image:{
    type:String
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
  },
  PublishedAt: {
    type:String
  },
}, {
  timestamps: true
}))
