import { reverseStr } from '.'

describe('541.反转字符串II', () => {
  it('示例一', () => {
    expect(reverseStr('abcdefg', 2)).toBe('bacdfeg')
  })

  it('示例二', () => {
    expect(reverseStr('abcd', 2)).toBe('bacd')
  })
})
