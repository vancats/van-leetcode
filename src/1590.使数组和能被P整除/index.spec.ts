import { minSubarray } from '.'

describe('1590.使数组和能被P整除', () => {
  it('示例一', () => {
    expect(minSubarray([3, 1, 4, 2], 6)).toBe(1)
  })

  it('示例二', () => {
    expect(minSubarray([6, 3, 5, 2], 9)).toBe(2)
  })

  it('示例三', () => {
    expect(minSubarray([1, 2, 3], 3)).toBe(0)
  })

  it('示例四', () => {
    expect(minSubarray([1, 2, 3], 7)).toBe(-1)
  })

  it('示例五', () => {
    expect(minSubarray([1000000000, 1000000000, 1000000000], 3)).toBe(0)
  })
})
