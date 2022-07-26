import { maxProfit } from '.'

describe('309.最佳买卖股票时机含冷冻期', () => {
  it('示例一', () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3)
  })

  it('示例二', () => {
    expect(maxProfit([1])).toBe(0)
  })
})
