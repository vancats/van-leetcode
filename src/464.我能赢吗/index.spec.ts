import { canIWin } from '.'

describe('464.我能赢吗', () => {
  it('示例一', () => {
    expect(canIWin(10, 11)).toBe(false)
  })

  it('示例二', () => {
    expect(canIWin(10, 0)).toBe(true)
  })

  it('示例三', () => {
    expect(canIWin(10, 1)).toBe(true)
  })

  it('示例四', () => {
    expect(canIWin(10, 40)).toBe(false)
  })
})
