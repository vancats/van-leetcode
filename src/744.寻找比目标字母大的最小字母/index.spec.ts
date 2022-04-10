import { nextGreatestLetter } from '.'

describe('744.寻找比目标字母大的最小字母', () => {
  it('示例一', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c')
  })

  it('示例二', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f')
  })

  it('示例三', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'd')).toBe('f')
  })
})
