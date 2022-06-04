import { myAtoi } from '.'

describe('8.字符串转换整数(atoi)', () => {
  it('示例一', () => {
    expect(myAtoi('42')).toBe(42)
  })

  it('示例二', () => {
    expect(myAtoi('   -42')).toBe(-42)
  })

  it('示例三', () => {
    expect(myAtoi('4193 with words')).toBe(4193)
  })
})
