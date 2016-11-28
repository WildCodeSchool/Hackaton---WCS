'use strict'

let AuthorsController = require('../controllers/AuthorsController')

module.exports = (app) => {

    let ctrl = new AuthorsController()

    app.get('/authors', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/authors/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/authors', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/authors/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/authors/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })

}
