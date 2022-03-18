import { exchange } from './index'
describe('剑指Offer21.调整数组顺序使奇数位于偶数前面', () => {
  it('示例', () => {
    const arr = [1, 2, 3, 4]
    const result = exchange(arr)
    expect(result).toStrictEqual([1, 3, 2, 4])
  })
})