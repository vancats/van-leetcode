/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 * @param {number} target
 */
export function findTargetSumWays(nums: number[], target: number): number {
  let res = 0
  dfs(0)
  return res

  function dfs(ind, sum = 0) {
    if (ind === nums.length) {
      if (sum === target)
        res++
      return
    }
    dfs(ind + 1, sum + nums[ind])
    dfs(ind + 1, sum - nums[ind])
  }
}

export function findTargetSumWays1(nums: number[], target: number): number {
  const map: Map<string, number> = new Map()
  return dfs(0)

  function dfs(ind: number, sum = 0): number {
    if (ind === nums.length)
      return Number(sum === target)

    if (map.has(`${ind}+${sum}`))
      return map.get(`${ind}+${sum}`)!

    let ans = 0
    ans += dfs(ind + 1, sum + nums[ind])
    ans += dfs(ind + 1, sum - nums[ind])
    map.set(`${ind}+${sum}`, ans)

    return ans
  }
}
