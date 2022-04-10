/*
 * @Author: Lqf
 * @Date: 2022-02-21 10:16:15
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-21 10:33:28
 * @Description: 我添加了修改
 */

/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function(dominoes) {
  // 设置倒向的数组，默认 0 为不倒，负数为 L，正数为 R
  const ans = new Array(dominoes.length).fill(0)
  for (let i = 0; i < dominoes.length; i++) {
    // 当 L 或 R 时进行翻转判断
    if (dominoes[i] === 'R') {
      // 该牌本身是 R
      ans[i] = 1
      let j = i
      // 向右倒
      while (dominoes[++j] === '.') {
        // 如果未设置值，直接设置差值，即为题目中的秒数 R... -> 1123
        if (ans[j] === 0) { ans[j] = j - i }
        // 如果已经有值
        // 如果值大于 0，证明前面的也是 R，无需更改  R....R
        else if (ans[j] > 0) { break }
        // 如果值等于差值，证明前面为 L，且该牌为两倒牌的中心点   L...(.)...R
        else if (ans[j] === i - j) {
          ans[j] = 0
          // 找到中心点后直接退出，后面的值都是倒向左侧
          break
        }
        else if (ans[j] < i - j)
        // L 和 R 之间靠近 R 的值，直接置 1    L..(..)R
        { ans[j] = 1 }
      }
    }
    // 和 R 的思路完全相同
    if (dominoes[i] === 'L') {
      ans[i] = -1
      let j = i
      while (dominoes[--j] === '.') {
        if (ans[j] === 0) { ans[j] = j - i }
        else if (ans[j] < 0) { break }
        else if (ans[j] === i - j) {
          ans[j] = 0
          break
        }
        else if (ans[j] > i - j) { ans[j] = -1 }
      }
    }
  }
  // 将数字转为题意字符
  let s = ''
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === 0)
      s += '.'
    else
      s += ans[i] > 0 ? 'R' : 'L'
  }
  return s
}
