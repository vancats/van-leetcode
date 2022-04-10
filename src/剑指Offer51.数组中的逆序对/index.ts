/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function reversePairs(nums: number[]): number {
  return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(nums: number[], left: number, right: number): number {
  if (left >= right)
    return 0
  let ans = 0; const mid = (left + right) >> 1
  ans += mergeSort(nums, left, mid)
  ans += mergeSort(nums, mid + 1, right)
  let i = left; let j = mid + 1; let k = left; const temp: number[] = []
  while (i <= mid || j <= right) {
    if ((j > right) || (i <= mid && nums[i] <= nums[j])) {
      temp[k++] = nums[i++]
    }
    else {
      temp[k++] = nums[j++]
      ans += (mid - i + 1)
    }
  }
  for (let i = left; i <= right; i++) nums[i] = temp[i]
  return ans
}
