import { minEatingSpeed } from './index'

describe('875.爱吃香蕉的珂珂', () => {
  it('示例一', () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4)
  })

  it('示例二', () => {
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30)
  })

  it('示例三', () => {
    expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23)
  })
})
