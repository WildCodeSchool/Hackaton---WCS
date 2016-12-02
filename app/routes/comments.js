'use strict'

let CommentsController = require('../controllers/CommentsController')

module.exports = (app) => {

    let ctrl = new CommentsController()

    app.get('/comments', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/comments/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/comments', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/comments/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/comments/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })

}
