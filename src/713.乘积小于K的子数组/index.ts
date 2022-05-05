/**
 * @description: 滑动窗口 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let cnt = 0
  let cur = 1
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    cur *= nums[i]
    while (j <= i && cur >= k) {
      cur /= nums[j]
      j++
    }
    // i - j 是新加元素和前面数组的数目，1 是新加元素本身
    cnt += i - j + 1
  }
  return cnt
}
