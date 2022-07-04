import { minimumAbsDifference } from '.'

describe('1200.最小绝对差', () => {
  it('示例一', () => {
    expect(minimumAbsDifference([4, 2, 1, 3])).toStrictEqual([[1, 2], [2, 3], [3, 4]])
  })

  it('示例二', () => {
    expect(minimumAbsDifference([1, 3, 6, 10, 15])).toStrictEqual([[1, 3]])
  })

  it('示例三', () => {
    expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toStrictEqual([[-14, -10], [19, 23], [23, 27]])
  })
})
