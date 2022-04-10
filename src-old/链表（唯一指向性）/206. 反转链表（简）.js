/*
 * @Author: Lqf
 * @Date: 2022-02-14 16:56:11
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 17:12:28
 * @Description: 我添加了修改
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let prev = null; let cur = head
  while (cur) {
    const tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }
  return prev
}
