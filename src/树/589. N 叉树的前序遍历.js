/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:24:09
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 16:38:48
 * @Description: 我添加了修改
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, ans = []) {
  if (!root) return ans
  ans.push(root.val)
  for (let i = 0; i < root.children.length; i++) {
    preorder(root.children[i], ans)
  }
  return ans
}