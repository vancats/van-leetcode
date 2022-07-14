import type { ListNode } from '../../utils/ListNode'
import { createListNode } from '../../utils/ListNode'
import { reorderList } from '.'

describe('143.重排链表', () => {
  it('示例一', () => {
    const list: ListNode | null = createListNode([1, 2, 3, 4])
    reorderList(list)
    expect(list).toStrictEqual(createListNode([1, 4, 2, 3]))
  })

  it('示例二', () => {
    const list: ListNode | null = createListNode([1, 2, 3, 4, 5])
    reorderList(list)
    expect(list).toStrictEqual(createListNode([1, 5, 2, 4, 3]))
  })
})
