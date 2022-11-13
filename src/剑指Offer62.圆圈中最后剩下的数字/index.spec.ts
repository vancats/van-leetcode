import { lastRemaining } from '.'

describe('剑指Offer62.圆圈中最后剩下的数字', () => {
  it('示例一', () => {
    expect(lastRemaining(5, 3)).toBe(3)
  })

  it('示例二', () => {
    expect(lastRemaining(10, 17)).toBe(2)
  })
})
