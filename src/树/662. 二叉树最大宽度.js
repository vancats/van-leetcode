/*
 * @Author: Lqf
 * @Date: 2022-02-23 19:25:32
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 20:13:49
 * @Description: 我添加了修改
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0
  let queue = [[root, 0n]], ans = 0
  while (queue.length) {
    let left = right = queue[0][1]
    let ind = queue.length
    for (let i = 0; i < ind; i++) {
      let cur = queue.shift()
      right = cur[1]
      cur[0].left && queue.push([cur[0].left, right * 2n])
      cur[0].right && queue.push([cur[0].right, right * 2n + 1n])
    }
    // BigInt 不支持使用 Math.max
    if (right - left + 1n > ans) {
      ans = right - left + 1n
    }
  }
  return ans
}


var widthOfBinaryTree = function (root) {
  if (!root) return 0
  let queue = [[root, 0]], ans = 0
  while (queue.length) {
    let left = right = queue[0][1]
    let ind = queue.length
    for (let i = 0; i < ind; i++) {
      let cur = queue.shift()
      right = cur[1]
      cur[0].left && queue.push([cur[0].left, (right - left) * 2])
      cur[0].right && queue.push([cur[0].right, (right - left) * 2 + 1])
    }
    ans = Math.max(right - left + 1, ans)
  }
  return ans
}