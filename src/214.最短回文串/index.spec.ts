import { shortestPalindrome } from '.'

describe('214.最短回文串', () => {
  it('示例一', () => {
    expect(shortestPalindrome('aacecaaa')).toBe('aaacecaaa')
  })

  it('示例二', () => {
    expect(shortestPalindrome('abcd')).toBe('dcbabcd')
  })
})
