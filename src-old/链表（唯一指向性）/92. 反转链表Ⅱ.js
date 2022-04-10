/*
 * @Author: Lqf
 * @Date: 2022-02-14 18:13:19
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-14 18:13:19
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

const reverseBetween = function(head, left, right) {
  const dump = new ListNode(null, head); const n = right - left + 1; let ret = dump
  while (--left)
    ret = ret.next

  ret.next = reverseList(ret.next, n)
  return dump.next
}

const reverseList = function(head, n) {
  let prev = head; let cur = head.next
  while (--n) {
    const tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }
  head.next = cur
  return prev
}
