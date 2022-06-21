import { rob } from '.'

describe('213.打家劫舍II', () => {
  it('示例一', () => {
    expect(rob([2, 3, 2])).toBe(3)
  })

  it('示例二', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
  })

  it('示例三', () => {
    expect(rob([1, 2, 3])).toBe(3)
  })
})
