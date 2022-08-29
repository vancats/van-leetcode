import { shuffle } from '.'

describe('1470.重新排列数组', () => {
  it('示例一', () => {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toStrictEqual([2, 3, 5, 4, 1, 7])
  })

  it('示例二', () => {
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toStrictEqual([1, 4, 2, 3, 3, 2, 4, 1])
  })

  it('示例三', () => {
    expect(shuffle([1, 1, 2, 2], 2)).toStrictEqual([1, 2, 1, 2])
  })
})
