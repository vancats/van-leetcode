import { canPartitionKSubsets } from '.'

describe('698.划分为k个相等的子集', () => {
  it('示例一', () => {
    expect(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)).toBe(true)
  })

  it('示例二', () => {
    expect(canPartitionKSubsets([1, 2, 3, 4], 3)).toBe(false)
  })

  it('示例三', () => {
    expect(canPartitionKSubsets([4, 5, 9, 3, 10, 2, 10, 7, 10, 8, 5, 9, 4, 6, 4, 9], 5)).toBe(true)
  })
})
