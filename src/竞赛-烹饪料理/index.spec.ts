import { perfectMenu } from '.'

describe('竞赛-烹饪料理', () => {
  it('示例一', () => {
    const meterials = [3, 2, 4, 1, 2]
    const cookbooks = [[1, 1, 0, 1, 2], [2, 1, 4, 0, 0], [3, 2, 4, 1, 0]]
    const attribute = [[3, 2], [2, 4], [7, 6]]
    const limit = 5
    expect(perfectMenu(meterials, cookbooks, attribute, limit)).toBe(7)
  })

  it('示例二', () => {
    const meterials = [10, 10, 10, 10, 10]
    const cookbooks = [[1, 1, 1, 1, 1], [3, 3, 3, 3, 3], [10, 10, 10, 10, 10]]
    const attribute = [[5, 5], [6, 6], [10, 10]]
    const limit = 1
    expect(perfectMenu(meterials, cookbooks, attribute, limit)).toBe(11)
  })
})
