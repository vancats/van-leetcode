import { freqAlphabets } from '.'

describe('1309.解码字母到整数映射', () => {
  it('示例一', () => {
    expect(freqAlphabets('10#11#12')).toBe('jkab')
  })

  it('示例二', () => {
    expect(freqAlphabets('1326#')).toBe('acz')
  })
})
