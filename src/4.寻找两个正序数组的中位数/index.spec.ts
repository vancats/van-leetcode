import { findMedianSortedArrays } from "."

describe('4.寻找两个正序数组的中位数', () => {
  it('示例一', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2)
  })

  it('示例二', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5)
  })

  it('示例三', () => {
    expect(findMedianSortedArrays([2, 3, 4, 5, 6], [1])).toBe(3.5)
  })
})
