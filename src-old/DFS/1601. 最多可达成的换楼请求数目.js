/*
 * @Author: Lqf
 * @Date: 2022-02-28 09:38:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-28 09:41:22
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const delta = new Array(n).fill(0)
  let ans = 0, cnt = 0, zero = n
  const dfs = (requests, pos) => {
    if (pos === requests.length) {
      if (zero === n) {
        ans = Math.max(ans, cnt)
        return
      }
      return
    }

    // 未选中当前请求
    dfs(requests, pos + 1)


    // 选中当前请求
    let z = zero
    cnt++
    const [x, y] = requests[pos]
    // 处理数据并判断换楼请求是否为 0
    zero -= delta[x] === 0
    delta[x]--
    zero += delta[x] === 0

    zero -= delta[y] === 0
    delta[y]++
    zero += delta[y] === 0
    dfs(requests, pos + 1)

    // 恢复原状态
    cnt--
    delta[x]++
    delta[y]--
    zero = z
  }
  dfs(requests, 0)
  return ans
}