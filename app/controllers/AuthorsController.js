'use strict'

let Controller = require('./Controller')
const AUTHOR = require('../models/authors')

class AuthorsController extends Controller {
  constructor(){
    super(AUTHOR)
  }

  findById(req,res, next){
    this.model.findById(req.params.id).populate({
      path: 'articles',
      populate:({path: 'author', populate:{ path: 'articles'}})
      }).exec((err, document)=>{
      if (err) next(err)
      else res.json(document)
    })
  }

}
module.exports = AuthorsController
