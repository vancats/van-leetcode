import { removeDuplicateLetters } from '.'

describe('316.去除重复字母', () => {
  it('示例一', () => {
    expect(removeDuplicateLetters('bcabc')).toBe('abc')
  })

  it('示例二', () => {
    expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb')
  })

  it('示例三', () => {
    expect(removeDuplicateLetters('cbaacabcaaccaacababa')).toBe('abc')
  })

  it('示例四', () => {
    expect(removeDuplicateLetters('bcbcbcababa')).toBe('bca')
  })
})
