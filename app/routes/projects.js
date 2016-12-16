'use strict'

let ProjectsController = require('../controllers/ProjectsController')
let auth = require('../middlewares/authorization')

module.exports = (app) => {

    let ctrl = new ProjectsController()

    app.get('/projects', auth.user.isAuthenticate , (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/search/:title', auth.user.isAuthenticate, (req,res, next)=>{
      return ctrl.findOne(req,res, next)
    })

    app.get('/projects/:id', auth.user.isAuthenticate,(req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/projects', auth.user.isAuthenticate  ,(req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/projects/:id', auth.user.isAuthenticate  ,(req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/projects/:id', auth.user.isAuthenticate  ,(req, res, next) => {
        return ctrl.delete(req, res, next)
    })

}
