import { findMaxValueOfEquation } from '.'

describe('1499.满足不等式的最大值', () => {
  it('示例一', () => {
    expect(findMaxValueOfEquation([[1, 3], [2, 0], [5, 10], [6, -10]], 1)).toBe(4)
  })

  it('示例二', () => {
    expect(findMaxValueOfEquation([[0, 0], [3, 0], [9, 2]], 3)).toBe(3)
  })

  it('示例三', () => {
    expect(findMaxValueOfEquation([[-19, 9], [-15, -19], [-5, -8]], 10)).toBe(-6)
  })
})
