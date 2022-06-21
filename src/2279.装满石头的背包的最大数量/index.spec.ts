import { maximumBags } from '.'

describe('2279.装满石头的背包的最大数量', () => {
  it('示例一', () => {
    expect(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2)).toBe(3)
  })

  it('示例二', () => {
    expect(maximumBags([10, 2, 2], [2, 2, 0], 100)).toBe(3)
  })
})
