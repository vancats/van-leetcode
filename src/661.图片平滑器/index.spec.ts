import { imageSmoother } from './index'

describe('661.图片平滑器', () => {
  it('示例一', () => {
    const result = imageSmoother([[100, 200, 100], [200, 50, 200], [100, 200, 100]])
    const expected = [[137, 141, 137], [141, 138, 141], [137, 141, 137]]
    expect(result).toStrictEqual(expected)
  })

  it('示例二', () => {
    const result = imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
    const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    expect(result).toStrictEqual(expected)
  })
})