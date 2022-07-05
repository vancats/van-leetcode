import { repeatedSubstringPattern, repeatedSubstringPattern2 } from '.'

describe('459.重复的子字符串', () => {
  describe('暴力解', () => {
    testCase(repeatedSubstringPattern)
  })

  describe('KMP next', () => {
    testCase(repeatedSubstringPattern2)
  })
})

function testCase(fn: (s: string) => boolean) {
  it('示例一', () => {
    expect(fn('abab')).toBe(true)
  })

  it('示例二', () => {
    expect(fn('aba')).toBe(false)
  })

  it('示例三', () => {
    expect(fn('abcabcabcabc')).toBe(true)
  })
}
