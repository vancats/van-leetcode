import { search } from "."

describe('81.搜索旋转排序数组II', () => {
  it('示例一', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true)
  })

  it('示例二', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false)
  })

  it('示例三', () => {
    expect(search([1, 0, 1, 1, 1], 0)).toBe(true)
  })

  it('示例四', () => {
    expect(search([1], 1)).toBe(true)
  })

  it('示例五', () => {
    expect(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)).toBe(true)
  })
})
