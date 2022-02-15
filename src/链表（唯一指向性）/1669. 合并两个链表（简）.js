/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:16:20
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 11:04:31
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let head = new ListNode(0)
  head.next = list1
  for (let i = 0; i < a - 1; i++) {
    list1 = list1.next
  }
  let temp1 = list1
  for (let i = a; i < b + 2; i++) {
    list1 = list1.next
  }
  let temp2 = list1
  temp1.next = list2
  while (list2.next) {
    list2 = list2.next
  }
  list2.next = temp2
  return head.next
}