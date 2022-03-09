const clear = require('clear')
const inquirer = require('./inquirer')
const { figletLog } = require('../utils/log')
const fs = require('fs')
const update = require('./update')

const getCategory = () => JSON.parse(fs.readFileSync('./assets/data/category.json', 'utf-8'))

module.exports = async () => {
  clear()
  await figletLog('UPDATE CATEGORY')
  const data = getCategory()
  const { id, categories, others } = await inquirer(data)
  update(data, { id, categories, others })
}