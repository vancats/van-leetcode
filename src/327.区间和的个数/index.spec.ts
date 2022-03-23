import { countRangeSum } from './index'

describe('327.区间和的个数', () => {
  it('示例一', () => {
    const result = countRangeSum([-2, 5, -1], -2, 2)
    expect(result).toBe(3)
  })

  it('示例二', () => {
    const result = countRangeSum([0], 0, 0)
    expect(result).toBe(1)
  })
})