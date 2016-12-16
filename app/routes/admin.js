/* ----------- USERS ROUTER -------------- */
'use strict'
let AdminsController = require('../controllers/AdminsController')
let auth = require('../middlewares/authorization')

module.exports = (app) => {

  let AdminsCtrl = new AdminsController

    app.post('/admin', AdminsCtrl.connect)

}
