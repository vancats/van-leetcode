import { searchRange } from "."

describe('34.在排序数组中查找元素的第一个和最后一个位置', () => {
  it('示例一', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
  })

  it('示例二', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
  })

  it('示例三', () => {
    expect(searchRange([1, 3, 5, 6], 5)).toEqual([2, 2])
  })

  it('示例四', () => {
    expect(searchRange([], 0)).toEqual([-1, -1])
  })

  it('示例五', () => {
    expect(searchRange([1], 1)).toEqual([0, 0])
  })
})
