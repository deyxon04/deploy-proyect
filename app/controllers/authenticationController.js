const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticationModel = require('../models/authenticationModel')
const authenticationController = {}

authenticationController.logIn = (request, response) => {
  const { user, password } = request.body
  authenticationModel.searchUser(user, (err, userInDb) => {
    if (err) {
      return response.status(500).json({
        ok: false,
        message: 'Ha ocurrido un error ',
        err
      })
    }
    const userLogged = userInDb[0]
    const passwordMatch = bcrypt.compareSync(password, userLogged.password)
    if (!userLogged) {
      return response.status(500).json({
        ok: false,
        message: 'credenciales incorrectas'
      })
    }
    delete userLogged.password
    const token = jwt.sign({ userLogged }, '46789TYUIOP4567890243223CFC', { expiresIn: '1h' })
    return response.status(200).json({
      ok: true,
      message: 'Login correcto',
      user: userLogged,
      token
    })
  })
}

module.exports = authenticationController
