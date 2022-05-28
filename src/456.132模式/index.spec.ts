import { find132pattern } from '.'

describe('456.132模式', () => {
  it('示例一', () => {
    expect(find132pattern([1, 2, 3, 4])).toBe(false)
  })

  it('示例二', () => {
    expect(find132pattern([3, 1, 4, 2])).toBe(true)
  })

  it('示例三', () => {
    expect(find132pattern([-1, 3, 2, 0])).toBe(true)
  })

  it('示例四', () => {
    expect(find132pattern([2, 4, 3, 1])).toBe(true)
  })
})
