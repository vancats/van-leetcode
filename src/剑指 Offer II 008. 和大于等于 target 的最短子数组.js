/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:18:43
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:23:58
 * @Description: 我添加了修改
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动窗口，更新窗口总值max为窗口阈值
  let ans = Number.MAX_SAFE_INTEGER, slide = [], max = 0
  for (let i = 0; i < nums.length; i++) {
    // 将值推入窗口
    slide.push(nums[i])
    // 更新窗口总值
    max += nums[i]
    // 当总值比target大
    if (max >= target) {
      // 如果剔除窗口前值，总值仍然比target大，则窗口滑动
      while (max - slide[0] >= target) {
        max -= slide.shift()
      }
      ans = Math.min(ans, slide.length)
    }
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans
}