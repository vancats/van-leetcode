import { checkDistances } from '.'

describe('竞赛-检查相同字母间的距离', () => {
  it('示例一', () => {
    expect(checkDistances('abaccb', [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(true)
  })

  it('示例二', () => {
    expect(checkDistances('aa', [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(false)
  })
})
