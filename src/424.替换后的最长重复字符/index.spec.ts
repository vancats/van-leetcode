import { characterReplacement } from '.'

describe('424.替换后的最长重复字符', () => {
  it('示例一', () => {
    expect(characterReplacement('ABAB', 2)).toBe(4)
  })

  it('示例二', () => {
    expect(characterReplacement('AABABBA', 1)).toBe(4)
  })
})
