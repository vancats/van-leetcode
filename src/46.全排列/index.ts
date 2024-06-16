/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const visited = {}
  dp()
  return res
  function dp(cur: number[] = []) {
    if (cur.length === nums.length)
      return res.push(cur.slice())

    for (let i = 0; i < nums.length; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1
        cur.push(nums[i])
        dp(cur)
        cur.pop()
        visited[nums[i]] = 0
      }
    }
  }
}
