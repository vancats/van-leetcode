/*
 * @Author: Lqf
 * @Date: 2022-02-15 17:53:44
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 18:03:09
 * @Description: 我添加了修改
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function (tasks, n) {
  let ans = new Array(26).fill(0)
  tasks.forEach(task => {
    ans[task.charCodeAt() - '65']++
  })
  ans.sort((a, b) => b - a)
  let flag = 1
  for (let i = 1; i < ans.length && ans[i] === ans[0]; i++, flag++) { }
  return Math.max(tasks.length, (ans[0] - 1) * (n + 1) + flag)
}