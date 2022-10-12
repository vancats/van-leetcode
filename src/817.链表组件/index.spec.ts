import { createListNode } from '../../utils/ListNode'
import { numComponents } from '.'

describe('817.链表组件', () => {
  it('示例一', () => {
    expect(numComponents(createListNode([0, 1, 2, 3]), [0, 1, 3])).toBe(2)
  })

  it('示例二', () => {
    expect(numComponents(createListNode([0, 1, 2, 3, 4]), [0, 3, 1, 4])).toBe(2)
  })
})
