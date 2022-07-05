import { lengthOfLongestSubstring } from '.'

describe('3.无重复字符的最长子串', () => {
  it('示例一', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  it('示例二', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  it('示例三', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})
