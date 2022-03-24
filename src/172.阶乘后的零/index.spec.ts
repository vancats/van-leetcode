import { trailingZeroes } from './index'

describe('172.阶乘后的零', () => {
  it('示例一', () => {
    expect(trailingZeroes(3)).toBe(0)
  })

  it('示例二', () => {
    expect(trailingZeroes(5)).toBe(1)
  })

  it('示例三', () => {
    expect(trailingZeroes(0)).toBe(0)
  })
})