/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} x
 */
export function minOperations(nums: number[], x: number): number {
  let n = nums.length, ans = Infinity
  let preArr = new Array(n + 1).fill(0), postArr = new Array(n + 1).fill(0)

  // 计算左右前缀和
  for (let i = 0; i < n; i++) preArr[i + 1] = preArr[i] + nums[i]
  for (let i = 0; i < n; i++) postArr[i + 1] = postArr[i] + nums[n - i - 1]

  // 循环左前缀和，查找右前缀和
  for (let i = 0; i < n; i++) {
    if (preArr[i] > x) break
    let res = binarySearch(postArr, x - preArr[i])
    if (i + res <= n) {
      ans = Math.min(ans, i + res)
    }
  }
  return ans === Infinity ? -1 : ans
}

function binarySearch(nums: number[], target: number): number {
  let left = 0, right = nums.length
  while (left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] === target) return mid
    if (nums[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return Infinity
}

