/*
 * @Author: Lqf
 * @Date: 2022-02-24 11:18:00
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 11:18:04
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
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let slow = fast = head
  while (k--) {
    fast = fast.next
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow.val
}