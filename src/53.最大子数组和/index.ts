/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function maxSubArray(nums: number[]): number {
  // arr 前缀和 min 当前下标前的最小前缀和 -> max 当前数字和前面的最小前缀和之差就是该值的最大值
  let arr: number[] = new Array(nums.length).fill(0), min = Infinity, max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    arr[i + 1] = nums[i] + arr[i]
    // 维护一个前面的最小值，都和他做计算
    min = Math.min(min, arr[i])
    max = Math.max(max, arr[i + 1] - min)
  }
  return max
}

export function maxSubArray2(nums: number[]): number {
  let ans = nums[0], tmp = 0
  for (let i = 0; i < nums.length; i++) {
    if (tmp > 0) {
      tmp += nums[i]
    } else {
      tmp = nums[i]
    }
    ans = Math.max(ans, tmp)
  }
  return ans
}