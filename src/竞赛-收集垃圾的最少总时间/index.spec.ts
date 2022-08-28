import { garbageCollection } from '.'

describe('竞赛-收集垃圾的最少总时间', () => {
  it('示例一', () => {
    expect(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3])).toBe(21)
  })

  it('示例二', () => {
    expect(garbageCollection(['MMM', 'PGM', 'GP'], [3, 10])).toBe(37)
  })
})
