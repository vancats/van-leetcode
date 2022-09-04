import { numberOfWays } from '.'

describe('竞赛-恰好移动k步到达某一位置的方法数目', () => {
  it('示例一', () => {
    expect(numberOfWays(1, 2, 3)).toBe(3)
  })

  it('示例一', () => {
    expect(numberOfWays(2, 5, 10)).toBe(0)
  })
})
