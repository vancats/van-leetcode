import { candy } from '.'

describe('135.分发糖果', () => {
  it('示例一', () => {
    expect(candy([1, 0, 2])).toBe(5)
  })

  it('示例二', () => {
    expect(candy([1, 2, 2])).toBe(4)
  })
})
