/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const s1 = String(a)
    const s2 = String(b)
    return Number(s2 + s1) - Number(s1 + s2)
  })
  return nums[0] ? nums.join('') : '0'
}
