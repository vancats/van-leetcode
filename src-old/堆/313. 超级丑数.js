/*
 * @Author: Lqf
 * @Date: 2022-03-02 09:40:05
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-02 09:46:01
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = function(n, primes) {
  let ans = 0; const res = [1]; const arr = new Array(primes.length).fill(0)
  while (res.length < n) {
    ans = primes[0] * res[arr[0]]
    for (let i = 1; i < primes.length; i++)
      ans = Math.min(ans, primes[i] * res[arr[i]])

    for (let i = 0; i < primes.length; i++) {
      if (ans === primes[i] * res[arr[i]])
        arr[i]++
    }
    res.push(ans)
  }
  return res.at(-1)
}
