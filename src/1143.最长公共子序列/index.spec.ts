import { longestCommonSubsequence } from '.'

describe('1143.最长公共子序列', () => {
  it('示例一', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3)
  })

  it('示例二', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3)
  })

  it('示例三', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0)
  })

  it('示例四', () => {
    expect(longestCommonSubsequence('ezupkr', 'ubmrapg')).toBe(2)
  })
})
