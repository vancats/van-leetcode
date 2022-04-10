import { hIndex } from '.'

describe('274.H指数', () => {
  it('示例一', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3)
  })

  it('示例二', () => {
    expect(hIndex([1, 3, 1])).toBe(1)
  })
})
