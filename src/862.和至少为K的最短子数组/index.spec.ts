import { shortestSubarray } from '.'

describe('862.和至少为K的最短子数组', () => {
  it('示例一', () => {
    expect(shortestSubarray([1], 1)).toBe(1)
  })

  it('示例二', () => {
    expect(shortestSubarray([1, 2], 4)).toBe(-1)
  })

  it('示例三', () => {
    expect(shortestSubarray([2, -1, 2], 3)).toBe(3)
  })

  it('示例四', () => {
    expect(shortestSubarray([56, -21, 56, 35, -9], 61)).toBe(2)
  })

  it('示例五', () => {
    expect(shortestSubarray([84, -37, 32, 40, 95], 167)).toBe(3)
  })
})
