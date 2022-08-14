import { smallestNumber } from '.'

describe('竞赛-根据模式串构造最小数字', () => {
  it('示例一', () => {
    expect(smallestNumber('IIIDIDDD')).toBe('123549876')
  })

  it('示例二', () => {
    expect(smallestNumber('DDD')).toBe('4321')
  })
})
