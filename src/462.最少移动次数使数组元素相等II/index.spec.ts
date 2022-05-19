import { minMoves2 } from '.'

describe('462.最少移动次数使数组元素相等II', () => {
  it('示例一', () => {
    expect(minMoves2([1, 2, 3])).toBe(2)
  })

  it('示例二', () => {
    expect(minMoves2([1, 10, 2, 9])).toBe(16)
  })

  it('示例二', () => {
    expect(minMoves2([1, 0, 0, 8, 6])).toBe(14)
  })
})
