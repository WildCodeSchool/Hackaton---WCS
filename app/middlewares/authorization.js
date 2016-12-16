/*
 *  User authorization routing middleware
 */
'use strict'
let jwt = require('jsonwebtoken')
const ADMIN = require('../models/admin')
const ENV = require('../../config/env')

exports.user = {

    isAuthenticate(req, res, next) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization, ENV.token, (err, decoded) => {
                if (err)
                    return res.sendStatus(403)
                else
                    next()
            })
        } else {
            return res.sendStatus(403)
        }
    }
}
