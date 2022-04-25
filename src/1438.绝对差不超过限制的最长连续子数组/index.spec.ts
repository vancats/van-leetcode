import { longestSubarray } from '.'

describe('1438.绝对差不超过限制的最长连续子数组', () => {
  it('示例一', () => {
    expect(longestSubarray([8, 2, 4, 7], 4)).toBe(2)
  })

  it('示例二', () => {
    expect(longestSubarray([10, 1, 2, 4, 7, 2], 5)).toBe(4)
  })

  it('示例三', () => {
    expect(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)).toBe(3)
  })
})
