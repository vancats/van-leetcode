import { frequencySort } from '.'

describe('1636.按照频率将数组升序排序', () => {
  it('示例一', () => {
    expect(frequencySort([1, 1, 2, 2, 2, 3])).toStrictEqual([3, 1, 1, 2, 2, 2])
  })

  it('示例二', () => {
    expect(frequencySort([1, 1, 2, 2, 2, 3])).toStrictEqual([3, 1, 1, 2, 2, 2])
  })

  it('示例三', () => {
    expect(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])).toStrictEqual([5, -1, 4, 4, -6, -6, 1, 1, 1])
  })
})
