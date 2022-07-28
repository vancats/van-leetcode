import { arrayRankTransform } from '.'

describe('1331.数组序号转换', () => {
  it('示例一', () => {
    expect(arrayRankTransform([40, 10, 20, 30])).toStrictEqual([4, 1, 2, 3])
  })

  it('示例二', () => {
    expect(arrayRankTransform([100, 100, 100])).toStrictEqual([1, 1, 1])
  })

  it('示例三', () => {
    expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])).toStrictEqual([5, 3, 4, 2, 8, 6, 7, 1, 3])
  })
})
