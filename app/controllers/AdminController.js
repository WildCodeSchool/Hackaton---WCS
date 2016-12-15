'use strict';
let Controller = require('./Controller')
let jwt = require('jsonwebtoken')
const ENV = require('../../config/env')
const ADMIN = require('../models/admin')

class AdminController extends Controller {

    constructor() {
        super(ADMIN)
    }

    authenticate(req, res, next) {
        if (req.user) {
            let token = jwt.sign(req.user, ENV.token, {
                expiresIn: "24h"
            })
            res.redirect("/auth/callback/" + token);
        } else {
            res.send(401);
        }
    }

}

module.exports = AdminController
