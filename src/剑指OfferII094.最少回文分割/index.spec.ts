import { minCut, minCut2, minCut3 } from '.'

describe('剑指OfferII094.最少回文分割', () => {
  describe('普通dp', () => {
    testCase(minCut)
  })
  describe('dp + 记忆化搜索', () => {
    testCase(minCut2)
  })

  describe('dp + 回文预处理', () => {
    testCase(minCut3)
  })
})

function testCase(fn: (s: string) => number) {
  it('示例一', () => {
    expect(fn('aab')).toBe(1)
  })

  it('示例二', () => {
    expect(fn('a')).toBe(0)
  })

  it('示例三', () => {
    expect(fn('ab')).toBe(1)
  })
}
