/*
 * @Author: Lqf
 * @Date: 2022-02-15 10:50:23
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 10:50:27
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
const swapPairs = function(head) {
  if (!head || !head.next)
    return head
  const dump = new ListNode(null, head); let ret = dump; let prev; let cur
  while (ret.next && ret.next.next) {
    prev = ret.next
    cur = prev.next
    ret.next = cur
    prev.next = cur.next
    cur.next = prev
    ret = prev
  }
  return dump.next
}
