import { longestNiceSubstring } from '.'

describe('1763.最长的美好子字符串', () => {
  it('示例一', () => {
    expect(longestNiceSubstring('YazaAay')).toBe('aAa')
  })

  it('示例二', () => {
    expect(longestNiceSubstring('Bb')).toBe('Bb')
  })

  it('示例三', () => {
    expect(longestNiceSubstring('c')).toBe('')
  })

  it('示例四', () => {
    expect(longestNiceSubstring('dDzeE')).toBe('dD')
  })
})
