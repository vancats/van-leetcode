import { edgeScore } from '.'

describe('竞赛-边积分最高的节点', () => {
  it('示例一', () => {
    expect(edgeScore([1, 0, 0, 0, 0, 7, 7, 5])).toBe(7)
  })

  it('示例二', () => {
    expect(edgeScore([2, 0, 0, 2])).toBe(0)
  })
})
