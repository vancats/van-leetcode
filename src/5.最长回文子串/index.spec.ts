import { longestPalindrome } from '.'

describe('5.最长回文子串', () => {
  it('示例一', () => {
    expect(longestPalindrome('babad')).toBe('bab')
  })

  it('示例二', () => {
    expect(longestPalindrome('cbbd')).toBe('bb')
  })
})
