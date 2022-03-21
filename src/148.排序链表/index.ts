import { ListNode } from '../../utils/ListNode'

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @param {ListNode} head
 * @return {*}
 */
export function sortList(head: ListNode | null): ListNode | null {
  let n = 1, temp: any = head
  // 计算节点数
  while (temp && (temp = temp.next)) n++
  return mergeSort(head, n)
}

function mergeSort(head: ListNode | null, n: number): ListNode | null {
  if (n < 2) return head
  let mid = n >> 1
  let left: any = head, right: any = head, temp: any = head

  // right 移动到需要分割的节点的前一位
  for (let i = 1; i < mid; i++, right = right.next) { }

  // 分割成两串链表
  temp = right
  right = right.next
  temp.next = null

  // 递归排序左右链表
  left = mergeSort(left, mid)
  right = mergeSort(right, n - mid)

  // 合并两个有序链表
  let dummy = new ListNode()
  temp = dummy
  while (left || right) {
    if ((!right) || (left && left.val <= right.val)) {
      temp.next = left
      left = left.next
      temp = temp.next
    } else {
      temp.next = right
      right = right.next
      temp = temp.next
    }
  }
  return dummy.next
}
