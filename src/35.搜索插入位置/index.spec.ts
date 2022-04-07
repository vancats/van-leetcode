import { searchInsert } from "."

describe('35.搜索插入位置', () => {
  it('示例一', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })

  it('示例二', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  })

  it('示例三', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
})
