import { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {ListNode} head
 */
export function insertionSortList(head: ListNode | null): ListNode | null {
  const dump: ListNode | null = new ListNode(-Infinity)
  let cur = -Infinity
  let temp = dump
  while (head) {
    const r = head.next
    if (head.val >= cur) {
      head.next = null
      temp.next = head
      temp = temp.next
      cur = head.val
    }
    else {
      let node = dump
      while (node.next!.val < head.val)
        node = node.next!

      head.next = node.next
      node.next = head
    }
    head = r
  }
  return dump.next
}
