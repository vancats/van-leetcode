import { maxLengthBetweenEqualCharacters } from '.'

describe('1624.两个相同字符之间的最长子字符串', () => {
  it('示例一', () => {
    expect(maxLengthBetweenEqualCharacters('aa')).toBe(0)
  })

  it('示例二', () => {
    expect(maxLengthBetweenEqualCharacters('abca')).toBe(2)
  })

  it('示例三', () => {
    expect(maxLengthBetweenEqualCharacters('cbzxy')).toBe(-1)
  })

  it('示例四', () => {
    expect(maxLengthBetweenEqualCharacters('cabbac')).toBe(4)
  })
})
