
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} limit
 */
export function longestSubarray(nums: number[], limit: number): number {
  return dichotomy(0, nums.length, limit)

  function dichotomy(l: number, r: number, limit: number): number {
    if (l === r) return l
    // 1-0 模型要先加一
    const mid = (l + r + 1) >> 1
    if (check(mid, limit)) l = mid
    else r = mid - 1
    return dichotomy(l, r, limit)
  }

  function check(mid: number, limit: number): boolean {
    const q1: number[] = []
    const q2: number[] = []
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] < nums[q1[q1.length - 1]]) q1.pop()
      while (nums[i] > nums[q2[q2.length - 1]]) q2.pop()
      q1.push(i)
      q2.push(i)
      if (i + 1 < mid) continue
      if (i - q1[0] === mid) q1.shift()
      if (i - q2[0] === mid) q2.shift()
      if (nums[q2[0]] - nums[q1[0]] <= limit) return true
    }
    return false
  }
}
