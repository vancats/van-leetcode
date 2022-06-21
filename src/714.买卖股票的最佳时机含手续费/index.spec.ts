import { maxProfit } from '.'

describe('714.买卖股票的最佳时机含手续费', () => {
  it('示例一', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8)
  })

  it('示例二', () => {
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6)
  })
})
