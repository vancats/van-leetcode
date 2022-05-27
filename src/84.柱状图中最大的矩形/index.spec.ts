import { largestRectangleArea } from '.'

describe('84.柱状图中最大的矩形', () => {
  it('示例一', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10)
  })

  it('示例二', () => {
    expect(largestRectangleArea([2, 4])).toBe(4)
  })
})
