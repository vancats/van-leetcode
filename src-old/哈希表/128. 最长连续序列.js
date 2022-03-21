/*
 * @Author: Lqf
 * @Date: 2022-03-08 11:19:56
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-08 11:19:59
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0, set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let ans = 0, temp = nums[i]
      while (set.has(temp)) {
        ans++
        temp++
      }
      max = Math.max(max, ans)
    }
  }
  return max
}

var longestConsecutive = function (nums) {
  let max = 0, map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let cur = temp = nums[i], ans = 1
    map.set(cur, i)
    while (map.has(temp - 1)) {
      ans++
      temp--
    }
    temp = cur
    while (map.has(temp + 1)) {
      ans++
      temp++
    }
    max = Math.max(ans, max)
  }
  return max
}
