import { orderOfLargestPlusSign } from '.'

describe('764.最大加号标志', () => {
  it('示例一', () => {
    expect(orderOfLargestPlusSign(5, [[4, 2]])).toBe(2)
  })

  it('示例二', () => {
    expect(orderOfLargestPlusSign(1, [[0, 0]])).toBe(0)
  })
})
