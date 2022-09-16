import { minIncrementForUnique } from '.'

describe('945.使数组唯一的最小增量', () => {
  it('示例一', () => {
    expect(minIncrementForUnique([1, 2, 2])).toBe(1)
  })

  it('示例二', () => {
    expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6)
  })
})
