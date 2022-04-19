import { findTargetSumWays, findTargetSumWays1 } from '.'

describe('494.目标和', () => {
  describe('dfs 函数化', () => {
    testCase(findTargetSumWays)
  })

  describe('dfs 数组化', () => {
    testCase(findTargetSumWays1)
  })
})

function testCase(fn: (nums: number[], target: number) => number) {
  it('示例一', () => {
    expect(fn([1, 1, 1, 1, 1], 3)).toBe(5)
  })

  it('示例二', () => {
    expect(fn([1], 1)).toBe(1)
  })
}
