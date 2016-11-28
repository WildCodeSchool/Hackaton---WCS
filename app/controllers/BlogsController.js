'use strict'

let Controller = require('./Controller') // on étend la classe
const BLOG = require('../models/blogs')

// La classe BlogsController étend controller, on peut l'étendre encore et encore et encore...

class BlogsController extends Controller {
  constructor(){
    super(BLOG)
  }

  find(req,res, next){
    this.model.find(req.query).populate({
      path:'author',
      populate:{ path: 'articles'}
    }).exec((err, documents)=>{
      if(err) next(err)
      else res.json(documents)
    })
  }


  findById(req,res, next){
    this.model.findById(req.params.id).populate({
      path:'author',
      populate:{ path: 'articles'}
    }).exec((err, document)=>{
      if (err) next(err)
      else res.json(document)
    })
  }

}

module.exports = BlogsController
