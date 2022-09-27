import { minimumLengthEncoding } from '.'

describe('820.单词的压缩编码', () => {
  it('示例一', () => {
    expect(minimumLengthEncoding(['time', 'me', 'bell'])).toBe(10)
  })

  it('示例二', () => {
    expect(minimumLengthEncoding(['t'])).toBe(2)
  })
})
