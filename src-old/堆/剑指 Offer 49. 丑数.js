/*
 * @Author: Lqf
 * @Date: 2022-03-02 09:53:01
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-02 09:53:01
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function(n) {
  let ans = 0; const res = [1]; const arr = new Array(3).fill(0); const ugly = [2, 3, 5]
  while (res.length < n) {
    const u3 = ugly[0] * res[arr[0]]
    const u5 = ugly[1] * res[arr[1]]
    const u7 = ugly[2] * res[arr[2]]
    ans = Math.min(u3, u5, u7)
    if (ans === u3)
      arr[0]++
    if (ans === u5)
      arr[1]++
    if (ans === u7)
      arr[2]++
    res.push(ans)
  }
  return res.at(-1)
}
