/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:12:03
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:14:04
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res.join(',') === res.reverse().join(',')
}