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


}
module.exports = CommentsController
