/*
 * @Author: Lqf
 * @Date: 2022-02-24 11:11:05
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 11:11:08
 * @Description: 我添加了修改
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}