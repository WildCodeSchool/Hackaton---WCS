'use strict'

let BlogsController = require('../controllers/BlogsController')

module.exports = (app) => {

    let ctrl = new BlogsController()

    app.get('/blogs', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/blogs/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/blogs', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/blogs/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/blogs/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })

}
