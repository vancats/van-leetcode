import { twoSum } from '.'

describe('167.两数之和II-输入有序数组', () => {
  it('示例一', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
  })

  it('示例二', () => {
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3])
  })

  it('示例三', () => {
    expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2])
  })
})
