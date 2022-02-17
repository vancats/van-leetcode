/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:10:43
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:10:44
 * @Description: 我添加了修改
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}