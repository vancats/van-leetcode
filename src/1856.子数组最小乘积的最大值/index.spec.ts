import { maxSumMinProduct } from '.'

describe('1856.子数组最小乘积的最大值', () => {
  it('示例一', () => {
    expect(maxSumMinProduct([1, 2, 3, 2])).toBe(14)
  })

  it('示例二', () => {
    expect(maxSumMinProduct([2, 3, 3, 1, 2])).toBe(18)
  })

  it('示例三', () => {
    expect(maxSumMinProduct([3, 1, 5, 6, 4, 2])).toBe(60)
  })
})
