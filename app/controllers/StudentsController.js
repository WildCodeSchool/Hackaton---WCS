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

  // create(req, res, next) {
  //     let projects = req.body.projects
  //     delete req.body.projects
  //     this.model.create(req.body, (err, student) => {
  //         if (err) next(err)
  //         else {
  //
  //             student.projects = []
  //             for (let i = 0; i < projects.length; i++) {
  //                 let element = projects[i]
  //
  //                 PROJECT.findOne({
  //                     name: element
  //                 }, (err, document) => {
  //                     if (!document) {
  //
  //                         console.log("*** CREATE " + element + "***")
  //
  //                         document = new PROJECT()
  //                         document.name = element
  //                         document.save()
  //
  //                     }
  //                     student.projects.push(document.id)
  //                     if (i == projects.length - 1) {
  //                         console.log(student.projects)
  //                         student.save()
  //                     }
  //
  //                 })
  //             }
  //
  //             res.json(student)
  //             console.log(student);
  //
  //         }
  //     })
  // }




}
module.exports = StudentsController
