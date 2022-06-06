import { smallestSubsequence } from '.'

describe('1081.不同字符的最小子序列', () => {
  it('示例一', () => {
    expect(smallestSubsequence('bcabc')).toBe('abc')
  })

  it('示例二', () => {
    expect(smallestSubsequence('cbacdcbc')).toBe('acdb')
  })

  it('示例三', () => {
    expect(smallestSubsequence('cbaacabcaaccaacababa')).toBe('abc')
  })

  it('示例四', () => {
    expect(smallestSubsequence('bcbcbcababa')).toBe('bca')
  })
})
