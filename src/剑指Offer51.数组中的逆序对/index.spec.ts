import { reversePairs } from './index'

describe('剑指Offer51.数组中的逆序对', () => {
  it('示例一', () => {
    expect(reversePairs([7, 5, 6, 4])).toBe(5)
  })

  it('示例二', () => {
    expect(reversePairs([1, 3, 2, 3, 1])).toBe(4)
  })
})
