import { mySqrt } from '.'

describe('69.x的平方根', () => {
  it('示例一', () => {
    expect(mySqrt(8)).toBe(2)
  })

  it('示例二', () => {
    expect(mySqrt(2147395599)).toBe(46339)
  })
})
