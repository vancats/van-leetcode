import { canChoose } from '.'

describe('1764.通过连接另一个数组的子数组得到一个数组', () => {
  it('示例一', () => {
    expect(canChoose([[1, -1, -1], [3, -2, 0]], [1, -1, 0, 1, -1, -1, 3, -2, 0])).toBe(true)
  })

  it('示例二', () => {
    expect(canChoose([[10, -2], [1, 2, 3, 4]], [1, 2, 3, 4, 10, -2])).toBe(false)
  })
})
