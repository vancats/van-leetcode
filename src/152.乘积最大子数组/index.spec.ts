import { maxProduct } from '.'

describe('152.乘积最大子数组', () => {
  it('示例一', () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6)
  })

  it('示例二', () => {
    expect(maxProduct([-2, 0, -1])).toBe(0)
  })

  it('示例三', () => {
    expect(maxProduct([0, 2])).toBe(2)
  })

  it('示例四', () => {
    expect(maxProduct([-2, 3, -4])).toBe(24)
  })
})
