import { createListNode } from '../../utils/ListNode'
import { addTwoNumbers } from '.'

describe('面试题02.05.链表求和', () => {
  it('示例', () => {
    expect(addTwoNumbers(createListNode([7, 1, 6]), createListNode([5, 9, 2]))).toStrictEqual(createListNode([2, 1, 9]))
  })
})
