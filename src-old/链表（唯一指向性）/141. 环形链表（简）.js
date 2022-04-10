/*
 * @Author: Lqf
 * @Date: 2022-02-14 15:24:04
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 15:32:41
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
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (!head)
    return false
  let prev = head; let cur = head.next
  while (prev !== cur && cur && cur.next) {
    prev = prev.next
    cur = cur.next.next
  }
  return !!cur && !!cur.next
}
