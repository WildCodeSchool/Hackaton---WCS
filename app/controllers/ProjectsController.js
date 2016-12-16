'use strict'

let Controller = require('./Controller') // on étend la classe
const PROJECT = require('../models/projects')
const STUDENTS = require('../models/students')
    // La classe BlogsController étend controller, on peut l'étendre encore et encore et encore...

class ProjectsController extends Controller {
    constructor() {
        super(PROJECT)
    }

    find(req, res, next) {
        this.model.find(req.query).populate({
            path: 'student',
            populate: {
                path: 'projects'
            }
        }).populate('comments').exec((err, documents) => {
            if (err) next(err)
            else res.json(documents)
        })
    }

    findOne(req,res, next){
      let data =  new RegExp("("+req.params.title+")", "igm")
      console.log(data)
      this.model.find( { $or:[ {'title':data}, {'techno':data}]},(err,document)=>{
        if (err) next(err)
        else {
          res.json(document)
        }
      })
    }


    findById(req, res, next) {
        this.model.findById(req.params.id).populate({
            path: 'student',
            populate: {
                path: 'projects'
            }
        }).populate('comments').exec((err, document) => {
            if (err) next(err)
            else res.json(document)
        })
    }

    create(req, res, next) {
        let student = req.body.student
        delete req.body.student
        this.model.create(req.body, (err, project) => {
            if (err) next(err)
            else {

                project.student = []
                for (let i = 0; i < student.split(',').length; i++) {
                    let element = student.split(',')[i]

                    STUDENTS.findOne({
                        name: element
                    }, (err, document) => {
                        if (!document) {

                            console.log("*** CREATE " + element + "***")

                            document = new STUDENTS()
                            document.name = element
                            document.save()

                        }
                        project.student.push(document._id)
                        if (i == student.split(',').length - 1) {
                            console.log(project.student)
                            project.save()
                        }

                    })
                }

                res.json(project)

            }
        })
    }


}

module.exports = ProjectsController
