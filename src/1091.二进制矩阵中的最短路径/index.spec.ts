import { shortestPathBinaryMatrix } from '.'

describe('1091.二进制矩阵中的最短路径', () => {
  it('示例一', () => {
    expect(shortestPathBinaryMatrix([[0, 1], [1, 0]])).toBe(2)
  })

  it('示例二', () => {
    expect(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]])).toBe(4)
  })

  it('示例三', () => {
    expect(shortestPathBinaryMatrix([[1, 0, 0], [1, 1, 0], [1, 1, 0]])).toBe(-1)
  })

  it('示例四', () => {
    expect(shortestPathBinaryMatrix([[0, 1, 1, 0, 0, 0], [0, 1, 0, 1, 1, 0], [0, 1, 1, 0, 1, 0], [0, 0, 0, 1, 1, 0], [1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 0]])).toBe(14)
  })
})
