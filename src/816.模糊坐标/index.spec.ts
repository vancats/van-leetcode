import { ambiguousCoordinates } from '.'

describe('816.模糊坐标', () => {
  it('示例一', () => {
    expect(ambiguousCoordinates('(123)')).toStrictEqual(['(1, 23)', '(1, 2.3)', '(12, 3)', '(1.2, 3)'])
  })

  it('示例二', () => {
    expect(ambiguousCoordinates('(00011)')).toStrictEqual(['(0, 0.011)', '(0.001, 1)'])
  })

  it('示例三', () => {
    expect(ambiguousCoordinates('(0123)')).toStrictEqual(['(0, 123)', '(0, 1.23)', '(0, 12.3)', '(0.1, 23)', '(0.1, 2.3)', '(0.12, 3)'])
  })

  it('示例四', () => {
    expect(ambiguousCoordinates('(100)')).toStrictEqual(['(10, 0)'])
  })
})
