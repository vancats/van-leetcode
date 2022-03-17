import { sortColors } from './index'

describe('75.颜色分类', () => {
  it('示例一', () => {
    const expected = sortColors([2, 0, 2, 1, 1, 0])
    expect(expected).toStrictEqual([0, 0, 1, 1, 2, 2])
  })

  it('示例二', () => {
    const expected = sortColors([2, 0, 1])
    expect(expected).toStrictEqual([0, 1, 2])
  })
})