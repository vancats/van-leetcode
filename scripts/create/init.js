const clear = require('clear')
const { figletLog } = require('../utils/log')
const inquirer = require('./inquirer')
const update = require('./update')

module.exports = async () => {
  clear()
  await figletLog('UPDATE PROBLEMS')
  const { title, difficulty, id } = await inquirer()
  update({ title, difficulty, id })
  await figletLog('**SUCCESS**')
}
