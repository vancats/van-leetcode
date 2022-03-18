import { countHighestScoreNodes } from './index'

describe('2049.统计最高分的节点数目', () => {
  it('示例一', () => {
    const arr = [-1, 2, 0, 2, 0]
    const result = countHighestScoreNodes(arr)
    expect(result).toBe(3)
  })

  it('示例二', () => {
    const arr = [-1, 2, 0]
    const result = countHighestScoreNodes(arr)
    expect(result).toBe(2)
  })

})