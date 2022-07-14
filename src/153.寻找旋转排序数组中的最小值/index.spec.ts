import { findMin } from '.'

describe('153.寻找旋转排序数组中的最小值', () => {
  it('示例一', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1)
  })

  it('示例二', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0)
  })

  it('示例三', () => {
    expect(findMin([11, 13, 15, 17])).toBe(11)
  })
})
