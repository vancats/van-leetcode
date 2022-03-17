import { productExceptSelf } from './index'

describe('238.除自身以外数组的乘积', () => {
  it('示例一', () => {
    const expected = positiveZero(productExceptSelf([1, 2, 3, 4]))
    expect(expected).toEqual([24, 12, 8, 6])
  })

  it('示例二', () => {
    const expected = positiveZero(productExceptSelf([-1, 1, 0, -3, 3]))
    expect(expected).toEqual([0, 0, 9, 0, 0])
  })
})

function positiveZero(arr: number[]): number[] {
  return arr.map(item => ~~item)
}
