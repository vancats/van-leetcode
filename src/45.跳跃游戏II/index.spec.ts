import { jump } from '.'

describe('45.跳跃游戏II', () => {
  it('示例一', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2)
  })

  it('示例二', () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2)
  })
})
