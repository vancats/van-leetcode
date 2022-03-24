import { rangeSum } from "."

describe('1508.子数组和排序后的区间和', () => {
  it('示例一', () => {
    expect(rangeSum([1, 2, 3, 4], 4, 1, 5)).toBe(13)
  })

  it('示例二', () => {
    expect(rangeSum([1, 2, 3, 4], 4, 3, 4)).toBe(6)
  })

  it('示例三', () => {
    expect(rangeSum([1, 2, 3, 4], 4, 1, 10)).toBe(50)
  })
})