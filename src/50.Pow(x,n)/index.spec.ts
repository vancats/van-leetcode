import { myPow } from './index'

describe('50.Pow(x,n)', () => {
  it('示例一', () => {
    expect(myPow(2.00000, 10)).toBe(1024.00000)
  })

  it('示例二', () => {
    expect(myPow(2.00000, -2)).toBe(0.25000)
  })
})