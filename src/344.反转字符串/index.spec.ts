import { reverseString } from './index'

describe('344.反转字符串', () => {
  it('示例一', () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toStrictEqual(["o", "l", "l", "e", "h"])
  })

  it('示例二', () => {
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toStrictEqual(["h", "a", "n", "n", "a", "H"])
  })
})