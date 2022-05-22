import { nextGreaterElement } from '.'

describe('496.下一个更大元素I', () => {
  it('示例一', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toStrictEqual([-1, 3, -1])
  })

  it('示例二', () => {
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toStrictEqual([3, -1])
  })

  it('示例三', () => {
    expect(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])).toStrictEqual([7, 7, 7, 7, 7])
  })
})
