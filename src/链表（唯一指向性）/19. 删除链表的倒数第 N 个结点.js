/*
 * @Author: Lqf
 * @Date: 2022-02-15 10:57:46
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 10:57:48
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dump = new ListNode(null, head), prev = cur = dump
  while (n--) {
    cur = cur.next
  }
  while (cur.next) {
    cur = cur.next
    prev = prev.next
  }
  prev.next = prev.next.next
  return dump.next
}