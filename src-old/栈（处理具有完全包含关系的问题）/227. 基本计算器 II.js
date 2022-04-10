/*
 * @Author: Lqf
 * @Date: 2022-02-17 19:44:17
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 20:21:23
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  const levelArr = []; const numArr = []; const ans = 0
  s += '#'
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ')
      continue
    if (level(s[i]) === 0) {
      let cur = s[i]
      while (++i && level(s[i]) === 0)
        cur += s[i]

      numArr.push(cur)
      i--
    }
    else {
      while (levelArr.length && level(levelArr[levelArr.length - 1]) >= level(s[i]))
        numArr.push(calculator(numArr.pop(), numArr.pop(), levelArr.pop()))

      levelArr.push(s[i])
    }
  }
  return numArr[0]
}

function calculator(cur, prev, ops) {
  let num
  prev = Number(prev)
  cur = Number(cur)
  switch (ops) {
    case '+': num = prev + cur
      break
    case '-': num = prev - cur
      break
    case '*': num = prev * cur
      break
    case '/': num = Math.floor(prev / cur)
  }
  console.log(prev, cur, ops)
  return num
}

function level(ops) {
  switch (ops) {
    case '+':
    case '-': return 1
    case '*':
    case '/': return 10
    case '#': return -1
    default: return 0
  }
}
