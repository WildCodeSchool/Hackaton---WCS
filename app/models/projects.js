'use strict'

let mongoose = require('mongoose')

module.exports = mongoose.model('Project', new mongoose.Schema({

  title: {
      type: String,
      unique: true
  },
  school :{
    type: String
  },
  content :{
    type: String
  },
  image:{
    type:[]
  },
  student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
  },
  techno: {
      type:String
  }
}, {
  timestamps: true
}))
