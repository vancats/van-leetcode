import { nextGreaterElements } from '.'

describe('503.下一个更大元素II', () => {
  it('示例一', () => {
    expect(nextGreaterElements([1, 2, 1])).toStrictEqual([2, -1, 2])
  })

  it('示例二', () => {
    expect(nextGreaterElements([1, 2, 3, 4, 3])).toStrictEqual([2, 3, 4, -1, 4])
  })

  it('示例三', () => {
    expect(nextGreaterElements([-1, 0])).toStrictEqual([0, -1])
  })
})
