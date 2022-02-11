/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:15:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:36:07
 * @Description: 我添加了修改
 */

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let cnt = 0, punct = ['!', '.', ',']
  const arr = sentence.split(' ').filter(item => item)
  arr.forEach(word => {
    let hyphen = 0
    if (punct.includes(word[word.length - 1])) word = word.slice(0, -1)
    if (word[0] === '-' || word[word.length - 1] === '-') return
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (punct.includes(char)) return
      if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) return
      if (char === '-') hyphen++
      if (hyphen > 1) return
    }
    cnt++
  })
  return cnt
}