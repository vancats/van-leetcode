import { partition, partition2 } from '.'

describe('剑指OfferII086.分割回文子字符串', () => {
  describe('回溯 + dp 预处理', () => {
    testCase(partition)
  })

  describe('回溯 + 记忆化搜索', () => {
    testCase(partition2)
  })
})

function testCase(fn: (s: string) => string[][]) {
  it('示例一', () => {
    expect(fn('google')).toStrictEqual([['g', 'o', 'o', 'g', 'l', 'e'], ['g', 'oo', 'g', 'l', 'e'], ['goog', 'l', 'e']])
  })

  it('示例二', () => {
    expect(fn('aab')).toStrictEqual([['a', 'a', 'b'], ['aa', 'b']])
  })

  it('示例三', () => {
    expect(fn('a')).toStrictEqual([['a']])
  })
}
