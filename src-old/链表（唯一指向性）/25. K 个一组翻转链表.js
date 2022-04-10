/*
 * @Author: Lqf
 * @Date: 2022-02-15 09:56:55
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 09:59:04
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

// 这是反转前num个节点并返回头节点的函数
function reverseList(head, num) {
  // 如果数目不够，则不反转直接返回
  let tmp = head; let n = num
  while (--n) {
    tmp = tmp.next
    if (!tmp)
      return head
  }
  let prev = head; let cur = head.next
  while (--num) {
    const tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }
  head.next = cur
  return prev
}

const reverseKGroup = function(head, k) {
  const dump = new ListNode(null, head); let tmp = dump; let ret = head
  while (true) {
    // 返回当前头节点
    const curHead = reverseList(ret, k)
    tmp.next = curHead
    tmp = ret
    if (curHead === ret || !ret.next)
      return dump.next
    ret = ret.next
  }
}
