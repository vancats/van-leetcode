/*
 * @Author: Lqf
 * @Date: 2022-02-22 12:21:13
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-22 12:33:26
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} height
 * @return {number}
 */

// 动态规划解法
var trap = function (height) {
  let len = height.length
  if (len === 0) return 0

  // 维护每个水柱的左右最大值
  const leftMax = new Array(len).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  const rightMax = new Array(len).fill(0)
  rightMax[len - 1] = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    ans += Math.min(rightMax[i], leftMax[i]) - height[i]
  }
  return ans
}

// 单调栈解法
var trap = function (height) {
  let ans = 0, stack = []
  // 维护一个递减栈
  // 当栈中存在至少两个值，并且当前值大于栈顶值时，形成“洼地”，可以直接算出一个长方形的面积
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let top = stack.pop()
      if (!stack.length) break
      const left = stack[stack.length - 1]
      const curWidth = i - left - 1
      const curHeight = Math.min(height[i], height[left]) - height[top]
      ans += curWidth * curHeight
    }
    stack.push(i)
  }
  return ans
}

// 双指针解法
var trap = function (height) {
  let ans = 0
  let [leftMax, rightMax] = [0, 0]
  let [left, right] = [0, height.length - 1]
  // 用双指针代替最值数组
  // 若左右分别为 i， j，当 iLeftMax < jRightMax 则 iLeftMax < iRightMax，可以计算当前 i 接水的值
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (leftMax < rightMax) {
      ans += leftMax - height[left]
      left++
    } else {
      ans += rightMax - height[right]
      right--
    }
  }
  return ans
}
