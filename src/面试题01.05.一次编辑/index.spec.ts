import { oneEditAway } from '.'

describe('面试题01.05.一次编辑', () => {
  it('示例一', () => {
    expect(oneEditAway('pale', 'ple')).toBe(true)
  })

  it('示例二', () => {
    expect(oneEditAway('pales', 'pal')).toBe(false)
  })

  it('示例三', () => {
    expect(oneEditAway('teacher', 'treacher')).toBe(true)
  })
})
