import { maxArea } from './index'

describe('11.盛最多水的容器', () => {
  it('示例一', () => {
    const expected = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
    expect(expected).toBe(49)
  })

  it('示例二', () => {
    const expected = maxArea([1, 1])
    expect(expected).toBe(1)
  })
})