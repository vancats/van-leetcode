import { removeCoveredIntervals } from '.'

describe('1288.删除被覆盖区间', () => {
  it('示例', () => {
    expect(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]])).toBe(2)
  })
})
