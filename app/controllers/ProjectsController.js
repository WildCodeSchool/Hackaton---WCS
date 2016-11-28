'use strict'

let Controller = require('./Controller') // on étend la classe
const PROJECT = require('../models/projects')

// La classe BlogsController étend controller, on peut l'étendre encore et encore et encore...

class ProjectsController extends Controller {
  constructor(){
    super(PROJECT)
  }

  find(req,res, next){
    this.model.find(req.query).populate({
      path:'student',
      populate:{ path: 'projects'}
    }).exec((err, documents)=>{
      if(err) next(err)
      else res.json(documents)
    })
  }


  findById(req,res, next){
    this.model.findById(req.params.id).populate({
      path:'student',
      populate:{ path: 'projects'}
    }).exec((err, document)=>{
      if (err) next(err)
      else res.json(document)
    })
  }

}

module.exports = ProjectsController
