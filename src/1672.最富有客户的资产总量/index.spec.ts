import { maximumWealth } from '.'

describe('1672.最富有客户的资产总量', () => {
  it('示例一', () => {
    expect(maximumWealth([[1, 5], [7, 3], [3, 5]])).toBe(10)
  })

  it('示例二', () => {
    expect(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toBe(17)
  })

  it('示例三', () => {
    expect(maximumWealth([[1, 2, 3], [3, 2, 1]])).toBe(6)
  })
})
