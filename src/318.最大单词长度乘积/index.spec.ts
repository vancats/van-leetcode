import { maxProduct } from '.'

describe('318.最大单词长度乘积', () => {
  it('示例一', () => {
    expect(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])).toBe(16)
  })

  it('示例二', () => {
    expect(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'])).toBe(4)
  })

  it('示例三', () => {
    expect(maxProduct(['a', 'aa', 'aaa', 'aaaa'])).toBe(0)
  })
})
