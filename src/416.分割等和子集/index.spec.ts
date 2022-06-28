import { canPartition, canPartition2 } from '.'

describe('416.分割等和子集', () => {
  describe('Set 解法', () => {
    testCase(canPartition)
  })

  describe('dp 解法', () => {
    testCase(canPartition2)
  })
})

function testCase(fn: (nums: number[]) => boolean) {
  it('示例一', () => {
    expect(fn([1, 5, 11, 5])).toBe(true)
  })

  it('示例二', () => {
    expect(fn([1, 2, 3, 5])).toBe(false)
  })
}
