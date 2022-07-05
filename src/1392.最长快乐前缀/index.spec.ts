import { longestPrefix } from '.'

describe('1392.最长快乐前缀', () => {
  it('示例一', () => {
    expect(longestPrefix('level')).toBe('l')
  })

  it('示例二', () => {
    expect(longestPrefix('ababab')).toBe('abab')
  })
})
