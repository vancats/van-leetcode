import { numDecodings, numDecodings1 } from '.'

describe('91.解码方法', () => {
  describe('动态规划', () => {
    testCase(numDecodings)
  })

  describe('动态规划优化', () => {
    testCase(numDecodings1)
  })
})

function testCase(fn: (str: string) => number) {
  it('示例一', () => {
    expect(fn('12')).toBe(2)
  })

  it('示例二', () => {
    expect(fn('226')).toBe(3)
  })

  it('示例三', () => {
    expect(fn('0')).toBe(0)
  })
}
