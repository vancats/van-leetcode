import { isAlienSorted } from '.'

describe('953.验证外星语词典', () => {
  it('示例一', () => {
    expect(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')).toBe(true)
  })

  it('示例二', () => {
    expect(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')).toBe(false)
  })

  it('示例三', () => {
    expect(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')).toBe(false)
  })

  it('示例四', () => {
    expect(isAlienSorted(['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz')).toBe(true)
  })
})
