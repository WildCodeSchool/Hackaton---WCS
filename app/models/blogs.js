'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Blog', new mongoose.Schema({

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
      ref: 'Author'
  },
  PublishedAt: {
    type:String
  },
}, {
  timestamps: true
}))
