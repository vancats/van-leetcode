/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:12:19
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:32:29
 * @Description: 我添加了修改
 */

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch)
  return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1)
}