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
 var reverseList = function(head) {
  let prev = null, cur = head
  while(cur) {
    let tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }
  return prev
};