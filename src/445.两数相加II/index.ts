import { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const stack1: number[] = []
  const stack2: number[] = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let flag = 0
  let dump: ListNode | null = null
  while (stack1.length || stack2.length || flag) {
    const num1 = stack1.pop() || 0
    const num2 = stack2.pop() || 0
    let sum = num1 + num2 + flag
    flag = Math.floor(sum / 10)
    sum %= 10
    const node = new ListNode(sum, dump)
    dump = node
  }
  return dump
}
