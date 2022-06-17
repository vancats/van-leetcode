import { rob } from '.'

describe('198.打家劫舍', () => {
  it('示例一', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
  })

  it('示例二', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12)
  })
})
