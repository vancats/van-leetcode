const fs = require('fs')
const path = require('path')

const update = ({ title, url, difficulty, id }) => {
  title = title.replace(/\s/g, '')
  if (createProject(title)) {
    fs.writeFileSync(
      `problemset/${title}/index.ts`,
      ''
    )
    fs.writeFileSync(
      `problemset/${title}/README.md`,
      `# ${title}\r\n\r\n> 难度：${difficulty}\r\n>\r\n> ${url}\r\n\r\n## 题目`
    )
    fs.writeFileSync(
      `problemset/${title}/index.spec.ts`,
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
    id: Number(id),
    title,
    url,
    difficulty,
    path: `../../problemset/${title}/README.md`
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
  if (checkHasPath(`problemset/${title}`)) {
    log('已存在该路径', 'red')
    return
  }
  fs.mkdirSync(`problemset/${title}`)
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