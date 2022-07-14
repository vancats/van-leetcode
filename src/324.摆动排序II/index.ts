/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function wiggleSort(nums: number[]): void {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const arr = nums.slice()
  let j = ((n + 1) >> 1) - 1
  for (let i = 0, k = n - 1; i < n; i += 2, k--, j--) {
    nums[i] = arr[j]
    if (i + 1 < n) nums[i + 1] = arr[k]
  }
}
