'use strict'

require('dotenv').config()
const chalk = require('chalk')
const app = require('./src/app')

async function main() {
    await app.listen(process.env.PORT)
    console.log(chalk.bold(chalk.blue('server on port'), process.env.PORT));
}

main()
