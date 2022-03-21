import { smallestK } from './index'

describe('面试题17.14.最小K个数', () => {
  it('示例', () => {
    const arr = [1, 3, 5, 7, 2, 4, 6, 8]
    const result = smallestK(arr, 4)
    expect(result).toStrictEqual([1, 2, 3, 4])
  })
})
