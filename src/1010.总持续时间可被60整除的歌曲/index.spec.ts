import { numPairsDivisibleBy60 } from '.'

describe('1010.总持续时间可被60整除的歌曲', () => {
  it('示例一', () => {
    expect(numPairsDivisibleBy60([30, 20, 150, 100, 40])).toBe(3)
  })

  it('示例一', () => {
    expect(numPairsDivisibleBy60([60, 60, 60])).toBe(3)
  })
})
