import { search } from "."

describe('33.搜索旋转排序数组', () => {
  it('示例一', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  })

  it('示例二', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  })

  it('示例三', () => {
    expect(search([1], 0)).toBe(-1)
  })

  it('示例四', () => {
    expect(search([1], 0)).toBe(-1)
  })
  it('示例五', () => {
    expect(search([4, 5, 6, 7, 8, 1, 2, 3], 8)).toBe(4)
  })

  it('示例六', () => {
    expect(search([5, 1, 2, 3, 4], 1)).toBe(1)
  })
})