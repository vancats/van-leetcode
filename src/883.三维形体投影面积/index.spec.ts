import { projectionArea } from '.'

describe('883.三维形体投影面积', () => {
  it('示例一', () => {
    expect(projectionArea([[1, 2], [3, 4]])).toBe(17)
  })

  it('示例二', () => {
    expect(projectionArea([[2]])).toBe(5)
  })

  it('示例三', () => {
    expect(projectionArea([[1, 0], [0, 2]])).toBe(8)
  })
})
