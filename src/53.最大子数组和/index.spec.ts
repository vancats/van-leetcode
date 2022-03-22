import { maxSubArray, maxSubArray2 } from './index'

describe('53.最大子数组和', () => {
  describe('方法一', () => {
    testCase(maxSubArray)
  })

  describe('方法二', () => {
    testCase(maxSubArray2)
  })
})

function testCase(fn: (nums: number[]) => number) {
  it('示例一', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })

  it('示例二', () => {
    expect(maxSubArray([1])).toBe(1)
  })

  it('示例三', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
  })
}