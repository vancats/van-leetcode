import { makesquare } from '.'

describe('473.火柴拼正方形', () => {
  it('示例一', () => {
    expect(makesquare([1, 1, 2, 2, 2])).toBe(true)
  })

  it('示例二', () => {
    expect(makesquare([3, 3, 3, 3, 4])).toBe(false)
  })
})
