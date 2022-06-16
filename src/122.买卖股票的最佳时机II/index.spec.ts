import { maxProfit } from '.'

describe('122.买卖股票的最佳时机II', () => {
  it('示例一', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
  })

  it('示例二', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  })

  it('示例三', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
