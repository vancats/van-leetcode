import { maxRotateFunction } from '.'

describe('396.旋转函数', () => {
  it('示例一', () => {
    expect(maxRotateFunction([4, 3, 2, 6])).toBe(26)
  })

  it('示例二', () => {
    expect(maxRotateFunction([100])).toBe(0)
  })
})
