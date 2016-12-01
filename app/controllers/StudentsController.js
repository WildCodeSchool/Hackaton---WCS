'use strict'

let Controller = require('./Controller')
const STUDENT = require('../models/students')
const PROJECT = require('../models/projects')

class StudentsController extends Controller {
  constructor(){
    super(STUDENT)
  }

  findById(req,res, next){
    this.model.findById(req.params.id).populate({
      path: 'projects',
      populate:({path: 'student', populate:{ path: 'projects'}})
      }).exec((err, document)=>{
      if (err) next(err)
      else res.json(document)
    })
  }

}
module.exports = StudentsController
