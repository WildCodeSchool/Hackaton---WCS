/* ----------- USERS ROUTER -------------- */
'use strict'
let adminsController = require('../controllers/adminsController')
let auth = require('../middlewares/authorization')

module.exports = (app) => {

  let ctrl = new adminsController

    app.post('/admin', ctrl.connect)

}
