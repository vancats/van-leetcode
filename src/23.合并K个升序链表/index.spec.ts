import { ListNode, createListNode } from '../../utils/ListNode'
import { mergeKLists } from './index'
describe('23.合并K个升序链表', () => {
  it('示例一', () => {
    const arr = [[1, 4, 5], [1, 3, 4], [2, 6]]
    const listNode = arr.map((item) => {
      const node = new ListNode(); let temp = node
      item.forEach((i) => {
        temp.next = new ListNode(i)
        temp = temp.next
      })
      return node.next
    })
    expect(mergeKLists(listNode)).toStrictEqual(createListNode([1, 1, 2, 3, 4, 4, 5, 6]))
  })

  it('示例二', () => {
    const arr: number[][] = []
    const listNode = arr.map((item) => {
      const node = new ListNode(); let temp = node
      item.forEach((i) => {
        temp.next = new ListNode(i)
        temp = temp.next
      })
      return node.next
    })
    expect(mergeKLists(listNode)).toStrictEqual(createListNode([]))
  })

  it('示例二', () => {
    const arr: number[][] = [[]]
    const listNode = arr.map((item) => {
      const node = new ListNode(); let temp = node
      item.forEach((i) => {
        temp.next = new ListNode(i)
        temp = temp.next
      })
      return node.next
    })
    expect(mergeKLists(listNode)).toStrictEqual(createListNode([]))
  })
})
