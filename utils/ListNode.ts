export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @description: 数组创建链表
 * @param {number} arr
 * @return {*}
 */
export function createListNode(arr: number[]): ListNode | null {
  return arr.reduceRight((prev: ListNode | null, cur: number) => new ListNode(cur, prev), null)
}