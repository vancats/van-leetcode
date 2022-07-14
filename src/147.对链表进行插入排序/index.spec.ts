import { createListNode } from '../../utils/ListNode'
import { insertionSortList } from '.'

describe('147.对链表进行插入排序', () => {
  it('示例一', () => {
    expect(insertionSortList(createListNode([4, 2, 3, 1]))).toStrictEqual(createListNode([1, 2, 3, 4]))
  })

  it('示例二', () => {
    expect(insertionSortList(createListNode([-1, 5, 3, 4, 0]))).toStrictEqual(createListNode([-1, 0, 3, 4, 5]))
  })
})
