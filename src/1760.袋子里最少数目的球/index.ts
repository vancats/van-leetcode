/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} maxOperations
 */
export function minimumSize(nums: number[], maxOperations: number): number {
  return dichotomy(1, Math.max(...nums), maxOperations)

  function dichotomy(l: number, r: number, n: number): number {
    if (l === r)
      return l

    const mid = (l + r) >> 1
    if (bs(mid) <= n) r = mid
    else l = mid + 1
    return dichotomy(l, r, n)
  }

  function bs(mid: number): number {
    let ans = 0
    nums.forEach(num => {
      ans += Math.ceil(num / mid) - 1
    })
    return ans
  }
}
