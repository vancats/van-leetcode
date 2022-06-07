import { totalFruit } from '.'

describe('904.水果成篮', () => {
  it('示例一', () => {
    expect(totalFruit([1, 2, 1])).toBe(3)
  })

  it('示例二', () => {
    expect(totalFruit([0, 1, 2, 2])).toBe(3)
  })

  it('示例三', () => {
    expect(totalFruit([1, 2, 3, 2, 2])).toBe(4)
  })

  it('示例四', () => {
    expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5)
  })
})
