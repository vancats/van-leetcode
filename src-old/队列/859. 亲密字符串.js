/*
 * @Author: Lqf
 * @Date: 2022-02-15 17:28:02
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 17:36:27
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  let map = new Map()
  if (s === goal) {
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) return true
      map.set(s[i], 1)
    }
  }
  let ans = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      ans.push(i)
    }
  }
  return ans.length === 2 && s[ans[0]] === goal[ans[1]] && s[ans[1]] === goal[ans[0]]
}
