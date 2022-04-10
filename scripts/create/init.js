const clear = require('clear')
const { figletLog } = require('../utils/log')
const inquirer = require('./inquirer')
const update = require('./update')

module.exports = async() => {
  clear()
  await figletLog('UPDATE PROBLEMS')
  const { title, url, difficulty, id } = await inquirer()
  update({ title, url, difficulty, id })
}
