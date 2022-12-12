import { beautySum } from '.'

describe('1781.所有子字符串美丽值之和', () => {
  it('示例一', () => {
    expect(beautySum('aabcb')).toBe(5)
  })

  it('示例二', () => {
    expect(beautySum('aabcbaa')).toBe(17)
  })
})
