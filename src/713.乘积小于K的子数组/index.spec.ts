import { numSubarrayProductLessThanK } from '.'

describe('713.乘积小于K的子数组', () => {
  describe('滑动窗口', () => {
    testCase(numSubarrayProductLessThanK)
  })
})

function testCase(fn: (nums: number[], k: number) => number) {
  it('示例一', () => {
    expect(fn([10, 5, 2, 6], 100)).toBe(8)
  })

  it('示例二', () => {
    expect(fn([1, 2, 3], 0)).toBe(0)
  })

  it('示例三', () => {
    expect(fn([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19)).toBe(18)
  })

  it('示例四', () => {
    expect(fn([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289)).toBe(31)
  })
}
