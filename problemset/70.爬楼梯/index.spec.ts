import { climbStairs } from './index'

describe('70.爬楼梯', () => {
  it('示例一', () => {
    const result = climbStairs(2)
    expect(result).toBe(2)
  })

  it('示例二', () => {
    const result = climbStairs(3)
    expect(result).toBe(3)
  })
})