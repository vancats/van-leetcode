import { decodeString } from './index'

describe('394.字符串解码', () => {
  it('示例一', () => {
    const expected = decodeString('3[a]2[bc]')
    expect(expected).toBe('aaabcbc')
  })

  it('示例二', () => {
    const expected = decodeString('3[a2[c]]')
    expect(expected).toBe('accaccacc')
  })

  it('示例三', () => {
    const expected = decodeString('2[abc]3[cd]ef')
    expect(expected).toBe('abcabccdcdcdef')
  })

  it('示例四', () => {
    const expected = decodeString('abc3[cd]xyz')
    expect(expected).toBe('abccdcdcdxyz')
  })


  it('示例五', () => {
    const expected = decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')
    expect(expected).toBe('zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef')
  })
})
