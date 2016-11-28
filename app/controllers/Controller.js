'use strict'

class Controller {

  constructor(model) {
    this.model = model
  }

  find(req,res, next){
    this.model.find(req.query, (err, documents)=>{
      if(err) next(err)
      else res.json(documents)
    })
  }

  findById(req,res, next){
    this.model.findById(req.params.id, (err, document)=>{
      if (err) next(err)
      else res.json(document)
    })
  }

  create(req,res,next){
    this.model.create(req.body, (err, blog)=>{
      if(err) next(err)
      else res.json(blog)
    })
  }

  update(req, res, next){
    this.model.update({
      _id: req.params.id
    }, req.body, (err, blog)=>{
      if(err) next(err)
      else res.sendStatus(200)
    })
  }

  delete(req, res, next){
    this.model.findByIdAndRemove(req.params.id, (err)=>{
      res.sendStatus(200)
    })
  }

}

module.exports = Controller
