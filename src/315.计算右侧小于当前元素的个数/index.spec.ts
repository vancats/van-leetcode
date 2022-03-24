import { countSmaller } from "./index"

describe('315.计算右侧小于当前元素的个数', () => {
  it('示例一', () => {
    expect(countSmaller([5, 2, 6, 1])).toStrictEqual([2, 1, 1, 0])
  })

  it('示例二', () => {
    expect(countSmaller([-1])).toStrictEqual([0])
  })

  it('示例三', () => {
    expect(countSmaller([-1, -1])).toStrictEqual([0, 0])
  })

  it('示例三', () => {
    expect(countSmaller([0, 2, 1])).toStrictEqual([0, 1, 0])
  })
})