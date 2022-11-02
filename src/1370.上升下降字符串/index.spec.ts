import { sortString } from '.'

describe('1370.上升下降字符串', () => {
  it('示例一', () => {
    expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba')
  })

  it('示例二', () => {
    expect(sortString('rat')).toBe('art')
  })

  it('示例三', () => {
    expect(sortString('leetcode')).toBe('cdelotee')
  })

  it('示例四', () => {
    expect(sortString('ggggggg')).toBe('ggggggg')
  })

  it('示例五', () => {
    expect(sortString('spo')).toBe('ops')
  })
})
