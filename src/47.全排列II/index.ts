/**
 * @description: 待定
 * @return {*}
 * @param {number} nums
 */
export function permuteUnique(nums: number[]): number[][] {
  const n = nums.length
  const res: number[][] = []
  const visited: number[] = new Array(n).fill(0)
  nums.sort((a, b) => a - b)
  dp(0)
  return res

  function dp(ind: number, cur: number[] = []) {
    if (ind === n)
      return res.push(cur.slice())

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = 1
        cur.push(nums[i])
        dp(ind + 1, cur)
        cur.pop()
        visited[i] = 0
        while (nums[i] === nums[i + 1]) i++
      }
    }
  }
}
