import { buildMatrix } from '.'

describe('竞赛-给定条件下构造矩阵', () => {
  it('示例一', () => {
    expect(buildMatrix(3, [[1, 2], [3, 2]], [[2, 1], [3, 2]])).toStrictEqual([[0, 0, 1], [3, 0, 0], [0, 2, 0]])
  })

  it('示例二', () => {
    expect(buildMatrix(3, [[1, 2], [2, 3], [3, 1], [2, 3]], [[2, 1]])).toStrictEqual([])
  })
})
