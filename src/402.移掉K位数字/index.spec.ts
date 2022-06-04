import { removeKdigits } from '.'

describe('402.移掉K位数字', () => {
  it('示例一', () => {
    expect(removeKdigits('1432219', 3)).toBe('1219')
  })

  it('示例二', () => {
    expect(removeKdigits('10200', 1)).toBe('200')
  })

  it('示例三', () => {
    expect(removeKdigits('10', 2)).toBe('0')
  })

  it('示例四', () => {
    expect(removeKdigits('1173', 2)).toBe('11')
  })
})
