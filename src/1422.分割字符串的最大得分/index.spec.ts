import { maxScore } from '.'

describe('1422.分割字符串的最大得分', () => {
  it('示例一', () => {
    expect(maxScore('011101')).toBe(5)
  })

  it('示例二', () => {
    expect(maxScore('00111')).toBe(5)
  })

  it('示例三', () => {
    expect(maxScore('1111')).toBe(3)
  })
})
