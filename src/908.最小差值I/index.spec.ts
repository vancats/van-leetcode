import { smallestRangeI } from '.'

describe('908.最小差值I', () => {
  it('示例一', () => {
    expect(smallestRangeI([1], 0)).toBe(0)
  })

  it('示例二', () => {
    expect(smallestRangeI([0, 10], 2)).toBe(6)
  })

  it('示例三', () => {
    expect(smallestRangeI([1, 3, 6], 3)).toBe(0)
  })
})
