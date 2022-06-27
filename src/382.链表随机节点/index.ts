import type { ListNode } from '../../utils/ListNode'

export class Solution {
  public arr: number[] = []
  constructor(head: ListNode | null) {
    while (head) {
      this.arr.push(head.val)
      head = head.next
    }
  }

  getRandom(): number {
    const len = this.arr.length
    return this.arr[Math.floor(Math.random() * len)]
  }
}
