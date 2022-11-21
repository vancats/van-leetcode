import { soupServings, soupServings1 } from '.'

describe('808.分汤', () => {
  describe('动态规划', () => {
    test(soupServings)
  })

  describe('记忆化搜索', () => {
    test(soupServings1)
  })
})

function test(fn: (n: number) => number) {
  it('示例一', () => {
    expect(fn(50)).toBe(0.625)
  })

  it('示例二', () => {
    expect(fn(100)).toBe(0.71875)
  })
}
