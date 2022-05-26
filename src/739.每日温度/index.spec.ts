import { dailyTemperatures } from '.'

describe('739.每日温度', () => {
  it('示例一', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0])
  })

  it('示例二', () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0])
  })

  it('示例三', () => {
    expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0])
  })
})
