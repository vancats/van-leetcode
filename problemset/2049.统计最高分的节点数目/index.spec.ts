import { countHighestScoreNodes } from './index'

describe('2049.统计最高分的节点数目', () => {
  it('示例一', () => {
    const arr = [-1, 2, 0, 2, 0]
    const expected = countHighestScoreNodes(arr)
    expect(expected).toBe(3)
  })

  it('示例二', () => {
    const arr = [-1, 2, 0]
    const expected = countHighestScoreNodes(arr)
    expect(expected).toBe(2)
  })

})