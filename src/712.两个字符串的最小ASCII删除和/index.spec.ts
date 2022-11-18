import { minimumDeleteSum } from '.'

describe('712.两个字符串的最小ASCII删除和', () => {
  it('示例一', () => {
    expect(minimumDeleteSum('sea', 'eat')).toBe(231)
  })

  it('示例二', () => {
    expect(minimumDeleteSum('delete', 'leet')).toBe(403)
  })
})
