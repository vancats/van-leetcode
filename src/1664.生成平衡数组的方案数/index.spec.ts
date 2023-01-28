import { waysToMakeFair } from '.'
describe('1664.生成平衡数组的方案数', () => {
  it('示例一', () => {
    expect(waysToMakeFair([2, 1, 6, 4])).toBe(1)
  })

  it('示例一', () => {
    expect(waysToMakeFair([1, 1, 1])).toBe(3)
  })

  it('示例一', () => {
    expect(waysToMakeFair([1, 2, 3])).toBe(0)
  })
})
