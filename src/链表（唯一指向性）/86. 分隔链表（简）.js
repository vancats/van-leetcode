/*
 * @Author: Lqf
 * @Date: 2022-02-15 10:11:30
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 11:05:18
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dump1 = new ListNode(null), dump2 = new ListNode(null), list1 = dump1, list2 = dump2
  while (head) {
    if (head.val >= x) {
      list2.next = head
      list2 = list2.next
    } else {
      list1.next = head
      list1 = list1.next
    }
    head = head.next
  }
  // 记得要清除最后的连接，不然有可能成环
  list2.next = null
  list1.next = dump2.next
  return dump1.next
}