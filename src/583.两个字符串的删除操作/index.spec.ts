import { minDistance } from '.'

describe('583.两个字符串的删除操作', () => {
  it('示例一', () => {
    expect(minDistance('sea', 'eat')).toBe(2)
  })

  it('示例二', () => {
    expect(minDistance('leetcode', 'etco')).toBe(4)
  })
})
