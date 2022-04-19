import { shortestToChar } from '.'

describe('821.字符的最短距离', () => {
  it('示例一', () => {
    expect(shortestToChar('loveleetcode', 'e')).toStrictEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
  })

  it('示例二', () => {
    expect(shortestToChar('aaab', 'b')).toStrictEqual([3, 2, 1, 0])
  })
})
