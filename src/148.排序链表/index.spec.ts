import type { ListNode } from '../../utils/ListNode'
import { createListNode } from '../../utils/ListNode'
import { sortList } from './index'
describe('148.排序链表', () => {
  describe('归并排序', () => {
    testCase(sortList)
  })
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it('示例一', () => {
    const head = createListNode([4, 2, 1, 3])
    const expected = createListNode([1, 2, 3, 4])
    expect(fn(head)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const head = createListNode([-1, 5, 3, 4, 0])
    const expected = createListNode([-1, 0, 3, 4, 5])
    expect(fn(head)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const head = createListNode([])
    const expected = createListNode([])
    expect(fn(head)).toStrictEqual(expected)
  })
}
