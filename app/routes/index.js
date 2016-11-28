'use strict'
let fs = require('fs')
let express = require('express')

module.exports = () => {
  const ROUTER = express.Router()

    fs.readdir('./app/routes', (error, files) => {

        if (error)
            throw error
        else
            files.forEach((file) => {
                // remove the file extension
                let route = file.substr(0, file.lastIndexOf('.'))
                    // do not require index.js (this file)
                if (route !== 'index') {
                    // require the controller
                    require('./' + route)(ROUTER)
                }
            })
    })
    return ROUTER

}
