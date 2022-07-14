import type { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {ListNode} head
 */
export function reorderList(head: ListNode | null): void {
  const arr: Array<ListNode | null> = []
  while (head) {
    arr.push(head)
    head = head.next
  }
  const n = arr.length
  for (let i = 0, j = n - 1; i < j - 1; i++, j--) {
    const temp = arr[i]!.next
    arr[j - 1]!.next = null
    arr[i]!.next = arr[j]
    arr[j]!.next = temp
  }
}
