/*
 *  User authorization routing middleware
 */
'use strict'
let jwt = require('jsonwebtoken')
const ADMIN = require('../models/admin')
const ENV = require('../../config/env')

module.exports = {

    local(req, res, next) {
        if (!req.body.email || !req.body.password) {
            res.status(400).send("Please enter your email and password")
        } else {
            ADMIN.findOne(req.body, {
                password: 0
            }, (err, user) => {
                if (err)
                    next(err)
                else if (!user)
                    res.sendStatus(403)
                else {
                    let token = jwt.sign(user, ENV.token, {
                        expiresIn: "24h"
                    })
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    })
                }
            })
        }
    }

}
