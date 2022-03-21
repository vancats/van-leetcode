/*
 * @Author: Lqf
 * @Date: 2022-02-15 10:58:23
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 11:15:57
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
 * @param {ListNode} head [1,2,3,3,4,4,5]
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dump = new ListNode(null, head), ret = dump
  while (ret) {
    let flag = 0
    // 当循环到3节点时执行，ret => 2 ret.next => [3,4,4,5]
    while (ret.next && ret.next.next && ret.next.val === ret.next.next.val) {
      ret.next = ret.next.next
      flag = 1
    }
    if (flag) {
      // ret => 2 ret.next => [4,4,5]
      ret.next = ret.next.next
    } else {
      // 未循环情况
      ret = ret.next
    }
  }
  return dump.next
}