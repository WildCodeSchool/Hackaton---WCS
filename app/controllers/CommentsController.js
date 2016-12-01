'use strict'

let Controller = require('./Controller')
const COMMENT = require('../models/comments')
const PROJECT = require('../models/projects')


class CommentsController extends Controller {
    constructor() {
        super(COMMENT)
    }

    find(req, res, next) {
        this.model.find(req.query).populate({
            path: 'projects',
            populate: ({
                path: 'student'
            })
        }).exec((err, document) => {
            if (err) next(err)
            else res.json(document)
        })
    }


    // create(req, res, next) {
    //     let comment = req.body.comment
    //     delete req.body.comment
    //     this.model.create(req.body, (err, project) => {
    //         if (err) next(err)
    //         else {
    //
    //             project.student = []
    //             for (let i = 0; i < student.split(',').length; i++) {
    //                 let element = student.split(',')[i]
    //
    //                 STUDENTS.findOne({
    //                     name: element
    //                 }, (err, document) => {
    //                     if (!document) {
    //
    //                         console.log("*** CREATE " + element + "***")
    //
    //                         document = new STUDENTS()
    //                         document.name = element
    //                         document.save()
    //
    //                     }
    //                     project.student.push(document.id)
    //                     if (i == student.split(',').length - 1) {
    //                         console.log(project.student)
    //                         project.save()
    //                     }
    //
    //                 })
    //             }
    //
    //             res.json(project)
    //
    //         }
    //     })
    // }
    //


}
module.exports = CommentsController
