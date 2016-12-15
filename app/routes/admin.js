/* ----------- USERS ROUTER -------------- */
'use strict'
let AdminController = require('../controllers/AdminController')
let auth = require('../middlewares/authorization')

module.exports = (app) => {

    let adminCtrl = new AdminController()

    app.post('/login', auth.connect)

}
