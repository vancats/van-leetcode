import { createListNode } from '../../utils/ListNode'
import { addTwoNumbers } from '.'

describe('445.两数相加II', () => {
  it('示例一', () => {
    expect(addTwoNumbers(createListNode([7, 2, 4, 3]), createListNode([5, 6, 4]))).toStrictEqual(createListNode([7, 8, 0, 7]))
  })

  it('示例二', () => {
    expect(addTwoNumbers(createListNode([2, 4, 3]), createListNode([5, 6, 4]))).toStrictEqual(createListNode([8, 0, 7]))
  })

  it('示例三', () => {
    expect(addTwoNumbers(createListNode([0]), createListNode([0]))).toStrictEqual(createListNode([0]))
  })
})
