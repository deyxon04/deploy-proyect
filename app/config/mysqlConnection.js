const mysql = require('mysql')

const dbConnection = mysql.createConnection({

})

dbConnection.connect((err) => {
    if (err) throw err
    console.log('Db connected successfull')
})

module.exports = dbConnection