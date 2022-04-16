import { giveGem } from '.'

describe('竞赛-宝石补给', () => {
  it('示例一', () => {
    expect(giveGem([3, 1, 2], [[0, 2], [2, 1], [2, 0]])).toBe(2)
  })

  it('示例二', () => {
    expect(giveGem([100, 0, 50, 100], [[0, 2], [0, 1], [3, 0], [3, 0]])).toBe(75)
  })

  it('示例三', () => {
    expect(giveGem([0, 0, 0, 0], [[1, 2], [3, 1], [1, 2]])).toBe(0)
  })
})
