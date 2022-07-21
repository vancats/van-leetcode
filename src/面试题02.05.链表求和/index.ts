import { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let flag = 0
  const dump: ListNode | null = new ListNode()
  let temp = dump
  while (l1 || l2 || flag) {
    let val = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + flag
    flag = 0
    if (val > 9) {
      flag = 1
      val -= 10
    }
    temp.next = new ListNode(val)
    temp = temp.next
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  return dump.next
}
