import { diStringMatch } from '.'

describe('942.增减字符串匹配', () => {
  it('示例一', () => {
    expect(diStringMatch('IDID')).toStrictEqual([0, 4, 1, 3, 2])
  })

  it('示例二', () => {
    expect(diStringMatch('III')).toStrictEqual([0, 1, 2, 3])
  })

  it('示例三', () => {
    expect(diStringMatch('DDI')).toStrictEqual([3, 2, 0, 1])
  })
})
