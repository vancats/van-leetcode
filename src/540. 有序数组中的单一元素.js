/*
 * @Author: Lqf
 * @Date: 2022-02-14 09:28:09
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 09:42:48
 * @Description: 只有一个落单元素，因此可以判断，该元素的两边元素数量一定是偶数个，因此使用二分法
 *    当前下标偶数时，如果和右边相等，则该落单元素在右边
 *    当前下标奇数时，如果和左边相等，则该落单元素在右边
 *    因此可以采用异或的方式简便运算
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0, right = nums.length - 1
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    console.log(mid, left, right)
    if (nums[mid] === nums[mid ^ 1]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
}