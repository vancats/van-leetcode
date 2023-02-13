import { balancedString } from '.'

describe('1234.替换子串得到平衡字符串', () => {
  it('示例一', () => {
    expect(balancedString('QWER')).toBe(0)
  })

  it('示例二', () => {
    expect(balancedString('QQWE')).toBe(1)
  })

  it('示例三', () => {
    expect(balancedString('QQQW')).toBe(2)
  })

  it('示例四', () => {
    expect(balancedString('QQQQ')).toBe(3)
  })
})
