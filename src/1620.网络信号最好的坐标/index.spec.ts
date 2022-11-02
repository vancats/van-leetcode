import { bestCoordinate } from '.'

describe('1620.网络信号最好的坐标', () => {
  it('示例一', () => {
    expect(bestCoordinate([[1, 2, 5], [2, 1, 7], [3, 1, 9]], 2)).toStrictEqual([2, 1])
  })

  it('示例二', () => {
    expect(bestCoordinate([[23, 11, 21]], 9)).toStrictEqual([23, 11])
  })

  it('示例三', () => {
    expect(bestCoordinate([[2, 1, 9], [0, 1, 9]], 2)).toStrictEqual([0, 1])
  })

  it('示例四', () => {
    expect(bestCoordinate([[42, 0, 0]], 7)).toStrictEqual([0, 0])
  })

  it('示例五', () => {
    expect(bestCoordinate([[0, 1, 2], [2, 1, 2], [1, 0, 2], [1, 2, 2]], 1)).toStrictEqual([1, 1])
  })
})
