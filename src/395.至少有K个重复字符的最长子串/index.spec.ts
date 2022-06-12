import { longestSubstring } from '.'

describe('395.至少有K个重复字符的最长子串', () => {
  it('示例一', () => {
    expect(longestSubstring('aaabb', 3)).toBe(3)
  })

  it('示例二', () => {
    expect(longestSubstring('ababbc', 2)).toBe(5)
  })

  it('示例三', () => {
    expect(longestSubstring('aaabbb', 3)).toBe(6)
  })

  it('示例四', () => {
    expect(longestSubstring('ababacb', 3)).toBe(0)
  })
})
