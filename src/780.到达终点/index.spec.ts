import { reachingPoints } from "."

describe('780.到达终点', () => {
  it('示例一', () => {
    expect(reachingPoints(1, 1, 3, 5)).toBe(true)
  })

  it('示例二', () => {
    expect(reachingPoints(1, 1, 2, 2)).toBe(false)
  })

  it('示例三', () => {
    expect(reachingPoints(1, 1, 1, 1)).toBe(true)
  })
})
