/*
 * @Author: Lqf
 * @Date: 2022-02-15 11:17:20
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 11:36:23
 * @Description: 我添加了修改
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return head
  let cur = head, tmp
  while (cur) {
    tmp = new Node(cur.val)
    tmp.next = cur.next
    tmp.random = cur.random
    cur.next = tmp
    cur = cur.next.next
  }
  cur = head.next
  while (cur) {
    // 修改random指向
    cur.random = cur.random ? cur.random.next : null
    cur = cur.next ? cur.next.next : null
  }
  let newHead = head.next, prev = head
  while (prev) {
    cur = prev.next
    // 恢复原链表指向
    prev.next = cur.next
    prev = prev.next
    // 修改next指向
    cur.next = cur.next ? cur.next.next : null
    cur = cur.next
  }
  return newHead
}