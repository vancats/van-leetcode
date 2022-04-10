import { hasAlternatingBits } from './index'

describe('693.交替位二进制数', () => {
  it('示例一', () => {
    expect(hasAlternatingBits(5)).toBe(true)
  })

  it('示例二', () => {
    expect(hasAlternatingBits(7)).toBe(false)
  })

  it('示例三', () => {
    expect(hasAlternatingBits(11)).toBe(false)
  })
})
