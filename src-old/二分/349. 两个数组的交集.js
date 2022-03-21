/*
 * @Author: Lqf
 * @Date: 2022-02-24 16:43:02
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 16:49:21
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let ans = []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let n1 = n2 = 0
  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      let val = nums1[n1]
      ans.push(val)
      while (nums1[n1] === val) {
        n1++
      }
      while (nums2[n2] === val) {
        n2++
      }
    } else if (nums1[n1] > nums2[n2]) {
      n2++
    } else {
      n1++
    }
  }
  return ans
}
