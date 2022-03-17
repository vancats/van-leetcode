import { sortColors } from './index'

describe('75.颜色分类', () => {
  it('示例一', () => {
    const arr = [2, 0, 2, 1, 1, 0]
    sortColors(arr)
    expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2])
  })

  it('示例二', () => {
    const arr = [2, 0, 1]
    sortColors(arr)
    expect(arr).toStrictEqual([0, 1, 2])
  })
})