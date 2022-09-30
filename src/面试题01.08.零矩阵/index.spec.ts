import { setZeroes } from '.'

describe('面试题01.08.零矩阵', () => {
  it('示例一', () => {
    const arr: number[][] = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
    setZeroes(arr)
    expect(arr).toStrictEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]])
  })

  it('示例三', () => {
    const arr: number[][] = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
    setZeroes(arr)
    expect(arr).toStrictEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]])
  })
})
