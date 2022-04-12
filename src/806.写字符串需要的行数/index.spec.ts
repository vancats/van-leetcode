import { numberOfLines } from '.'

describe('806.写字符串需要的行数', () => {
  it('示例一', () => {
    const widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    expect(numberOfLines(widths, 'abcdefghijklmnopqrstuvwxyz')).toStrictEqual([3, 60])
  })

  it('示例二', () => {
    const widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    expect(numberOfLines(widths, 'bbbcccdddaaa')).toStrictEqual([2, 4])
  })
})
