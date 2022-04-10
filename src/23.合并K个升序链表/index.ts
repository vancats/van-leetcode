import { ListNode } from '../../utils/ListNode'
import { Heap } from '../../utils/Heap'

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {Array} lists
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap = new Heap((a, b) => a < b)
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i]
    while (list) {
      heap.push(list.val)
      list = list.next
    }
  }
  if (!heap.size)
    return null
  const node = new ListNode(heap.pop()); let temp = node
  while (heap.size) {
    temp.next = new ListNode(heap.pop())
    temp = temp.next
  }
  return node
}
