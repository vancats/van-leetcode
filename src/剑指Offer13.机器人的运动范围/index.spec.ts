import { movingCount } from '.'

describe('剑指Offer13.机器人的运动范围', () => {
  it('示例一', () => {
    expect(movingCount(2, 3, 1)).toBe(3)
  })

  it('示例二', () => {
    expect(movingCount(3, 1, 0)).toBe(1)
  })
})
