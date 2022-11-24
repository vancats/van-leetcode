import { numSubarrayBoundedMax } from '.'

describe('795.区间子数组个数', () => {
  it('示例一', () => {
    expect(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3)).toBe(3)
  })

  it('示例二', () => {
    expect(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8)).toBe(7)
  })

  it('示例三', () => {
    expect(numSubarrayBoundedMax([16, 69, 88, 85, 79, 87, 37, 33, 39, 34], 55, 57)).toBe(0)
  })

  it('示例四', () => {
    expect(numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69)).toBe(22)
  })

  it('示例五', () => {
    expect(numSubarrayBoundedMax([34, 46, 51, 92, 50, 61, 49, 82, 4, 4], 18, 84)).toBe(24)
  })
})
