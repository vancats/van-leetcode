import { minCost } from '.'

describe('剑指OfferII091.粉刷房子', () => {
  it('示例一', () => {
    expect(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])).toBe(10)
  })

  it('示例二', () => {
    expect(minCost([[7, 6, 2]])).toBe(2)
  })
})
