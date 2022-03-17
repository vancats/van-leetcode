import { climbStairs } from './index'

describe('70.爬楼梯', () => {
  it('示例一', () => {
    const expected = climbStairs(2)
    expect(expected).toBe(2)
  })

  it('示例二', () => {
    const expected = climbStairs(3)
    expect(expected).toBe(3)
  })
})