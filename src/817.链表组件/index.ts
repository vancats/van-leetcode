import type { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {ListNode} head
 * @param {number} nums
 */
export function numComponents(head: ListNode | null, nums: number[]): number {
  const arr: number[] = []
  nums.forEach(num => {
    arr[num] = 1
  })
  let res = 0
  while (head) {
    if (arr[head.val]) {
      while (head && arr[head.val]) head = head.next
      res++
    }
    else {
      head = head.next
    }
  }
  return res
}
