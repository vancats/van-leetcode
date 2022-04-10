/*
 * @Author: Lqf
 * @Date: 2022-02-15 10:26:39
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 10:26:43
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
  if (!head)
    return null
  let tmp = head; let n = 1
  while (tmp) {
    if (!tmp.next) {
      tmp.next = head
      break
    }
    tmp = tmp.next
    n++
  }
  let num = n - k % n
  while (--num)
    head = head.next

  const res = head.next
  head.next = null
  return res
}
