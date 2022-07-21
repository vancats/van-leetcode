import { maxScoreIndices } from '.'

describe('2155.分组得分最高的所有下标', () => {
  it('示例一', () => {
    expect(maxScoreIndices([0, 0, 1, 0])).toStrictEqual([2, 4])
  })

  it('示例一', () => {
    expect(maxScoreIndices([0, 0, 0])).toStrictEqual([3])
  })

  it('示例一', () => {
    expect(maxScoreIndices([1, 1])).toStrictEqual([0])
  })
})
