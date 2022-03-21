import { ListNode } from "../../utils/ListNode"
import { Heap } from "../../utils/Heap"

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {Array} lists
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let heap = new Heap(false)
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i]
    while (list) {
      heap.push(list.val)
      list = list.next
    }
  }
  if (!heap.heap.length) return null
  let node = new ListNode(heap.pop()), temp = node
  while (heap.heap.length) {
    temp.next = new ListNode(heap.pop())
    temp = temp.next
  }
  return node
}