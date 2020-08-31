'use strict'

const authController = {}

authController.auth = function (request, response) {
    response.status(200).json({
        ok:true,
        message : 'All is done'
    })
}

authController.login = function (request, response) {
    console.log();
    response.status(200).json({
        ok:true,
        message : 'Login successfull',
        body : request.body
    })
}

authController.sigup = function (request, response) {
    response.status(200).json({
        ok:true,
        message : 'All is done'
    })
}













module.exports = authController