import { minCostClimbingStairs, minCostClimbingStairs2 } from '.'

describe('746.使用最小花费爬楼梯', () => {
  describe('dp', () => {
    testCase(minCostClimbingStairs)
  })

  describe('dp + 滚动数组', () => {
    testCase(minCostClimbingStairs2)
  })
})

function testCase(fn: (cost: number[]) => number) {
  it('示例一', () => {
    expect(fn([10, 15, 20])).toBe(15)
  })

  it('示例二', () => {
    expect(fn([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
  })
}
