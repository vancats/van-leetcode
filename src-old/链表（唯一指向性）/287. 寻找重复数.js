/*
 * @Author: Lqf
 * @Date: 2022-02-21 16:43:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-21 17:03:03
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let left = 1; let right = nums.length; let num
  while (left < right) {
    // 每次选取一个中间的数，遍历原数组，如果大于该数的值过多，则重复数一定在区间内
    // 例如中间数 5， 而 小于 5 的值大于 5 个，则重复数一定在 0-5 之间
    const mid = (left + right) >> 1
    num = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        num++
      }
    }
    if (num <= mid)
      left = mid + 1
    else
      right = mid
  }
  return left
}

// 使用了 142. 环形链表Ⅱ 的方法，比较巧妙
var findDuplicate = function(nums) {
  let slow = nums[0]; let fast = nums[slow]
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}
