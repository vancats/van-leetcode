import { trap1, trap2, trap3 } from '.'

describe('42.接雨水', () => {
  describe('动态规划', () => {
    testCase(trap1)
  })

  describe('单调栈', () => {
    testCase(trap2)
  })
  describe('双指针', () => {
    testCase(trap3)
  })
})

function testCase(fn: (height: number[]) => number) {
  it('示例一', () => {
    expect(fn([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  })

  it('示例二', () => {
    expect(fn([4, 2, 0, 3, 2, 5])).toBe(9)
  })
}
