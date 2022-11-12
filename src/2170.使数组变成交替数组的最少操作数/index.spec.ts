import { minimumOperations } from '.'

describe('2170.使数组变成交替数组的最少操作数', () => {
  it('示例一', () => {
    expect(minimumOperations([3, 1, 3, 2, 4, 3])).toBe(3)
  })

  it('示例二', () => {
    expect(minimumOperations([1, 2, 2, 2, 2])).toBe(2)
  })
})
