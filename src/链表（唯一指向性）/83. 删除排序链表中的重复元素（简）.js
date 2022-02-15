/*
 * @Author: Lqf
 * @Date: 2022-02-15 10:58:14
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 10:58:26
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
var deleteDuplicates = function (head) {
  let cur = head
  while (cur && cur.next) {
    while (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return head
}