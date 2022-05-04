import { findTheWinner } from '.'

describe('1823.找出游戏的获胜者', () => {
  it('示例一', () => {
    expect(findTheWinner(5, 2)).toBe(3)
  })

  it('示例二', () => {
    expect(findTheWinner(6, 5)).toBe(1)
  })
})
