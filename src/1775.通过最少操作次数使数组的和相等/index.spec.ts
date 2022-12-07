import { minOperations } from '.'

describe('1775.通过最少操作次数使数组的和相等', () => {
  it('示例一', () => {
    expect(minOperations([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2])).toBe(3)
  })

  it('示例二', () => {
    expect(minOperations([1, 1, 1, 1, 1, 1, 1], [6])).toBe(-1)
  })

  it('示例三', () => {
    expect(minOperations([6, 6], [1])).toBe(3)
  })

  it('示例四', () => {
    expect(minOperations([5, 6, 4, 3, 1, 2], [6, 3, 3, 1, 4, 5, 3, 4, 1, 3, 4])).toBe(4)
  })
})
