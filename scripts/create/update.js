const fs = require('fs')
const path = require('path')
const { log } = require('../utils/log')

const update = ({ title, url, difficulty, id }) => {
  title = title.replace(/\s/g, '')
  if (createProject(title)) {
    fs.writeFileSync(
      `src/${title}/index.ts`,
      ''
    )
    fs.writeFileSync(
      `src/${title}/README.md`,
      `# ${title}\r\n\r\n> 难度：${difficulty}\r\n>\r\n> ${url}\r\n\r\n## 题目`
    )
    fs.writeFileSync(
      `src/${title}/index.spec.ts`,
      `describe('${title}', () => {});`
    )

    const problems = updateDataJson({
      title,
      url,
      difficulty,
      id
    })

    updateMarkdown(problems)
  }
}

const updateDataJson = ({ title, url, difficulty, id }) => {
  const problems = JSON.parse(fs.readFileSync('./assets/data/problems.json'))
  problems.push({
    id,
    title,
    url,
    difficulty,
    path: `../../src/${title}/README.md`
  })
  problems.sort((a, b) => a.id - b.id)
  fs.writeFileSync('./assets/data/problems.json', JSON.stringify(problems, null, 2))
  return problems
}

const updateMarkdown = (problems) => {
  let md = `# 题库`

  problems.forEach(problem => {
    md += `\r\n\r\n[${problem.title}](${problem.path})`
  })

  fs.writeFileSync('./assets/docs/PROBLEMS.md', md)
}

const createProject = (title) => {
  if (checkHasPath(`src/${title}`)) {
    log('已存在该路径', 'red')
    return
  }
  fs.mkdirSync(`src/${title}`)
  return true
}

const checkHasPath = (path) => {
  try {
    fs.accessSync(getPath(path), fs.constants.F_OK)
    return true
  } catch (err) {
    return false
  }
}

const getPath = (p) => {
  return path.resolve(path.resolve(__dirname, '../../'), p)
}

module.exports = update