/*
 * @Author: Lqf
 * @Date: 2022-02-14 15:35:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 16:24:39
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
 * @return {ListNode}
 */
const detectCycle = function(head) {
  if (!head)
    return null
  let prev = cur = ret = head
  while (cur && cur.next) {
    prev = prev.next
    cur = cur.next.next
    if (prev === cur) {
      while (cur !== ret) {
        ret = ret.next
        cur = cur.next
      }
      return cur
    }
  }
  return null
}
