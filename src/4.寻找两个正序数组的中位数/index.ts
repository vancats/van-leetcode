/**
 * @description: Annotation
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let len1 = nums1.length, len2 = nums2.length
  // 中位数需要取大值
  let k = Math.ceil((len1 + len2) / 2)
  // 获取中位数的值
  let left = findKthNum(nums1, nums2, k)
  // 如果总数是奇数，则直接返回
  if ((len1 + len2) % 2) return left

  // 如果不是奇数，则需要求出该值的下一位，k + 1
  let right = findKthNum(nums1, nums2, k + 1)
  // 取两个值的平均数
  return (left + right) / 2
}

// 寻找第 k 个值
function findKthNum(nums1: number[], nums2: number[], k: number): number {
  // 如果有一个数组已经空了，那么直接取另一个数组的相应的值
  if (!nums1.length) return nums2[k - 1]
  if (!nums2.length) return nums1[k - 1]

  // 如果只取第一位，那么对比数组的头个元素即可
  if (k === 1) return Math.min(nums1[0], nums2[0])
  // 取中点，但是要注意，k 代表第几个数，在数组中需要减一
  let cur = (k >> 1) - 1
  // 这里是为了防止 cur 值大于数组长度
  if (cur >= nums1.length) cur = nums1.length - 1
  if (cur >= nums2.length) cur = nums2.length - 1
  if (nums1[cur] < nums2[cur]) {
    // 舍弃 nums1 的前 cur 部分，k 减去相应值
    return findKthNum(nums1.slice(cur + 1), nums2, k - cur - 1)
  } else {
    // 同理
    return findKthNum(nums1, nums2.slice(cur + 1), k - cur - 1)
  }
}
