import { partition, partition2 } from '.'

describe('131.分割回文串', () => {
  describe('回溯 + dp 预处理', () => {
    testCase(partition)
  })

  describe('回溯 + 记忆化搜索', () => {
    testCase(partition2)
  })
})

function testCase(fn: (s: string) => string[][]) {
  it('示例一', () => {
    expect(fn('aab')).toStrictEqual([['a', 'a', 'b'], ['aa', 'b']])
  })

  it('示例二', () => {
    expect(fn('a')).toStrictEqual([['a']])
  })
}
