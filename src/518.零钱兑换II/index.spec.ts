import { change } from '.'

describe('518.零钱兑换II', () => {
  it('示例一', () => {
    expect(change(5, [1, 2, 5])).toBe(4)
  })

  it('示例二', () => {
    expect(change(3, [2])).toBe(0)
  })

  it('示例三', () => {
    expect(change(10, [10])).toBe(1)
  })
})
