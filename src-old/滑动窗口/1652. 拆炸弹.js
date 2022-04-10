/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:18:19
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:04:04
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
  if (k === 0)
    return new Array(code.length).fill(0)
  const ans = []; let tmp = []; const len = code.length; let ind; let sum
  // 判断 k 值，两头开工
  if (k > 0)
    tmp = code.slice(0, k)
  else
    tmp = code.slice(k - 1, -1)

  sum = tmp.reduce((prev, cur) => prev + cur)
  for (let i = 0; i < code.length; i++) {
    if (k > 0)
      ind = (i + k) % len
    else
      ind = (i - 1 + len) % len

    sum -= tmp.shift()
    sum += code[ind]
    tmp.push(code[ind])
    ans.push(sum)
  }
  return ans
}
