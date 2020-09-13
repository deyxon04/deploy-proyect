const db = require('../config/mysqlConnection')
const authenticationModel = {}

authenticationModel.searchUser = (user, callback) => {
  const query = 'SELECT * FROM usuarios WHERE email = ?'
  db.query(query, [user], (err, userinDb) => {
    if (err) callback(err, null)
    callback(null, userinDb)
  })
}

module.exports = authenticationModel
