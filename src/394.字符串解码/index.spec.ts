import { decodeString } from './index'

describe('394.字符串解码', () => {
  it('示例一', () => {
    const result = decodeString('3[a]2[bc]')
    expect(result).toBe('aaabcbc')
  })

  it('示例二', () => {
    const result = decodeString('3[a2[c]]')
    expect(result).toBe('accaccacc')
  })

  it('示例三', () => {
    const result = decodeString('2[abc]3[cd]ef')
    expect(result).toBe('abcabccdcdcdef')
  })

  it('示例四', () => {
    const result = decodeString('abc3[cd]xyz')
    expect(result).toBe('abccdcdcdxyz')
  })

  it('示例五', () => {
    const result = decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')
    expect(result).toBe('zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef')
  })
})
