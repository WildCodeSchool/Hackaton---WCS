/* ----------- USERS ROUTER -------------- */
'use strict'
let auth = require('../middlewares/authorization')

module.exports = (app) => {

    app.post('/admin', auth.local)

}
