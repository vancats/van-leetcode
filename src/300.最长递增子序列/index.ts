/**
 * @Author: Lqf
 * @description: 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @return number
 * @param {number} nums
 */
export function lengthOfLIS(nums: number[]): number {
  if (!nums.length) return 0
  const res: number[] = [nums[0]]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > res[res.length - 1]) {
      // 如果比末尾值大，直接 push
      res.push(nums[i])
    } else if (nums[i] < res[res.length - 1]) {
      // 如果比末尾值小，替换其中比该数大的最小值
      // 二分查找缩短搜索速度
      let left = 0, right = res.length - 1
      while (left < right) {
        let mid = (left + right) >> 1
        if (res[mid] >= nums[i]) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      res[left] = nums[i]
    }
  }
  return res.length
}