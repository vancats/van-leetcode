import { minimumLength } from '.'

describe('1750.删除字符串两端相同字符后的最短长度', () => {
  it('示例一', () => {
    expect(minimumLength('ca')).toBe(2)
  })

  it('示例二', () => {
    expect(minimumLength('cabaabac')).toBe(0)
  })

  it('示例三', () => {
    expect(minimumLength('aabccabba')).toBe(3)
  })
})
