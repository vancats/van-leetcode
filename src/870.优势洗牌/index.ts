/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function advantageCount(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length
  nums1.sort((a, b) => a - b)
  const arr = new Array(n)
  nums2.forEach((item, index) => {
    const ind = findIndex(nums1, item, 0, nums1.length - 1)
    if (ind !== -1) {
      arr[index] = nums1[ind]
      nums1.splice(ind, 1)
    }
  })
  if (nums1.length) {
    for (let i = 0; i < n; i++) {
      if (!arr[i])
        arr[i] = nums1.pop()
    }
  }
  return arr
}

function findIndex(arr: number[], num: number, left: number, right: number): number {
  while (left <= right) {
    const mid = (left + right) >> 1
    if (arr[mid] > num)
      right = mid - 1

    else
      left = mid + 1
  }
  return left
}
