const clear = require('clear')
const inquirer = require('./inquirer')
const { figletLog } = require('../utils/log')
const update = require('./update')


module.exports = async () => {
  clear()
  await figletLog('UPDATE PROBLEMS')
  const { title, url, difficulty, id } = await inquirer()
  update({ title, url, difficulty, id })
}