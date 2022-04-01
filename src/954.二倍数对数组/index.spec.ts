import { canReorderDoubled } from "."

describe('954.二倍数对数组', () => {
  it('示例一', () => {
    expect(canReorderDoubled([3, 1, 3, 6])).toBe(false)
  })

  it('示例二', () => {
    expect(canReorderDoubled([2, 1, 2, 6])).toBe(false)
  })

  it('示例三', () => {
    expect(canReorderDoubled([4, -2, 2, -4])).toBe(true)
  })

  it('示例四', () => {
    expect(canReorderDoubled([1, 2, 4, 16, 8, 4])).toBe(false)
  })

  it('示例五', () => {
    expect(canReorderDoubled([2, 4, 0, 0, 8, 1])).toBe(true)
  })

  it('示例六', () => {
    expect(canReorderDoubled([-5, -3])).toBe(false)
  })
})