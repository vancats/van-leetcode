/**
 * @description: 空间复杂度 O(N) 时间复杂度 O(NlgN)
 * @return {*}
 * @param {number} nums
 * @param {number} lower
 * @param {number} upper
 */
export function countRangeSum(nums: number[], lower: number, upper: number): number {
  let n = nums.length
  let preArr: number[] = new Array(n + 1).fill(0)
  // 前缀和
  for (let i = 0; i < n; i++) {
    preArr[i + 1] = nums[i] + preArr[i]
  }
  return mergeSort(preArr, 0, preArr.length - 1, lower, upper)
}

function mergeSort(nums: number[], left: number, right: number, lower: number, upper: number): number {

  // 正常归并操作
  if (left >= right) return 0
  let mid = left + ((right - left) >> 1), res = 0
  res += mergeSort(nums, left, mid, lower, upper)
  res += mergeSort(nums, mid + 1, right, lower, upper)

  // 额外操作，计算左右两边符合区间和的个数
  res += countTwoPart(nums, left, mid, mid + 1, right, lower, upper)

  // 正常归并排序操作
  let i = left, k = left, j = mid + 1, temp: number[] = []
  while (i <= mid || j <= right) {
    if ((j > right) || (i <= mid && nums[i] <= nums[j])) {
      temp[k++] = nums[i++]
    } else {
      temp[k++] = nums[j++]
    }
  }

  for (let i = left; i <= right; i++) nums[i] = temp[i]
  return res
}

function countTwoPart(nums: number[], ls: number, le: number, rs: number, re: number, lower: number, upper: number): number {
  let ans = 0, k1 = ls, k2 = ls
  for (let j = rs; j <= re; j++) {
    // 计算 nums[i] 的左右边界
    let a = nums[j] - upper
    let b = nums[j] - lower
    // 移动两个指针到两个边界上
    while (k1 <= le && nums[k1] < a) k1++
    while (k2 <= le && nums[k2] <= b) k2++
    ans += k2 - k1
  }
  return ans
}
